# 一个VPS流量监控Surge面板

## 简介

在自己的VPS简单部署一个流量统计服务，然后通过Surge的面板进行进出站的流量监控和内存、处理器的占用进行监控。

随着在代理圈混久了，谁的手里没那么三五个小鸡（VPS）呢？有些小鸡有流量限制，虽然也有专门的探针，但是总的来说还是不方便，于是想起来利用上Surge的Panel来显示出站入站流量等信息，在 @ATRI0828 和 @wuhu_zzz 的大力帮助下，顺利的实现了，下面简单写一下过程。

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



- ### 安装caddy



- ####  Caddy 的 GPG 密钥添加到 trusted.gpg.d 目录中

```
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo tee /etc/apt/trusted.gpg.d/caddy-stable.asc >/dev/null
```



- ####  添加 Caddy 的 apt 仓库



```
echo "deb [trusted=yes] https://dl.cloudsmith.io/public/caddy/stable/deb/debian any-version main" | sudo tee /etc/apt/sources.list.d/caddy-stable.list
```



- ####  apt 软件源列表并安装 Caddy



```
apt update

apt install caddy
```



- ###  编写服务



`vim /etc/systemd/system/traffic.service`

将下面内容粘贴进去后保存



```
[Unit]
Description=traffic
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/root/
ExecStart=/root/traffic.sh
Restart=on-failure
RestartSec=30s

[Install]
WantedBy=multi-user.target

```

备注：默认的是网卡名是 **eth0**，如果是其它网卡名，将 `ExecStart=/root/traffic.sh`这里改写为：`ExecStart=/root/traffic.sh ethxx`    **ethxx**为你的网卡名



- ###  编写运行程序



`vim /root/traffice.sh`



将以下内容粘贴进去并保存



