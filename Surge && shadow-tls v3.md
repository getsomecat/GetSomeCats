# Surge && shadow-tls v3

## 前言

Surge早几天前就更新了一下支持Shadow-Tls v3（后面简称stls v3），但是看了一眼兴趣不大也就没折腾，适逢昨天写完了[Lite-Test订阅整理教程](https://surge.ga/10/2475/)，无所事事，于是捡起来折腾了一下，说起来其实很简单，当然我自己折腾的时候也是请教过一些大佬，结合起来就写一下过程吧。

<img src="./Surge%20&&%20shadow-tls%20v3.assets/image-20230421130015069.png" alt="image-20230421130015069" style="zoom: 50%;" />

## 开始

### 搭建Snell

Snell协议可以说是Surge上搭建最简单的了，之前也有讲过如何搭建，也有一键教程，而且方法也没有什么变化，这里不再赘述了



#### 手动系统搭建

https://surge.ga/16/349/



#### Docker搭建

https://surge.ga/13/2481/



### 搭建Shadow-Tls v3

搭建一般分为docker和在系统里面，我个人比较喜欢的是在系统里面搭建，这里先附上系统搭建的步骤，后面附上docker的

#### 系统搭建

一般先去[Shadow-Tls的发布页面](https://github.com/ihciah/shadow-tls/releases)查看一下最新发行版的版本号和下载地址，这里以ARM机器为例进行过程展示

##### SSH登录

##### 获取权限

`sudo -i`

##### 进行系统更新和升级

`apt update && apt upgrade -y`

##### 下载Shadow-Tls
ARM

`wget https://github.com/ihciah/shadow-tls/releases/download/v0.2.20/shadow-tls-aarch64-unknown-linux-musl -O /usr/local/bin/shadow-tls`

X86_AMD

`wget https://github.com/ihciah/shadow-tls/releases/download/v0.2.20/shadow-tls-x86_64-unknown-linux-musl -O /usr/local/bin/shadow-tls`

##### 给权限

`chmod +x /usr/local/bin/shadow-tls`

##### 写服务单元

`vim /etc/systemd/system/shadow-tls.service`

然后将以下内容复制粘贴进去并保存退出即可：

```
[Unit]
Description=Shadow-TLS Server Service
Documentation=man:sstls-server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=shadow-tls --v3 server --listen ::0:8443 --server 127.0.0.1:40712 --tls  gateway.icloud.com  --password JsJeWtjiUyJ5yeto
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=shadow-tls

[Install]
WantedBy=multi-user.target
```

参数说明：

\# --listen 0.0.0.0:8443

这个是你后面在 **surge** 里面输入的端口，ipv6的话改成::0:8443 ，8443不用改动

\# --server 127.0.0.1:40172

监听端口，也就是你的snell服务的端口，SS 那边可以监听改为 127.0.0.1,ipv6的话改成[::1]:40172，

\# --password JsJeWtjiUyJ5yeto

shadow-tls 的密码

\# --tls  gateway.icloud.com

tls伪装网址 要改TLS的话，作者推荐[V3 Protocol · ihciah/shadow-tls Wiki · GitHub](https://github.com/ihciah/shadow-tls/wiki/V3-Protocol?ref=blog.lalalayyds.top#services-that-support-tls13)



vim操作：

按i 底下出现INSERT提示即可进行编辑

编辑完成后按“ESC”键后，再输入“:wq”即可保存退出

如果想不保存退出，输入“:q!”

##### 将服务单元添加到自启动项

 `systemctl enable shadow-tls.service`

##### 重载系统配置文件

 `systemctl daemon-reload`

**启动服务**

`systemctl start shadow-tls.service`

可以通过以下查看服务状态看是否运行正常

并根据错误提示代码进行排障



 查看服务状态

`systemctl status shadow-tls.service`

<img src="./Surge%20&&%20shadow-tls%20v3.assets/image-20230421140010216.png" alt="image-20230421140010216" style="zoom:50%;" />



重启服务

`systemctl restart shadow-tls.service`



最后在surge的代理服务器中，Snell协议配置UI上根据上面填写的服务单元信息，**修改Snell端口为：8443**，并在底下填写上相应的Shdow-Tls 参数和版本号等信息



如果熟悉的话可以在文本编辑模式下，在原Snell协议后面贴上下面这段，**并将Snell端口改为：8443**

```javascript
,shadow-tls-password=JsJeWtjiUyJ5yeto, shadow-tls-sni=gateway.icloud.com, shadow-tls-version=3
```



最终Surge的文本配置文件格式应该是：

```
Snell+TLS = snell, x.x.x.x（vps的ip）, 8443, psk=xxxxxxxx, version=4, shadow-tls-password=JsJeWtjiUyJ5yeto, shadow-tls-sni=gateway.icloud.com, shadow-tls-version=3
```



#### Docker搭建shadow-Tls

首先用cd命令，进入snell的`docker-compose.yml`所在文件夹

例：

```shell
cd /root/snelldocker
```

> 接下来教程都将以这个路径作为例子，请将`snelldocker`换成自己的文件夹名

##### 改docker-compose.yml第一种方法

可以用带sftp的ssh工具直接将下面的这一段复制到`docker-compose.yml`里去

> ⚠️注意：里面的一些内容要自己改动

```yaml
  shadow-tls:
    image: ghcr.io/ihciah/shadow-tls:latest
    container_name: shadow-tls
    restart: always
    network_mode: "host"
    environment:
      - MODE=server
      - V3=1
      - LISTEN=0.0.0.0:8443   # ipv6的话改成[::]:8443 ，8443不用改动
      - SERVER=127.0.0.1:xxx  # ipv6的话改成[::1]:xxx ，xxx是你snell节点的端口
      - TLS=mp.weixin.qq.com:443 #这里可以自己选，下面放了作者推荐的链接
      - PASSWORD=Gm8UXm6aridZ  # 这里是密码，随便改
```

> 要改TLS的话，作者推荐[V3 Protocol · ihciah/shadow-tls Wiki · GitHub](https://github.com/ihciah/shadow-tls/wiki/V3-Protocol?ref=blog.lalalayyds.top#services-that-support-tls13)

##### 改docker-compose.yml第二种方法

如果没有sftp的话，那也可以使用vim工具（⚠️注意，要用英文输入法）

输入以下命令

```shell
vim /root/snelldocker/docker-compose.yml
```

如图

<img src="./Surge%20&&%20shadow-tls%20v3.assets/202304181937716-2057018.png" alt="202304181937716" style="zoom:50%;" />

按`i`进入编辑模式，将**光标**移动到上图中的地方，然后复制下面的代码到里面去

```yaml
  shadow-tls:
    image: ghcr.io/ihciah/shadow-tls:latest
    container_name: shadow-tls
    restart: always
    network_mode: "host"
    environment:
      - MODE=server
      - V3=1
      - LISTEN=0.0.0.0:8443   # ipv6的话改成[::]:8443 ，8443不用改动
      - SERVER=127.0.0.1:xxx  # ipv6的话改成[::1]:xxx ，xxx是你snell节点的端口，图中我以28272做例子
      - TLS=mp.weixin.qq.com:443
      - PASSWORD=Gm8UXm6aridZ  # 这里是密码，随便改
```

如图

<img src="./Surge%20&&%20shadow-tls%20v3.assets/202304181942334-2057032.png" alt="202304181942334" style="zoom:50%;" />

> 红线提示 注意对齐！！

然后按`esc`退出编辑模式，再按`:`加上`wq`保存退出即可

##### 启动shadow-tls

输入以下命令即可

```shell
cd /root/snelldocker && docker compose pull && docker compose up -d
```

查看日志输入

```shell
docker logs -f shadow-tls
```

##### 在surge上应用

在确定服务端搭建完成之后，就可以将以下配置，复制到对应的snell节点上了

```javascript
, shadow-tls-password=Gm8UXm6aridZ, shadow-tls-sni=mp.weixin.qq.com, shadow-tls-version=3
```

图中对应上面的配置

<img src="./Surge%20&&%20shadow-tls%20v3.assets/image.png" alt="image" style="zoom:50%;" />

然后再把**原本的snell节点的端口改成`8443`！**

最终节点的配置应该是这样

```javascript
Snell+TLS = snell, x.x.x.x（vps的ip）, 8443, psk=GLk1ff4wuQNCDSqr97WwsHwe8KBjy3S, version=4, shadow-tls-password=Gm8UXm6aridZ, shadow-tls-sni=mp.weixin.qq.com, shadow-tls-version=3
```

至此全部完成！！



备注：本文docker部分来自：https://blog.lalalayyds.top/surge-shadow-tls-v3/

