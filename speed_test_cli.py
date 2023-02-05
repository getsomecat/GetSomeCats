import contextlib
import platform
import tarfile

from asyncio import create_subprocess_shell
from asyncio.subprocess import PIPE
from json import loads

from PIL import Image
from os import makedirs
from os.path import exists
from httpx import ReadTimeout

from pagermaid.listener import listener
from pagermaid.single_utils import safe_remove
from pagermaid.enums import Client, Message, AsyncClient
from pagermaid.utils import lang

speedtest_path = "/var/lib/pagermaid/plugins/speedtest-cli/speedtest"

async def download_cli(request):
    speedtest_version = "1.2.0"
    machine = str(platform.machine())
    if machine == "AMD64":
        machine = "x86_64"
    filename = (f"ookla-speedtest-{speedtest_version}-linux-{machine}.tgz")
    speedtest_url = (f"https://install.speedtest.net/app/cli/{filename}")
    path = "/var/lib/pagermaid/plugins/speedtest-cli/"
    if not exists(path):
        makedirs(path)
    data = await request.get(speedtest_url)
    with open(path+filename, mode="wb") as f:
        f.write(data.content)
    try:
        tar = tarfile.open(path+filename, "r:gz")
        file_names = tar.getnames()
        for file_name in file_names:
            tar.extract(file_name, path)
        tar.close()
        safe_remove(path+filename)
        safe_remove(f"{path}speedtest.5")
        safe_remove(f"{path}speedtest.md")
    except Exception:
        return "解压测速文件失败",None
    proc = await create_subprocess_shell(
        f"chmod +x {speedtest_path}",
        shell=True,
        stdout=PIPE,
        stderr=PIPE,
        stdin=PIPE,
    )
    stdout, stderr = await proc.communicate()
    return path if exists(f"{path}speedtest") else None

async def unit_convert(byte):
    """ Converts byte into readable formats. """
    power = 1000
    zero = 0
    units = {
        0: '',
        1: 'Kb/s',
        2: 'Mb/s',
        3: 'Gb/s',
        4: 'Tb/s'
        }
    byte = byte * 8
    while byte > power:
        byte /= power
        zero += 1
    return f"{round(byte, 2)} {units[zero]}"  

async def start_speedtest(command):
    """ Executes command and returns output, with the option of enabling stderr. """
    proc = await create_subprocess_shell(command,shell=True,stdout=PIPE,stderr=PIPE,stdin=PIPE)
    stdout, stderr = await proc.communicate()
    try:
        stdout = str(stdout.decode().strip())
        stderr = str(stderr.decode().strip())
    except UnicodeDecodeError:
        stdout = str(stdout.decode('gbk').strip())
        stderr = str(stderr.decode('gbk').strip())
    return stdout,stderr,proc.returncode

async def run_speedtest(request: AsyncClient, message: Message):
    if not exists(speedtest_path):
        await download_cli(request)

    command = (f"sudo {speedtest_path} --accept-license --accept-gdpr -s {message.arguments} -f json") if str.isdigit(message.arguments) else (f"sudo {speedtest_path} --accept-license --accept-gdpr -f json")

    outs,errs,code = await start_speedtest(command)
    if code == 0:
        result = loads(outs)
    elif loads(errs)['message'] == "Configuration - No servers defined (NoServersException)":
        return "无法连接到指定服务器",None
    else:
        return lang('speedtest_ConnectFailure'),None


    des = (
        f"**Speedtest** \n"
        f"Server: `{result['server']['name']} - "
        f"{result['server']['id']}` \n"
        f"Location: `{result['server']['location']}` \n"
        f"Upload: `{await unit_convert(result['upload']['bandwidth'])}` \n"
        f"Download: `{await unit_convert(result['download']['bandwidth'])}` \n"
        f"Latency: `{result['ping']['latency']} ms`\n"
        f"Timestamp: `{result['timestamp']}`"
        #f"\nDebug: `\nmessage.arguments.len:{len(message.arguments)}\nresult_str: {outs}\nerrs:{errs}\nreturncode:{code}`"
    )

    if result["result"]["url"]:
        data =  await request.get(result["result"]["url"]+'.png')
        with open("speedtest.png", mode="wb") as f:
            f.write(data.content)
        with contextlib.suppress(Exception):
            img = Image.open("speedtest.png")
            c = img.crop((17, 11, 727, 389))
            c.save("speedtest.png")
    return des, "speedtest.png" if exists("speedtest.png") else None


async def get_all_ids(request):
    """ Get speedtest_server. """
    if not exists(speedtest_path):
        await download_cli(request)
    outs,errs,code = await start_speedtest(f"sudo {speedtest_path} -f json -L")
    result = loads(outs) if code == 0 else None
    return (
        (
            "附近的测速点有：\n"
            + "\n".join(
                f"`{i['id']}` - `{i['name']}` - `{i['location']}`"
                for i in result['servers']
            ),
            None,
        )
        if result
        else ("附近没有测速点", None)
    )

@listener(command="st",
          need_admin=True,
          description=lang('speedtest_des'),
          parameters="(list/server id)")
async def speedtest(client: Client, message: Message, request: AsyncClient):
    """ Tests internet speed using speedtest. """
    msg = message
    if message.arguments == "list":
        des, photo = await get_all_ids(request)
    elif len(message.arguments) == 0 or str.isdigit(message.arguments):
        msg: Message = await message.edit(lang('speedtest_processing'))
        des, photo = await run_speedtest(request,message)
    else:
        return await msg.edit(lang('arg_error'))
    if not photo:
        return await msg.edit(des)
    try:
        await client.send_photo(message.chat.id, photo, caption=des)
    except Exception:
        return await msg.edit(des)
    await msg.safe_delete()
    safe_remove(photo)
