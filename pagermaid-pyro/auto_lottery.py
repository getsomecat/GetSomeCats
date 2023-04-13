# -*- coding: utf-8 -*-
"""
@Author  : FoKit
@Time    : 2023/04/12
@Explain : 用于 PagerMaid-Modify 自动参与 @cnLottery_bot 的抽奖活动，同群同口令12小时内只参与一次。
"""

import re
import html
import asyncio
import traceback
from pagermaid import redis, bot
from pagermaid.listener import listener
from pagermaid.utils import alias_command

auto_lottery_bot_userId = 1326008198  # @cnLottery_bot UserID
auto_lottery_Key = "auto_lottery"

@listener(incoming=True, outgoing=True, ignore_edited=True, from_users=auto_lottery_bot_userId)
async def auto_lottery(context):
    try:
        chat_id = context.chat_id
        redis_chat_key = f"auto_lottery.{chat_id}"
        status = redis.get(auto_lottery_Key)
        if not status:
            status = "Disabled"
        else:
            status = str(status, "utf-8")
        if status == "Disabled":
            return
        else:
            message = context.message.text
            commands = re.findall(r'(?<=发送『).+(?=』即可)|(?<=(?:cnLottery_bot))\?start=[\w-]+', message)

            if commands != []:
                lotteryRecord = redis.get(redis_chat_key)
                if not lotteryRecord:
                    lotteryRecord = ""
                else:
                    lotteryRecord = str(lotteryRecord, "utf-8")
                for cmd in commands:
                    if f"『{cmd}』" not in lotteryRecord:
                        lottery = {}
                        if cmd.startswith("?start="):
                            cmd2 = cmd.replace("?start=", "")
                            lottery = await context.client.send_message(auto_lottery_bot_userId, f"/start {cmd2}")
                        else:
                            lottery = await context.client.send_message(chat_id, cmd)
                        lotteryRecord += f"『{cmd}』"
                        redis.set(redis_chat_key, lotteryRecord, ex=43200)  # 缓存12小时
                        print(f"[{chat_id}]『{cmd}』已写入缓存\n")
                        await del_msg(lottery, 10) # 10秒后自动删除
                    else:
                        print(f"已在[{chat_id}]参与过『{cmd}』抽奖活动\n")
    except Exception as e:
        traceback.print_exc()
        print(f"\n出错了:\n" + str(e))

async def del_msg(context, Seconds = 0):
    await asyncio.sleep(Seconds)
    try:
        await context.delete()
    except Exception as e:
        traceback.print_exc()
        print(f"\n出错了:\n" + str(e))


@listener(is_plugin=True, outgoing=True, command=alias_command("cj"), description="用于 PagerMaid-Modify 自动参与 @cnLottery_bot 的抽奖活动，同群同口令12小时内只参与一次。\n`-cj on`    开启自动抽奖\n`-cj off`  关闭自动抽奖\n`-cj del`  清除本群抽奖记录", parameters="")
async def auto_delete_set(context):
    try:
        chat_id = str(context.chat_id)
        redis_chat_key = f"auto_lottery.{chat_id}"
        if len(context.parameter) == 0:
            msg_text = "命令未携带参数，请发送 -help cj 查看方法。"
            await context.edit(msg_text)
            await asyncio.sleep(5)
            await context.delete()
        elif len(context.parameter) == 1:
            if context.parameter[0] == "on":
                redis.set(auto_lottery_Key, "Enable")
                msg_text = f"已开启自动参与抽奖"
                print(chat_id, msg_text)
                await context.edit(msg_text)
            elif context.parameter[0] == "off":
                redis.set(auto_lottery_Key, "Disabled")
                msg_text = f"已关闭自动参与抽奖"
                print(chat_id, msg_text)
                await context.edit(msg_text)
            elif context.parameter[0] == "del":
                redis.set(redis_chat_key, "")
                msg_text = f"已清除本群抽奖记录"
                print(chat_id, msg_text)
                await context.edit(msg_text)
    except Exception as e:
        traceback.print_exc()
        print(f"\n出错了:\n" + str(e))
