# 如何使用 Docker Compose 安装多个 shadowsocks-rust

# 前言

好多教程都让我这个小白云里雾里，现在根据 [Luca 大佬的教程](https://t.me/Luca_VPS/115)进行一些改进。
我们就直入正题，那就是如何使用 Docker 安装多个 shadowsocks-rust 代理服务。

# 教程

## 1.安装 docker/docker compose 引擎

安装docker第一步需要安装docker引擎，docker引擎是docker容器的基础。在安装docker引擎时，有几个前提条件必须满足：

1.Linux 系统，且内核版本必须较新

2.系统必须是64位系统

3.RAM资源最好在512M以上

```
#更新软件源
apt-get update && apt-get -y upgrade

#安装 Docker
curl -fsSL https://get.docker.com | bash -s docker    （国外）
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun   （国内）

#安装 Docker Compose
#如果之前安装了2.0以下的版本的话，请先执行卸载指令：
sudo rm /usr/local/bin/docker-compose
#如果之前安装了2.0以上的版本的话，请先执行卸载指令：
rm -rf .docker/cli-plugins/

#安装
sudo apt-get update && sudo apt-get install docker-compose-plugin -y

#查看版本号，如果有版本号则成功
docker compose version 

#如果需要更新 compose 直接   
sudo apt-get update && sudo apt-get upgrade -y
```

## 2.配置 shadowsocks-rust

创建文件名为 /root/ss-rust/config 的文件夹，并在文件夹内创建 config.json 文件

```
mkdir -p /root/ss-rust/config
nano /root/ss-rust/config/config.json
```

自己想要开几个 shadowsocks 就写几个，根据自己需求修改下面的配置后黏贴

```
{
    "servers": [
        {
            "server":"0.0.0.0",
            "server_port":9000,
            "method":"aes-256-gcm",
            "password":"password0",
            "timeout":300,
            "nameserver":"8.8.8.8",
            "mode":"tcp_and_udp",
            "fast_open": true
        },
        {
            "server":"0.0.0.0",
            "server_port":9001,
            "method":"aes-256-gcm",
            "password":"password0",
            "timeout":300,
            "nameserver":"8.8.8.8",
            "mode":"tcp_and_udp",
            "fast_open": true
        },
        {
            "server":"0.0.0.0",
            "server_port":9002,
            "method":"aes-256-gcm",
            "password":"password0",
            "timeout":300,
            "nameserver":"8.8.8.8",
            "mode":"tcp_and_udp",
            "fast_open": true
        }
    ]
}
```

## 2.配置docker-compose

进入 ss-rust 的文件夹，并在文件夹内创建docker-compose.yml文件

```
cd /root/ss-rust
nano /root/ss-rust/docker-compose.yml
```

黏贴下面的配置后保存

```
version: "3.0" ##docker-compose版本，一般不用动。
services:
  shadowsocks: ##服务名称
    image: teddysun/shadowsocks-rust:latest ##容器使用的镜像名称
    container_name: ss-rust ##新建容器的名称
    restart: always ##重启策略，always 为始终，一般默认即可。
    network_mode: bridge ##容器采用的网络模式，host 为共享主机网络，bridge 为桥接。
    ports: ##映射的端口，：前为宿主机端口，：后为容器内部端口。与刚刚的 shadowsocks 对应，有几个写几个。
      - "9000:9000"
      - "9000:9000/udp"
      - "9001:9001" 
      - "9001:9001/udp"
      - "9002:9002" 
      - "9002:9002/udp"
    volumes: ##映射的路径，引号前为主机路径，后为容器内部路径。
      - ./config:/etc/shadowsocks-rust
```

运行

```
cd && cd /root/ss-rust
docker compose pull && docker compose up -d
```

**Author:** [Sebastian Luo](mailto:undefined)

**Link:** https://isagood.day/2022/03/08/ss-rust/

**Copyright Notice:** All articles in this blog are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless stating additionally.