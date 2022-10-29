本文仅针对X86-64，系统的话Ubuntu和Debian一样的。ARM的自己找相应操作吧（该死的甲骨文换4、5张卡都申请不下来）🫠

本教程主要内容来源于：[https://lala.im/8424.html](https://lala.im/8424.html) 这个教程，根据最新服务器版本做了一点点改动，对此文作者表示感谢。

也大力感谢surge pro群里的天心大佬和luca对于我这个小白的基础问题的耐心解答

昨天surge TF更新了支持TUIC，对于折腾完warp+的群里来说总算是有新东西可以折腾了。我这个完全的技术小白也试着按照群里大佬的教程弄了一把，虽然有波折，但是最终还是成功了。试着写一个手把手的教程。

折腾前需要准备的：最新版TF版的surge，并且订阅没有过期；有一个vps，有一个属于你的域名。（一般来说拥有这些东西的都已经不需要看这个教程了，但也不排除有像我这样只会一键SS-Rust的白痴吧）

****建立服务端

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

获取服务器端程序
```
wget https://github.com/EAimTY/tuic/releases/download/0.8.5/tuic-server-0.8.5-x86_64-linux-gnu
```

赋予服务器端程序权限
```
chmod +x tuic-server-0.8.5-x86_64-linux-gnu
```

这里每一行是一条指令，输入后按回车等执行完再进行下一条命令

建立服务器端配置：
```
nano config.json
```

（有些vps可能默认没有nano，那么就需要安装nano了，具体的方式可以自行搜索：nano 安装）

写入如下配置：

```
{ 
"port": 想要的端口, 
"token": ["你的密码"], 
"certificate": "/opt/tuic/fullchain.pem", 
"private_key": "/opt/tuic/privkey.pem", 
"ip": "0.0.0.0", "congestion_controller": "bbr", "alpn": ["h3"] 
}


```
新建systemd配置文件
```
nano /lib/systemd/system/tuic.service
```

写入如下配置：
```
[Unit]
Description=Delicately-TUICed high-performance proxy built on top of the QUIC protocol
Documentation=https://github.com/EAimTY/tuic
After=network.target

[Service]
User=root
WorkingDirectory=/opt/tuic
ExecStart=/opt/tuic/tuic-server-0.8.5-x86_64-linux-gnu -c config.json
Restart=on-failure
RestartPreventExitStatus=1
RestartSec=5

[Install]
WantedBy=multi-user.target

```
至此其实服务器端已经建立好了。如果你已经之前玩过trojan有证书的话就直接把证书放入到/opt/tuic 文件夹里按照上面的配置公钥命名为：fullchain.pem，私钥命名为：private.pem那么就已经完成了。如果没有的话就接着往下看，通过certbot申请证书吧

申请证书：
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

至此服务器端的配置已经全部完成了。你在surge配置里面就可以按照老刘提供的格式进行节点设置了（暂时无UI添加节点）如下示意配置格式，1.1.1.1换成你的vps的IP，端口就是上面config.json里面设置的端口，token后面就是里面设置的密码，sni后面就是你的域名。
```
tuic-AWS = tuic, 1.1.1.1, 设置的端口, skip-cert-verify=true, sni=your.com, token=设置的密码, alpn=h3
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
systemctl stop tuic && rm -rf /opt/tuic
```

附上luca的部署过程，包含ARM版的指令

(Tuic搭建.txt)](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/8761C39A-938E-4BE9-878F-6E73A6098858_2/i80l30ydgUv0wSNiUaEPpocOxyw9eY1ABG8DXPcyKY4z/Tuic.txt)