```
#!/bin/sh

if [ "$1" == "--help" ];then
  cat << EOF
$0 网卡名称
--help 打印帮助菜单
EOF
fi

if [ -z "$1" ];then
  if ip a ; then
  interface=$(ip a | grep mtu | awk -F ':' '{print $2}' | head -n 2 | tail -n +2 | awk -F ' ' '{print $1}')
  else
  interface=eth0
  fi
else
  interface=$1
fi

if [ "$(cat /proc/uptime | awk '{print $1}' | sed 's/\..*//g')" -lt "120" ]; then
  if [ -n "$(cat ./all)" ]; then
  expr "$(cat ./all)" + "$(cat ./all-now)" > ./all
  else
  echo "1" > ./all
  fi
  if [ -n "$(cat ./tx)" ]; then
  expr "$(cat ./tx)" + "$(cat ./tx-now)" > ./tx
  else
  echo "1" > ./tx
  fi
  if [ -n "$(cat ./rx)" ]; then
  expr "$(cat ./rx)" + "$(cat ./rx-now)" > ./rx
  else
  echo "1" > ./rx
  fi
else
  if [ -z "$(cat ./all)" ]; then
  echo "1" > ./all
  fi
  if [ -z "$(cat ./tx)" ]; then
  echo "1" > ./tx
  fi
  if [ -z "$(cat ./rx)" ]; then
  echo "1" > ./rx
  fi
fi

nohup caddy file-server --browse --listen :49155 &


calculate() {
str=`expr $str + 2`
str=`expr $str / 4 `
if [ $str = 0 ]; then
value="$info"B
elif [ $str = 1 ]; then
value=`expr $info / 1024`KB
elif [ $str = 2 ]; then
value=`expr $info / 1024 / 1024`MB
elif [ $str = 3 ]; then
value=`expr $info / 1024 / 1024 / 1024`GB
elif [ $str = 4 ]; then
value=`expr $info / 1024 / 1024 / 1024 / 1024`TB
elif [ $str = 5 ]; then
value=`expr $info / 1024 / 1024 / 1024 / 1024 / 1024`PB
fi
}

START_TIME=$(date +%s)

while true; do
  # 记录执行时间
  CURRENT_TIME=$(date +%s)
  TIME_PASSED=$((CURRENT_TIME - START_TIME))

  NIC_RX=$(cat "/sys/class/net/${interface}/statistics/rx_bytes")
  NIC_TX=$(cat "/sys/class/net/${interface}/statistics/tx_bytes")
  NIC=$(expr $NIC_RX + $NIC_TX)
  echo ${NIC} > ./all-now
  echo ${NIC_TX} > ./tx-now
  echo ${NIC_RX} > ./rx-now
  rx=$(cat ./rx)
  tx=$(cat ./tx)
  all=$(cat ./all)
  NIC_RX_ALL=$(expr ${NIC_RX} + ${rx})
  NIC_TX_ALL=$(expr ${NIC_TX} + ${tx})
  NIC_ALL=$(expr ${NIC} + ${all})
  str=${#NIC_RX_ALL} && info=${NIC_RX_ALL} && calculate && NIC_RX_ALL=$value
  str=${#NIC_TX_ALL} && info=${NIC_TX_ALL} && calculate && NIC_TX_ALL=$value
  str=${#NIC_ALL} && info=${NIC_ALL} && calculate && NIC_ALL=$value

  CPU_USAGE=$(top -b -n 1 | grep Cpu | awk '{print $2}' | cut -f 1 -d "%" | sed 's/\..*//g')
  CPU_SYS=$(top -b -n 1 | grep Cpu | awk '{print $4}' | cut -f 1 -d "%" | sed 's/\..*//g')
  CPU=$(expr $CPU_USAGE + $CPU_SYS)

  MEM_TOTAL=$(free -m | awk -F '[ :]+' 'NR==2{print $2}')
  MEM_USER=$(free -m | awk -F '[ :]+' 'NR==2{print $3}')
  MEM=$(expr $MEM_USER \* 100 / $MEM_TOTAL )

  clear
  echo "网卡流量监控"
  echo "----------------------------------------"
  echo "网卡: $interface"
  echo "发送: ${NIC_TX_ALL}  接收: ${NIC_RX_ALL}  总流量: ${NIC_ALL}"
  echo "CPU使用率:${CPU}%  内存使用率: ${MEM}%"
  echo "{" > ./traffic
  echo "  \"in\": \"${NIC_RX_ALL}\","  >> ./traffic
  echo "  \"out\": \"${NIC_TX_ALL}\"," >> ./traffic
  echo "  \"all\": \"${NIC_ALL}\"," >> ./traffic
  echo "  \"cpu\": \"${CPU}%\"," >> ./traffic
  echo "  \"mem\": \"${MEM}%\"," >> ./traffic
  echo "  \"last_exec_time\": \"$(date '+%Y-%m-%d %H:%M:%S')\"" >> ./traffic
  echo "}" >> ./traffic

  # 休眠 10 秒钟
  sleep 10
done
```

**说明：此代码是通过VPS的49155端口进行监控，请确保该端口的开放，如果你熟悉代码，也可以根据自己需要进行修改**



- ###  运行



  进行完上述步骤后，执行下面指令运行



`systemctl enable --now traffic`



####  Surge模块安装



将下面内容复制到本地模块中：

```
#!name=CatVPS
#!desc=监控VPS流量信息和处理器、内存占用情况
#!author= 面板和脚本部分@wuhu_zzz VPS端部分 @ATRI0828 由 @整点猫咪 进行整理
#!howto=将模块内容复制到本地后根据自己VPS IP地址及端口修改 http://127.0.0.1:49155/traffic 部分进行使用

[Panel]
Cat VPS = script-name=CatVPS

[Script]
[Script]
CatVPS = type=generic,script-path=https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/script/CatVPS.js, argument = url=http://127.0.0.1:49155/traffic&title=Cat VPS&icon=exclamationmark.icloud&low=#06D6A0&mid=#FFD166&high=#EF476F
```

将其中的 `http://127.0.0.1:49155/traffic`部分根据自己上面教程部分改为自己的VPS IP和端口即可使用。
