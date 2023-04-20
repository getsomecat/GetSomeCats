# Lite Test - 订阅检测去重工具

买一个机场，发现光香港节点就有20个，可是呢，要么都能用，要么都不能用，这个工具就是将你的机场订阅进行检测去重后进行重命名的，重命名格式类似：节点名称格式类似 `中国->美国 [UDP][11159][vmess][ws][免流骚] 1`如果你懂一点代码，也可以自行自定义。

具体如果有更多使用上的疑问，可以加群： https://t.me/zhetengsha_group

本文仅仅初步介绍一下如何进行安装和使用

**本文适合：**

- **有VPS、Mac**
- **动手能力较强**
- **有排查解决问题能力，懂一些代码更好**



## 通过Docker安装

### 安装docker

如果你的机器里面没有安装过docker，那么要先安装，如果安装过，可以跳过这一步

`sudo -i`

`apt update && apt upgrade -y`

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_09.57.59.png" alt="iShot_2023-04-20_09.57.59" style="zoom:25%;" />

`curl -fsSL https://get.docker.com -o get-docker.sh`



`sh get-docker.sh`

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_09.59.54-1956237.png" alt="iShot_2023-04-20_09.59.54" style="zoom:25%;" />

### 拉取镜像

`docker pull xream/lite-test`



<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_10.00.49.png" alt="iShot_2023-04-20_10.00.49" style="zoom:25%;" />

**以后更新也是这样拉取最新镜像**

### 配置过程

#### 创建目录

`mkdir -p /root/lite-test/global/data`

#### 设置订阅来源

`vim /root/lite-test/global/data/source.json`

并将以下代码复制粘贴进去后根据自己需要进行修改保存。



```
{
  "机场": {
    "url": "机场订阅地址",
    "checkSubInfo // 检测订阅信息": true,
    "type  // 目前只支持 clash(不走转换), html(爬虫抓取 todo). 普通订阅则不设置此字段": "clash",
    "keepServerDomain // 保留服务器域名, 不替换成 IP": false,
    "relay // 前置代理. 需要在 tpl.yaml 先设置好. 此来源的节点会组成代理链": "domestic",
    "skipCheck // 跳过检测. 落地将从节点名称中推断": true,
    "skipUniq // 跳过去重(暂时是在跳过检测时分配随机落地 IP)": true,
    "udp // 强制指定 udp 状态 true 为支持, false 为不支持": true,
    "disabled": true
  }

}


```

下面是一个例子：

此例子中采用将两个机场的订阅进行合并，并且都采取了开启UDP操作，对墙洞采取了跳过检测、跳过去重操作，而对奶昔则进行不跳过检测、不跳过去重的操作。

**具体设置请根据自己机场的情况，参照参数说明进行。**

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_11.57.19.png" alt="iShot_2023-04-20_11.57.19" style="zoom:25%;" />



### 执行

平时执行，只需要进行以下两条命令：

#### 拉取节点

 

`docker run --privileged -v /root/lite-test/global/data:/opt/app/data xream/lite-test node sub/index.js`

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_10.38.25.png" alt="iShot_2023-04-20_10.38.25" style="zoom: 25%;" />



#### 检测节点

`docker run --privileged -v /root/lite-test/global/data:/opt/app/data xream/lite-test node check/index.js`

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_10.37.45.png" alt="iShot_2023-04-20_10.37.45" style="zoom: 25%;" />

结果在 `/root/lite-test/global/data/provider` 中

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_10.47.17.png" alt="iShot_2023-04-20_10.47.17" style="zoom: 25%;" />

其中的all.yaml是你所有节点信息列表，proxy.yaml是代理节点列表（去除了国内的代理），domestic.yaml 是国内代理（回国），proxyUDP.yaml指的是支持UDP的代理节点列表。

可以将all.yaml的内容复制出来根据自己所用软件，导入到clash、surge、loon或者其他代理App中（可能需要substore进行转换）

此处婊一下某N字头的一线大机场，订阅难拉取，反复拉取了检测几次最终的all中还是没有，而在之前的试验中，好不容易拉取去重之后，20来个HK节点，实际是一台机🌚，更不用说其他一些莫名其妙的审计了。

Tips：我这是将两个机场合并到一起，如果不想合并，可以再玩一套不同的配置 `/root/lite-test/xxxx` ，例如此文中的global，可以将global改成dlercloud，magicschool等等，一个机场一个，然后运行命令时候进行更改相应运行路径，例如编辑配置文件时  `vim /root/lite-test/dlercloud/data/source.json`，拉取时运行 `docker run --privileged -v /root/lite-test/dlercloud/data:/opt/app/data xream/lite-test node sub/index.js` 只是**要注意别同时运行**。

