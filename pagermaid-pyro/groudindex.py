import datetime
from pytz import timezone
from telethon.tl.functions.users import GetFullUserRequest
from pagermaid import version
from pagermaid.utils import alias_command
from pagermaid.listener import listener


@listener(is_plugin=True, outgoing=True, command=alias_command("groupindex"),
		  description="获取群组当日活跃数据")
async def group_index(context):
	if not context.is_group:
		await context.edit('请在群组中运行。')
		return
	# 获取群组信息
	try:
		title = context.chat.title
	except AttributeError:
		await context.edit('读取群组信息失败。')
		return
	end_id = context.id
	text = f'以下是群组 {title} 今日的活跃数据：\n'

	await context.edit('正在分析群组数据中...(1/3)')

	# 格式化日期
	now = datetime.date.today()
	yesterday = now - datetime.timedelta(days=1)
	search = datetime.datetime(yesterday.year, yesterday.month, yesterday.day, 16, 0, 0)

	# 初始化变量
	all_members = []
	member_count = {}
	start_id = None
	utc_tz = timezone('UTC')
	cst_tz = timezone('Asia/Shanghai')
	join_count = 0
	leave_count = 0
	# 读取管理员操作日志
	admin = True
	try:
		async for i in context.client.iter_admin_log(context.chat_id, join=True):
			utc_time = i.date.replace(tzinfo=utc_tz)
			cst_time = utc_time.astimezone(cst_tz)
			date = datetime.date(cst_time.year, cst_time.month, cst_time.day)
			if not date == now:
				break
			join_count += 1
		async for i in context.client.iter_admin_log(context.chat_id, leave=True):
			utc_time = i.date.replace(tzinfo=utc_tz)
			cst_time = utc_time.astimezone(cst_tz)
			date = datetime.date(cst_time.year, cst_time.month, cst_time.day)
			if not date == now:
				break
			leave_count += 1
	except:
		admin = False
	await context.edit('正在分析群组数据中...(2/3)')
	async for i in context.client.iter_messages(context.chat_id, offset_date=search, reverse=True):
		uid = i.sender_id
		if not start_id:
			start_id = i.id
		if uid:
			if uid > 0:
				if uid not in all_members:
					all_members.append(uid)
				try:
					count = member_count[uid]
				except KeyError:
					count = 0
				count += 1
				member_count[uid] = count

	msg_counts = end_id - start_id
	member_counts = len(all_members)
	text += f'活跃人数：{member_counts} 人\n' \
			f'总消息数：{msg_counts} 条\n'
	if admin:
		text += f'加群 {join_count} 人，退群 {leave_count} 人\n'
	text += f'最活跃的小可爱们：\n'
	# 字典倒序排序
	member_count = sorted(member_count.items(), key=lambda x: x[1], reverse=True)
	# 遍历列表
	if len(member_count) == 0:
		text += "没有发言用户呢 ~"
	else:
		for i in range(min(len(member_count), 5)):
			# 获取用户信息
			target_user = await context.client(GetFullUserRequest(member_count[i][0]))
			first_name = target_user.user.first_name
			if first_name:
				first_name = first_name.replace("\u2060", "")
			text += f'{first_name} `{member_count[i][1]}`\n'
	await context.edit(text)
