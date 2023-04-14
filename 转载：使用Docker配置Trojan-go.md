# 转载：使用Docker配置Trojan-go

原作者：毕世平 https://shiping.date/66.html



本文以`Debian10`发行版为例，介绍使用`docker-compose`配置容器组，先后拉取`teddysun/caddy`作为web服务器，取`teddysun/trojan-go`作为代理镜像，申请SSL证书使用`acme.sh`脚本。大概分为以下几个步骤：

- 安装`docker`，并安装`docker-compose`
- 安装`acme.sh`脚本，并给域名`example.com`申请证书
- 分别创建`caddy`和`trojan-go`目录及其配置文件
- 将证书安装到`trojan-go`目录下
- 创建`docker-compose.yml`文件，并基于此创建容器组

# 一、安装docker

## 1.1 安装docker

以`root`用户执行下面命令安装docker：

```
# 升级源并安装一些必要软件
apt update && apt install wget vim -y

# 安装docker
wget -qO- get.docker.com | bash

# 启动docker（如果是Debian，上面一步执行完貌似就已启动docker，并加入了开机自启）
systemctl start docker

# 加入开机自启
systemctl enable docker
```

## 1.2 配置docker-compose

安装完`docker`后，只需从github下载`docker-compose`的可执行文件即可，执行下面命令配置`docker-compose`：

```
# 从github下载docker-compose的包，并重命名为docker-compose，放置在/usr/local/bin目录下
wget -O /usr/local/bin/docker-compose https://github.com/docker/compose/releases/download/v2.4.0/docker-compose-linux-x86_64

# 赋予可执行权限
chmod +x /usr/local/bin/docker-compose

# 查看版本
docker-compose --version
```

> docker-compose releases发布地址是：[点我打开](https://github.com/docker/compose/releases)

# 二、申请证书

## 2.1 安装acme.sh脚本

以`root`用户执行下面命令安装脚本：

```
# 安装socat
apt -y install socat

# 安装脚本
wget -qO- get.acme.sh | bash

# 使脚本在~/.bashrc文件追加的一行环境变量（别名）生效
source ~/.bashrc
```

## 2.2 设置默认CA

由于`acme.sh`脚本现已将`zerossl`设置为申请证书默认上游颁发机构，而要使用它的证书必须提供邮箱，想必不少人跟我一样还是想用`letsencrypt`的证书，那么执行下面命令替换之：

```
# 将letsencrypt设置为默认CA
acme.sh --set-default-ca --server letsencrypt
```

## 2.3 申请证书

本文假定你的域名是`example.com`，那么给它申请证书执行下面命令：

```
# 执行下面命令前请保证vps 80端口没有被占用，且当前用户可监听（本文root默认支持）
acme.sh --issue -d example.com --standalone -k ec-256

---------------------
(题外话)
我在使用vultr debian10测试时候，第一次没申请成功，没想到它默认系统开启了防火墙ufw，因此需要关闭防火墙，或者给80端口放行
# 停止ufw运行并关闭自启动
systemctl stop ufw && systemctl disable ufw
```

# 三、配置目录及配置文件

## 3.1 创建目录

保证当前登陆用户是`root`用户，下面执行路径为`~`即`/root`目录，不要求此目录，使用其它目录也行：

```
# 创建目录
mkdir /root/dockerconf

# 分别创建caddy和trojan-go目录
cd /root/dockerconf
mkdir caddy && mkdir trojan-go
```

## 3.2 配置caddy目录

秋大的caddy镜像默认使用`Caddyfile`作为配置文件，执行下面命令配置caddy目录：

```
# 切换路径
cd /root/dockerconf/caddy

# 在此目录下创建配置文件，取名Caddyfile，配置文件示例如下
example.com:80 {
    gzip
    log /etc/caddy/caddy.log
    proxy / http://bing.com
}

--------------------
# 创建caddy.log空文件，否则docker容器创建时会启动失败
touch caddy.log
```

## 3.3 配置trojan-go目录

上面第二步已经给域名`example.com`申请好了证书，那么下面只需要将其安装到此目录下即可，执行下面命令：

```
# 切换路径
cd /root/dockerconf/trojan-go

# 安装证书
acme.sh --installcert -d example.com --fullchain-file ./trojan.crt --key-file ./trojan.key --ecc
```

## 3.4 创建trojan-go的配置文件

跟3.3一样，同样是在`/root/dockerconf/trojan-go`目录下，创建`config.json`作为配置文件

```
# 创建配置文件
vim config.json

# 下面是配置文件示例
{
        "run_type":"server",
        "local_addr":"0.0.0.0",
        "local_port":443,
        "remote_addr":"example.com",
        "remote_port":80,
        "password":[
                "password0"
        ],
        "ssl":{
                "cert":"/etc/trojan-go/trojan.crt",
                "key":"/etc/trojan-go/trojan.key",
                "sni":"example.com",
                "fallback_addr":"example.com",
                "fallback_port":80
        },
        "websocket":{
                "enabled":true,
                "path":"/trojan_path",
                "host":"example.com"
        }
}
```

**说明**：请将上述示例配置文件中的全部`example.com`替换为你自己的域名，切记。

# 四、配置启动容器组

## 4.1 创建docker-compose配置文件

以`root`用户执行下面命令：

```
# 切换路径
cd /root/dockerconf

# 创建配置文件
vim docker-compose.yml

# 下面是配置文件示例
version: "3"
services:
        caddy:
                image: teddysun/caddy
                container_name: caddy
                restart: always
                network_mode: "host"
                volumes:
                        - ./caddy:/etc/caddy
        trojan-go:
                image: teddysun/trojan-go
                container_name: trojan-go
                restart: always
                network_mode: "host"
                volumes:
                        - ./trojan-go:/etc/trojan-go
```

## 4.2 启动容器组

上面创建好`docker-compose.yml`配置文件以后，它会被作为执行`docker-compose up`路径下的默认配置文件：

```
# 保证你切换到docker-compose.yml所在路径下
cd /root/dockerconf

# 一键启动
docker-compose up -d

# 查看logs
docker-compose logs

# 停止并移除（两个）容器组
docker-compose down
```

## 4.3 本文具体路径

由于路径可能有些复杂，这里用`tree`命令，具体分布如下：

```
# 执行此命令
root@localhost:~/dockerconf# tree /root/dockerconf
/root/dockerconf
├── caddy
│   ├── Caddyfile
│   └── caddy.log
├── docker-compose.yml
└── trojan-go
    ├── config.json
    ├── trojan.crt
    └── trojan.key

2 directories, 6 files
```

# 五、结语

本文参考了很多大佬教程，这里拜谢。本文如有错误，欢迎留言指正。

参考链接：

- [acme.sh脚本在github地址](https://github.com/acmesh-official/acme.sh)
- [docker-compose gihtub地址](https://github.com/docker/compose)
- [trojan-go官方配置文档](https://p4gefau1t.github.io/trojan-go/)
- [秋水逸冰caddy镜像](https://hub.docker.com/r/teddysun/caddy)
- [秋水逸冰trojan-go镜像](https://hub.docker.com/r/teddysun/trojan-go)
- [一键命令快速解决debian关闭防火墙方法（包含开启端口命令）](https://www.itbulu.com/debian-ufw.html)