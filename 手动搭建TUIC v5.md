# 手动搭建TUIC v5

![CleanShot 2023-05-26 at 19.49.09@2x](./%E6%89%8B%E5%8A%A8%E6%90%AD%E5%BB%BATUIC%20v5.assets/CleanShot%202023-05-26%20at%2019.49.09@2x.png)

本来看着这些还是实验性功能，因为目前UI界面上没有version设置，通过配置文件文本模式编辑后的节点，如果用UI打开，会丢失部分配置信息，一般这种情况下我是不想折腾的，但是有几个人问起来了，也就结合以前写的TUIC部署步骤，简单写一下吧

折腾前需要准备的：最新版TF版的surge，并且订阅没有过期；有一个vps，有一个属于你的域名

**建立服务端**

进入ssh ，输入指令获取管理员权限

```
sudo -i
```

然后依次输入：

升级服务器

```
apt -y update
```

获取申请证书的certbot

```
apt -y install wget certbot
```

建立服务器端的文件夹并进入该文件夹

```
mkdir /opt/tuic && cd /opt/tuic
```

获取服务器端程序：

X86

```
wget https://github.com/EAimTY/tuic/releases/download/tuic-server-1.0.0-pre-alpha2/tuic-server-1.0.0-pre-alpha2-x86_64-unknown-linux-gnu
```

ARM

```
wget https://github.com/EAimTY/tuic/releases/download/tuic-server-1.0.0-pre-alpha2/tuic-server-1.0.0-pre-alpha2-aarch64-unknown-linux-gnu
```

赋予服务器端程序权限：

X86

```
chmod +x tuic-server-1.0.0-pre-alpha2-x86_64-unknown-linux-gnu
```

ARM

```
chmod +x tuic-server-1.0.0-pre-alpha2/tuic-server-1.0.0-pre-alpha2-aarch64-unknown-linux-gnu
```

这里每一行是一条指令，输入后按回车等执行完再进行下一条命令

**建立服务器端配置：**

```
nano config.json
```

（有些vps可能默认没有nano，那么就需要安装nano了，具体的方式可以自行搜索：nano 安装）

写入如下配置：

```
{
    "server": "[::]:52408",
    "users": {
        "8e21e704-9ac8-4fb8-bef1-6c9d7d7e390b": "RnJ5BfJ3"    
    },
    "certificate": "/opt/tuic/fullchain.pem",
    "private_key": "/opt/tuic/private.pem",
    "congestion_control": "bbr",
    "alpn": ["h3", "spdy/3.1"],
    "udp_relay_ipv6": false,
    "zero_rtt_handshake": false,
    "auth_timeout": "3s",
    "max_idle_time": "10s",
    "max_external_packet_size": 1500,
    "gc_interval": "3s",
    "gc_lifetime": "15s",
    "log_level": "warn"
}

```

**新建systemd配置文件**

```
nano /lib/systemd/system/tuic.service
```

写入如下配置：

X86:

```
[Unit]
Description=Delicately-TUICed high-performance proxy built on top of the QUIC protocol
Documentation=https://github.com/EAimTY/tuic
After=network.target

[Service]
User=root
WorkingDirectory=/opt/tuic
ExecStart=/opt/tuic/tuic-server-1.0.0-pre-alpha2-x86_64-unknown-linux-gnu -c config.json
Restart=on-failure
RestartPreventExitStatus=1
RestartSec=5

[Install]
WantedBy=multi-user.target

```

ARM

```
[Unit]
Description=Delicately-TUICed high-performance proxy built on top of the QUIC protocol
Documentation=https://github.com/EAimTY/tuic
After=network.target

[Service]
User=root
WorkingDirectory=/opt/tuic
ExecStart=/opt/tuic/tuic-server-1.0.0-pre-alpha2-aarch64-unknown-linux-gnu -c config.json
Restart=on-failure
RestartPreventExitStatus=1
RestartSec=5

[Install]
WantedBy=multi-user.target

```

至此其实服务器端已经建立好了。如果你已经之前玩过trojan有证书的话就直接把证书放入到/opt/tuic 文件夹里按照上面的配置公钥命名为：fullchain.pem，私钥命名为：private.pem那么就已经完成了。如果没有的话就接着往下看，通过certbot申请证书吧

**申请证书：**

```
certbot certonly \
--standalone \
--agree-tos \
--no-eff-email \
--email example@Gmail.com \
-d your.com
```

这里注意就是要把整个指令先复制到其它文本编辑器里面，把里面的：example@gmail.com 换成你的邮箱，your.com 换成你的域名，换好后再复制到ssh app里面按下回车执行

将获得的证书放到服务器配置文件内的位置：（把里面的your.com换成你自己的域名）

```
cat /etc/letsencrypt/live/your.com/fullchain.pem > /opt/tuic/fullchain.pem
```

```
cat /etc/letsencrypt/live/your.com/privkey.pem > /opt/tuic/privkey.pem
```

注意上面是两条指令，分别执行。

启动tuic服务并设置开机自启：

```
systemctl enable --now tuic.service
```

至此服务器端的配置已经全部完成了。你在surge配置里面就可以按照老刘提供的格式进行节点设置了（暂时无UI添加节点）如下示意配置格式，1.1.1.1换成你的vps的IP，端口就是上面config.json里面设置的端口，password后面就是里面设置的密码，sni后面就是你的域名，uuid就是config.json里面user部分，可以自己去通过相应工具生成。

```

TUIC V5 = tuic, 1.1.1.1 , 52408, skip-cert-verify=true, sni=your.com, uuid=8e21e704-9ac8-4fb8-bef1-6c9d7d7e390b, alpn=h3, password=RnJ5BfJ3, version=5
```

可以用下面命令获取证书指纹，在surge里面进行证书锁定，来进一步确保安全性。

```
openssl x509 -noout -fingerprint -sha256 -inform pem -in /opt/tuic/fullchain.pem
```

因为certbot申请的证书有期限，所以设置个自动运行的脚本进行自动续期

新建一个certbot的hook脚本文件，用于让tuic重新加载续期后的新证书：

```
nano /etc/letsencrypt/renewal-hooks/post/tuic.sh
```

写入如下内容：（把里面的your.com换成你自己的域名）

```
#!/bin/bash
cat /etc/letsencrypt/live/your.com/fullchain.pem > /opt/tuic/fullchain.pem
cat /etc/letsencrypt/live/your.com/privkey.pem > /opt/tuic/privkey.pem
systemctl restart tuic.service
```

给脚本执行权限：

```
cd /etc/letsencrypt/renewal-hooks/post
```

```
chmod +x tuic.sh
```

测试续期的情况以及脚本能否正常运行：（里面的your.com换成你自己的域名）

```
certbot renew --cert-name your.com --dry-run
```

至此服务器端就全部配置完成了。

重启：

```
systemctl restart tuic
```

如果想查看服务器状态，用这个指令

```
systemctl status tuic
```

卸载：

```
systemctl stop tuic && systemctl disable --now tuic.service && rm -rf /opt/tuic
```