### 补充设置

要进行UDP检测的话，需要对VPS的DNS进行更改



`vim /etc/systemd/resolved.conf`



将其中的DNS按照如下改：



```
[Resolve]

DNS=8.8.8.8

DNS=9.9.9.11
```

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_12.17.39.png" alt="iShot_2023-04-20_12.17.39" style="zoom: 25%;" />

重启服务：

`systemctl restart systemd-resolved.service`

### 进阶使用

UDP 检测/免流检测/自定义节点名称/自定义过滤/自定义输出等高级配置



高端玩家可以自己进容器把文件夹复制出来



然后编辑高级自定义配置 `/root/lite-test/global/config/default.js`



然后 docker 命令加上 `-v /root/lite-test/global/config:/opt/app/config`



如果你有更复杂的自定义需求需要修改其他的几个文件夹的话, 也一样操作

### 自动运行

这里其实还存在一个问题，如果你的节点有变动，那么就需要登录到vps上进行拉取节点和检测节点然后去结果里面进行查看更新，相当麻烦，这里有一个自动运行的脚本，可以设置定时将你的结果上传到你设置的静态页面（需要nginx设置），gist，并给你的telegram发送通知：

**请将里面的内容根据自己的情况进行修改后保存为.sh文件赋予权限后执行**

脚本内容：

```
#!/usr/bin/env bash

source ~/.bashrc

cd $(cd `dirname $0`; pwd)

startTime=`date +%Y%m%d-%H:%M:%S`
startTime_s=`date +%s`

# 进目录

cd /root/lite-test/global

# 跑

docker run --privileged -v /root/lite-test/global/data:/opt/app/data xream/lite-test node sub/index.js

docker run --privileged -v /root/lite-test/global/data:/opt/app/data xream/lite-test node check/index.js

mkdir -p /etc/nginx/share/global

# 复制到 nginx 那边

cp -R /root/lite-test/global/clash/provider/* /etc/nginx/share/global/

cd /etc/nginx/share/global/

endTime=`date +%Y%m%d-%H:%M:%S`
endTime_s=`date +%s`


# 复制到你 git repo 那边

cd /root/gist-repo
git reset --hard
git pull

# 这里只复制 normal 里的

cp -R /etc/nginx/share/global/normal* ./

git add .
git commit --author="xxxxxxx <x@x.com>" -m "[!] "$endTime
git push origin

sumTime=$[ ($endTime_s - $startTime_s)/60 ]

# 读取下总数

allCount=`cat /root/lite-test/global/clash/provider/normal/all.count`

# 发 tg 通知

api_key="telegram_api_key"
chat_id="telegram_对话_id"

text="更新"$'\n\n'"$allCount 条"$'\n'"https://gist.githubusercontent.com/xxxxxxxx/1111111/raw/all.yaml"$'\n\n'"总耗时: $sumTime 分钟"

echo $text
curl -F disable_notification=true -F chat_id=$chat_id -F "text=$text" https://api.telegram.org/bot$api_key/sendMessageroot@tokyo-1c:~/lite-test# 
```

下面我将结合我自己的操作，整理了一下仅仅同步到gist的操作过程：

#### 在vps上生成SSH key



要在 VPS 上生成 SSH 密钥，请执行以下步骤：

1. 打开命令行工具，登录到你的 VPS。

2. 在命令行中输入以下命令来生成 SSH 密钥：

   

`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`



其中 -t 参数指定密钥的算法类型（这里使用 RSA）， -b 指定密钥的长度（这里使用 4096 位）， -C 参数指定注释信息（这里使用你的电子邮件地址）。



1. 按回车键，然后输入任意名称以保存你的 SSH 密钥（或者按回车键接受默认名称和默认位置）。例如，可输入 id_rsa 或者文件名和路径，如 /home/user/.ssh/my-ssh-key。
2. 在提示符下，输入一个密码或留空。如果留空，则可以在未加密的情况下使用私钥。如果你的密钥将在自动化脚本中使用，则不建议设置密码。
3. 等到键值生成，你会在命令行中看到一个消息：“Your identification has been saved in /home/user/.ssh/id_rsa.” 并询问你是否要添加“/home/user/.ssh/id_rsa”和“/home/user/.ssh/id_rsa.pub”到你的 ssh-agent 中。输入“yes”，然后按回车键。
4. 现在，你可以在 ~/.ssh 文件夹中找到你的 SSH 密钥（在第 3 步中指定的位置），其中包括私钥和公钥。默认情况下，私钥文件名为 id_rsa，公钥文件名为 id_rsa.pub。



