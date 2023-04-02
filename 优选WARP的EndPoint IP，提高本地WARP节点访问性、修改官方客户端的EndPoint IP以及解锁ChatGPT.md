# 优选WARP的EndPoint IP，提高本地WARP节点访问性、修改官方客户端的EndPoint IP以及解锁ChatGPT



因为群里有小伙伴说这之前的网址打不开所以转到我的Blog备份一下



## 准备材料

- 提取的WARP的WireGuard配置
- 官方WARP客户端

## 优选步骤

注意：请将任何VPN代理软件关闭，否则优选结果有可能不准！！！

### Windows

1. 从这个网站：https://surge.ga/wp-content/uploads/2023/04/warp-yxip-win.7z下载`warp-yxip-win.7z`文件，并解压。如无意外的话文件内容应该是长这样

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230328001247.png" alt="20230328001247" style="zoom:75%;" />

1.启动`warp-yxip.bat`，选择优选模式（默认为IPv4）

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230328001632.png" alt="20230328001632" style="zoom:75%;" />

2.等待优选，大约需要1-3分钟

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230312172637.png" alt="20230312172637" style="zoom:75%;" />

3.优选完成后，找到`result.csv`文件，打开。可以看到优选的EndPoint IP是按照丢包率和延迟排列的

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230312172753.png" alt="20230312172753" style="zoom:75%;" />

### Mac OS

暂无，待补充

### Linux 各发行版

1.进入命令行，复制粘贴以下命令

```
wget -N https://gitlab.com/Misaka-blog/warp-script/-/raw/main/files/warp-yxip/warp-yxip.sh && bash warp-yxip.sh
```

2.选择优选模式（默认为IPv4）

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230328001632.png" alt="20230328001632" style="zoom:75%;" />

3.等待脚本安装依赖，并优选

4.脚本会自动显示前10个最优的WARP Endpoint IP

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230328001706.png" alt="20230328001706" style="zoom:75%;" />

### 安卓 Termux

1.安装并打开Termux，复制粘贴以下命令

```
wget -N https://gitlab.com/Misaka-blog/warp-script/-/raw/main/files/warp-yxip/warp-yxip.sh && bash warp-yxip.sh
```

2.选择优选模式（默认为IPv4）

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230328001632.png" alt="20230328001632" style="zoom:75%;" />

3.等待脚本安装依赖，并优选

4.脚本会自动显示前10个最优的WARP Endpoint IP

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230328001706.png" alt="20230328001706" style="zoom:75%;" />

### 苹果 iSH

1.安装并打开iSH，输入以下命令

```
apk add -f openssh bash wget
```

2.复制粘贴以下命令

```
wget -N https://gitlab.com/Misaka-blog/warp-script/-/raw/main/files/warp-yxip/warp-yxip.sh && bash warp-yxip.sh
```

3.选择优选模式（默认为IPv4）

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230328001632.png" alt="20230328001632" style="zoom:75%;" />

4.等待脚本安装依赖，并优选

5.脚本会自动显示前10个最优的WARP Endpoint IP

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230328001706.png" alt="20230328001706" style="zoom:75%;" />

## 节点应用

1.修改WireGuard节点的配置。将之前的EndPoint IP替换为优选出来的

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230312172834.png" alt="20230312172834" style="zoom:75%;" />

2.找到CloudFlare WARP官方客户端的安装位置（一般在`C:\Program Files\Cloudflare\Cloudflare WARP`），将博客项目提供的`设置端点.bat`文件复制进来

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230312172940.png" alt="20230312172940" style="zoom:75%;" />

3.打开`设置端点.bat`，输入优选过的EndPoint IP并设置

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230312173152.png" alt="20230312173152" style="zoom:75%;" />

4.链接官方WARP客户端，可以看到之前很难连接上的WARP就奇迹般地连上了

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230312173210.png" alt="20230312173210" style="zoom:75%;" />

5.用优选过的WARP访问ChatGPT，可以看到是正常访问的

<img src="./%E4%BC%98%E9%80%89WARP%E7%9A%84EndPoint%20IP%EF%BC%8C%E6%8F%90%E9%AB%98%E6%9C%AC%E5%9C%B0WARP%E8%8A%82%E7%82%B9%E8%AE%BF%E9%97%AE%E6%80%A7%E3%80%81%E4%BF%AE%E6%94%B9%E5%AE%98%E6%96%B9%E5%AE%A2%E6%88%B7%E7%AB%AF%E7%9A%84EndPoint%20IP%E4%BB%A5%E5%8F%8A%E8%A7%A3%E9%94%81ChatGPT.assets/20230312173324.png" alt="20230312173324" style="zoom:75%;" />



**文章作者:** [MisakaNo](https://blog.misaka.rest/)

**文章链接:** https://blog.misaka.rest/2023/03/12/cf-warp-yxip/

**版权声明:** 本博客所有文章除特别声明外，均采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。转载请注明来自 [MisakaNo の 小破站](https://blog.misaka.rest/)！

