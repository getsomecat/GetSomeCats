# 另一个VPS流量监控Surge面板

## 简介

在自己的VPS简单部署一个流量统计服务，然后通过Surge的面板进行进出站的流量监控和内存、处理器的占用机器运行时间等进行监控。

之前写过一篇通过 shell +caddy 的方式进行，后面 @GetSomeNeko 大佬通过 Python 的方式也写了一个，相对来说更简单，我结合之前的整理一下过程。

之前的部署方法链接：[Github](https://github.com/getsomecat/GetSomeCats/blob/Surge/自己部署一个VPS流量监控Surge面板.md)  [Blog](https://surge.tel/09/2549/)

## 免责声明：

本文涉及的任何解锁和解密分析脚本仅用于资源共享和学习研究，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。

间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, 本文作者对于由此引起的任何隐私泄漏或其他后果概不负责。

请勿将本文内的任何内容用于商业或非法目的，否则后果自负。

如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我将在收到认证文件后删除相关脚本。

对任何本文中包含的脚本在使用中可能出现的问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害．

您必须在下载后的24小时内从计算机或手机中完全删除以上内容。

任何以任何方式查看此项目的人或直接或间接使用该项目的任何脚本的使用者都应仔细阅读此声明。本文作者保留随时更改或补充此免责声明的权利。一旦使用并复制了任何本文相关脚本或其他内容，则视为您已接受此免责声明。



## 步骤



- ### SSH登录到VPS



- ### 获取权限



`sudo -i`



- ### 更新和升级系统



`apt update && apt upgrade -y`

如果没有安装过 Python3 的话要安装

- ### 安装 Python3 和 pip 包管理器

  运行以下命令安装 Python3 和 pip 包管理器。



  ```
  sudo apt install python3 python3-pip
  ```





- ####  安装依赖包

  ```
  pip3 install psutil
  ```
  如果在安装psutil中出现如下错误提示，
![CleanShot 2023-11-09 at 09.58.12@2x](assets/CleanShot%202023-11-09%20at%2009.58.12@2x.png)

无非就是说这样直接安装不安全，要用虚拟环境来安装，但是作为一个一把梭哈的人，我会管这些吗？
按照提示信息安装命令改为：

   ```
  pip3 install psutil --break-system-packages
  ```
  ![CleanShot 2023-11-09 at 10.03.39@2x](assets/CleanShot%202023-11-09%20at%2010.03.39@2x.png)

  在后面运行 py 程序的时候，如果遇到缺少的依赖包，会有相应的提示：ModuleNotFoundError: No module named xxxx  这时候通过上面的 pip3 install xxxx 进行相应的依赖包安装即可解决



- ###  编写运行程序



`vim /root/servertraffic.py`



将以下内容粘贴进去并保存



```
#!/usr/bin/env python3
# Sestea

import http.server
import socketserver
import json
import time
import psutil

# The port number of the local HTTP server, which can be modified
port = 7122

class RequestHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()

        # Limit the HTTP server to one request per second
        time.sleep(1)

        # Obtain CPU/MEM usage and network traffic info
        cpu_usage = psutil.cpu_percent()
        mem_usage = psutil.virtual_memory().percent
        bytes_sent = psutil.net_io_counters().bytes_sent
        bytes_recv = psutil.net_io_counters().bytes_recv
        bytes_total = bytes_sent + bytes_recv


        # Get UTC timestamp and uptime
        utc_timestamp = int(time.time())
        uptime = int(time.time() - psutil.boot_time())

        # Get the last statistics time
        last_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())

        # Construct JSON dictionary
        response_dict = {
            "utc_timestamp": utc_timestamp,
            "uptime": uptime,
            "cpu_usage": cpu_usage,
            "mem_usage": mem_usage,
            "bytes_sent": str(bytes_sent),
            "bytes_recv": str(bytes_recv),
            "bytes_total": str(bytes_total),
            "last_time": last_time
        }

        # Convert JSON dictionary to JSON string
        response_json = json.dumps(response_dict).encode('utf-8')
        self.wfile.write(response_json)

with socketserver.ThreadingTCPServer(("", port), RequestHandler, bind_and_activate=False) as httpd:
    try:
        print(f"Serving at port {port}")
        httpd.allow_reuse_address = True
        httpd.server_bind()
        httpd.server_activate()
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("KeyboardInterrupt is captured, program exited")
```

**说明：此代码是通过VPS的7122端口进行监控，请确保该端口的开放，如果你熟悉代码，也可以根据自己需要进行修改**



- ###  编写服务



`vim /etc/systemd/system/servertraffic.service`

将下面内容粘贴进去后保存



```
[Unit]
Description=Server Traffic Monitor

[Service]
Type=simple
WorkingDirectory=/root/
User=root
ExecStart=/usr/bin/python3 /root/servertraffic.py
Restart=always

[Install]
WantedBy=multi-user.target
```



- ###  运行



  进行完上述步骤后，执行下面指令运行

启动并激活这个服务：



`sudo systemctl start servertraffic.service`

`sudo systemctl enable servertraffic.service`



查看服务状态以确保它已经运行：



`sudo systemctl status servertraffic.service`



这样就可以在后台运行 /root/servertraffic.py 了。请按照自己实际情况修改服务单元文件中的相关配置，比如 User 和 WorkingDirectory。



### Surge模块安装



将下面内容复制到本地模块中：

```
#!name=CatVPS
#!desc=监控VPS流量信息和处理器、内存占用情况
#!author= 面板和脚本部分@Sestea @clydetime  VPS端部分 @Sestea 由 @整点猫咪 进行整理
#!howto=将模块内容复制到本地后根据自己VPS IP地址及端口修改 http://127.0.0.1:7122



[Panel]
Serverinfo = script-name= Serverinfo,update-interval=3600

[Script]
Serverinfo = type=generic,script-path=https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/script/serverinfo.js, argument = url=http://127.0.0.1:7122&name=Server Info&icon=party.popper
```

将其中的 `http://127.0.0.1:7122`部分根据自己上面教程部分改为自己的VPS IP和端口即可使用。