生成 SSH 密钥后，你可以将公钥添加到你的 VPS 账户、其他服务器或 Git 仓库中，以便通过 SSH 访问这些服务器或 Git 仓库。

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_14.04.37.png" alt="iShot_2023-04-20_14.04.37" style="zoom: 25%;" />

然后查看生成的公钥并将其内容复制出来，以备后面导入到Github中

`cat /root/.ssh/id_rsa.pub`

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_14.08.34.png" alt="iShot_2023-04-20_14.08.34" style="zoom: 25%;" />

#### 将SSH key添加进Github

进入到GitHub并登录，点击右上角的用户图标

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_13.54.02.png" alt="iShot_2023-04-20_13.54.02" style="zoom:25%;" />

在弹出的菜单栏中选择Settings

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_14.22.04.png" alt="iShot_2023-04-20_14.22.04" style="zoom:25%;" />

进入设置后在左侧选择 SSH and GPG keys，然后选择右上角的 New SSH Key

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_14.28.56.png" alt="iShot_2023-04-20_14.28.56" style="zoom: 25%;" />

将刚才在vps中公钥的内容贴进去并选择Add SSH Key 保存

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_14.09.18.png" alt="iShot_2023-04-20_14.09.18" style="zoom: 25%;" />

#### 新建gist

点击GitHub的右上角个人图标，在菜单中选择 Your gist

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_14.33.10.png" alt="iShot_2023-04-20_14.33.10" style="zoom: 25%;" />

进入gist页面后，点击右上角头像旁边的+添加一个新的gist

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_14.40.23.png" alt="iShot_2023-04-20_14.40.23" style="zoom:25%;" />

然后取一个名字，因为gist内容不能为空白，随便在里面输入一点内容后保存

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_14.16.28.png" alt="iShot_2023-04-20_14.16.28" style="zoom:25%;" />

点击gist右上侧的Embed，在弹出的菜单中选择Clone via SSH，然后点击地址旁边的复制图标将其SSH地址复制出来

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_14.46.33.png" alt="iShot_2023-04-20_14.46.33" style="zoom:25%;" />

#### 通过Git 将生成的配置文件上传到gist

将刚才生成的gist clone到vps

在vps中执行：

`git clon git@gist.github.com:xxxxxxxxxxxxxxx.git`

git@gist.github.com:xxxxxxxxxxxxxxx.git这个地址即为在上一步中复制的gist clone 地址

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/image-20230420145205185.png" alt="image-20230420145205185" style="zoom:25%;" />

然后进入到clone 来的gist文件夹中

将之前生成的配置文件复制到当前文件夹

`cp -R /root/lite-test/global/clash/provider/normal/* ./`

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_15.01.21.png" alt="iShot_2023-04-20_15.01.21" style="zoom: 25%;" />

将文件添加到 Git 的暂存区

`git add .`

提交文件

`git commit --author="xxxxxxx <x@x.com>" -m "[!] "$endTimet` 

其中的xxxxxxx <x@x.com> 根据你自己的GitHub账户进行更改

上传文件

`git push --all` 

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_15.12.20.png" alt="iShot_2023-04-20_15.12.20" style="zoom: 25%;" />

### 引用订阅

回到GitHub的gist页面，找到刚才建立的gist，选择all.yaml的右上角的Raw来获取真实地址

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_15.15.45.png" alt="iShot_2023-04-20_15.15.45" style="zoom:25%;" />

将获得地址栏地址复制出来

<img src="./Lite%20Test%20-%20%E8%AE%A2%E9%98%85%E6%A3%80%E6%B5%8B%E5%8E%BB%E9%87%8D%E5%B7%A5%E5%85%B7.assets/iShot_2023-04-20_15.19.36.png" alt="iShot_2023-04-20_15.19.36" style="zoom:25%;" />

地址栏格式为：

`https://gist.githubusercontent.com/[gist userid]/[gist id]/raw/[gist commitid]/filename`

删掉其中的[gist commit id]部分，就是这个gist的最新版的固定链接了

根据这个同步到gist的操作，结合上面给出的自动运行脚本，修改后就可以定时拉取到最新的订阅了。

如果在使用过程中，有任何问题，可以进群：https://t.me/zhetengsha_group 找@xream 反馈



