# docker搭建snell教程

## 安装docker

依次输入以下命令

```shell
apt-get update && apt-get -y upgrade

#获取docker（国外）
curl -fsSL https://get.docker.com | bash -s docker

#如果之前没安装过docker，请忽略这里
#如果之前安装了compose 2.0以下的版本的话，请先执行卸载指令：
sudo rm /usr/local/bin/docker-compose
#如果之前安装了compose 2.0以上的版本的话，请先执行卸载指令：
rm -rf .docker/cli-plugins/

#下载最新compose
apt-get install docker-compose-plugin -y
```

然后输入以下命令来检测compose版本

```shell
docker compose version 
```

正常的话会出现一个版本号

好了，现在docker已经安装好了，

## 搭建snell

```shell
mkdir -p /root/snelldocker/snell-conf
```

接着输入下面这一串，然后直接 `回车` 即可（amd）

```shell
cat > /root/snelldocker/docker-compose.yml << EOF
version: "3.8" 
services:
  snell:
    image: accors/snell:latest
    container_name: snell
    restart: always
    network_mode: host
    volumes:
      - ./snell-conf/snell.conf:/etc/snell-server.conf
    environment:
      - SNELL_URL=https://dl.nssurge.com/snell/snell-server-v4.0.1-linux-amd64.zip
EOF
```

**注意arm的话要改成arm的服务文件**，**服务端文件请去[此网站](https://manual.nssurge.com/others/snell.html?ref=blog.lalalayyds.top)查找**

接下来再输入这一串命令，这里是**端口和密钥**，如需要可以自行更改，如果要开 `ipv6`的话，就把 `listen` 那一行的 `0.0.0.0` 改成 `::0` ，然后把下面的 `ipv6=false` 改成 `ipv6=true` 即可，接着 `回车`

```shell
cat > /root/snelldocker/snell-conf/snell.conf << EOF
[snell-server]
listen = 0.0.0.0:28261
psk = GLk1ff4wuQNCDSqr92WwsHwe8KBjy3S
ipv6 = false
EOF
```

注意，这里我没有把obfs加入了，如果自己加入了obfs=http记得在surge的配置文件也加上

现在所有的配置已经完成了！！！

依次输入以下命令即可

```shell
cd /root/snelldocker

docker compose pull && docker compose up -d
```

完成之后可以输入以下命令查看日志，来查看是否正常运行snell服务

```shell
docker logs -f snell
```

按 `ctrl`+ `c` 退出日志

那么现在就可以去surge填写配置了，就是这么简单

## docker snell更新教程

如果之后更新了就可以输入以下命令完成更新

```shell
cd /root/snelldocker && docker compose up -d
```

如果之后老刘更新服务端文件的链接了，那就输入以下命令

```shell
sudo vim /root/snelldocker/docker-compose.yml
```

把光标移动到图中框框，按 `i` 进入编辑模式，按 `delete` 把 `=` 后面的链接全部删除，然后把**新服务端链接**复制进去，然后 `esc` 退出编辑模式，然后 `:wq` 退出保存，如果操作错误不要慌，输入 `:q!` 强制退出不保存，重来即可！

**新服务端链接请去[此网站](https://manual.nssurge.com/others/snell.html?ref=blog.lalalayyds.top)查找**

<img src="./docker%E6%90%AD%E5%BB%BAsnell%E6%95%99%E7%A8%8B.assets/image.png" alt="image" style="zoom:50%;" />

然后再输入以下命令即可

```shell
 docker compose pull && docker compose up -d
```



**至此，docker compose搭建snell就全部结束啦！！**

docker搭建太简单了，懒得自己写，所以网上找了一篇 🌚

本文主要内容来自：https://blog.lalalayyds.top/snell-for-surge/  