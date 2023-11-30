# 小火箭的warp教程

## 免责声明：

本文涉及的任何解锁和解密分析脚本仅用于资源共享和学习研究，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。

间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, 本文作者对于由此引起的任何隐私泄漏或其他后果概不负责。

请勿将本文内的任何内容用于商业或非法目的，否则后果自负。

如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我将在收到认证文件后删除相关脚本。

对任何本文中包含的脚本在使用中可能出现的问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害．

您必须在下载后的24小时内从计算机或手机中完全删除以上内容。

任何以任何方式查看此项目的人或直接或间接使用该项目的任何脚本的使用者都应仔细阅读此声明。本文作者保留随时更改或补充此免责声明的权利。一旦使用并复制了任何本文相关脚本或其他内容，则视为您已接受此免责声明。

## 什么是WARP


WARP是cloudflare公司推出的可以用来保护使用者隐私的一款服务，对于经常使用WARP来解锁vps流媒体的人再熟悉不过了。

WARP基于wireguard协议，使用UDP来传输数据，也就意味着在公网中的高QOS，但是WARP的ip相对比较干净，对外访问网络的出口 IP 被很多网站视为真实用户，可以用来解锁流媒体，谷歌学术以及目前很火的openai、new bing等。

除了保护使用者隐私和解锁流媒体，WARP还有以下几个特点：


1. 更安全：WARP使用的是最新的Wireguard协议，这种协议比现有的VPN协议更加安全可靠，并且具有更快的连接速度和更低的延迟。
2. 更快速：WARP提供了更快速的网络连接，它利用了Cloudflare的全球CDN网络来提供更快的数据传输速度和更好的用户体验。
3. 更可靠：WARP是专门为移动网络和Wi-Fi网络优化的，它可以帮助用户在连接不稳定的网络时保持稳定的网络连接状态。
4. 全球化：WARP可以连接到全球各地的服务器，并且可以通过点选连接，选择所需要的VPN服务节点。
5. 免费使用：WARP的基本版本是免费使用的，它提供了足够的保护和增强体验的功能。如果需要更高级的服务功能，则需要付费升级到专业版。

总而言之，WARP是一个十分实用的VPN服务，它结合了安全、快速、可靠等多个特点，可以为用户提供更好的网络连接体验。同时，WARP还提供了免费的基础版本，方便用户体验其服务。

而针对个人用户，Cloudflare推出的免费的Warp（可以通过邀请新用户获得Warp+流量）和订阅版Warp+（无限流量），针对团体用户推出的叫做：Zero Trust（无限流量，但是不同等级有不同的人数限制，免费的50人以内，超过就需要付费），两个其实是同一个东西。


- 注：

基于WARP以上特性，本文只是提取warp的节点用别的代理软件使用（如Surge、LOON等），本质上与1.1.1.1官方客户端使用相同。


## 注册cloudflare帐号

**提醒：注册帐号操作建议在电脑上进行。**

#### **我这里仅根据下面教程和实际大家注册过程中的一些问题做一些提示：**

- 有些人在注册Zero Trust过程中，发现并不能如同文中所提到那样跳过付款，那么我的建议是添加一个付款方式，支持PayPal、Visa、Master、AE等;
- 如果设置过程中发现device里面是空白的，这时候去左边的setting里面有个warp client，进去后有个manage 里面（Add a Rule）添加设备验证规则即可，验证规则一般建议选择邮箱后缀（Emails ending in）建议选择[gmail.com](http://gmail.com/) 或者 [outlook.com](http://outlook.com/) ，不太建议国内邮箱。顺便建议如果有电脑，最好在电脑上进行设置更方便。如果是手机，manage点进去后往下滑动页面即可看到设置的选项。
- 在setting里面Authentication里面的Login methods记得选择**One-time PIN**，这样才能在登陆时候收到邮件发送过来的一次性认证PIN

按照下面链接教程：注册warp和加入一个team（Zero Trust），并用1.1.1.1 app进行一次链接以生成数据

新教程：https://surge.ga/?p=2116

~~注册参照教程： https://www.morax-xyc.com/post/839e7851/~~ 

## 下载1.1.1.1 App

下面链接是日本区的，你们可以直接在自己的App Store搜索1.1.1.1

https://apps.apple.com/jp/app/1-1-1-1-faster-internet/id1423538627

## 下载WireGuard App

下面链接是日本区的，你们可以直接在自己的App Store搜索WireGuard

https://apps.apple.com/jp/app/wireguard/id1441195209

## 小火箭上的设置

**需要打开HTTPS解密**

文字步骤：配置-点击配置文件后面的小感叹号-HTTPS解密-点上开关-下面的证书-生成证书-安装证书，去手机的设置-通用-关于本机-证书信任设置-信任Shadowrocket证书

<img src="./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/iShot_2023-03-28_17.09.38-2.jpg" alt="iShot_2023-03-28_17.09.38-2" style="zoom:50%;" />

 参照下图跟着步骤走：

<img src="./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/iShot_2023-03-28_17.29.17-2.jpg" alt="iShot_2023-03-28_17.29.17-2" style="zoom:50%;" />

<img src="./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/iShot_2023-03-28_17.32.10-2.jpg" alt="iShot_2023-03-28_17.32.10-2" style="zoom:50%;" />

## 安装Boxjs和薯条的cloudflare模块

在按照上述步骤开启了HTTPS解密并且安装好证书并且正确的信任了之后，需要安装两个模块：

**boxjs模块地址：**

点击一键安装(Shadowrocket): [boxjs.rewrite.surge.sgmodule](http://api.boxjs.app/shadowrocket-install)

https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.surge.sgmodule

**薯条cloudflare模块地址：**

点击一键安装地址(Shadowrocket)：[Cloudflare.1.1.1.1.sgmodule](https://api.boxjs.app/shadowrocket/install?module=https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/sgmodule/Cloudflare.1.1.1.1.sgmodule)

手动安装地址：[https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/sgmodule/Cloudflare.1.1.1.1.sgmodule](https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/modules/Cloudflare.1.1.1.1.sgmodule)

文字步骤：

配置-模块-添加模块-贴上地址-保存

**切记模块安装后要打上勾**

<img src="./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/iShot_2023-03-28_19.18.50-2.jpg" alt="iShot_2023-03-28_19.18.50-2" style="zoom:50%;" />

## 在Wireguard App中生成一对密钥

文字步骤：

打开Wireguard App-添加隧道-手动创建-生成密钥对-复制生成的密钥对到备忘录中保存

提醒：建议先复制公钥再复制私钥，复制私钥时候记得全选再复制，防止漏字符

<img src="./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/iShot_2023-03-27_13.35.05-2.jpg" alt="iShot_2023-03-27_13.35.05-2" style="zoom:50%;" />

## 在1.1.1.1 App中复制出设备ID

如果你已经按照上面的教程注册了cloudflare账户并且登陆了1.1.1.1 App，现在打开1.1.1.1 App，进入到设置-诊断中找到，复制并保存

<img src="./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/iShot_2023-03-27_14.22.56-2.jpg" alt="iShot_2023-03-27_14.22.56-2" style="zoom:50%;" />

## 设置Boxjs

接下来的操作都需要在启动小火箭的过程中进行

1.打开safari浏览器，在地址栏输入： http://boxjs.com 

2.在订阅中添加订阅：[https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/box/Cloudflare.boxjs.json](https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/BoxJs/Cloudflare.boxjs.json)

3.在应用页面点开Cloudflare，将上面复制出来的设备ID、私钥、公钥粘贴进去并保存。

![iShot_2023-03-27_12.17.47-2](./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/iShot_2023-03-27_12.17.47-2.jpg)

填好后的：

<img src="./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/iShot_2023-03-27_14.37.28.png" alt="iShot_2023-03-27_14.37.28" style="zoom:50%;" />

## 打开1.1.1.1 App重置密钥生成配置

**提醒：在系统自带的邮件客户端里面添加一个可用邮箱，不然会收不到邮件通知，可以将收到的邮件发送给自己便于保存。**

这时候在开着小火箭的状态下，接下来进入到1.1.1.1 app的设置-高级-连接选项-拉到底部，重置加密密钥，就会出现小火箭的通知打开即是生成的配置文件

<img src="./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/iShot_2023-03-28_19.52.26-2.jpg" alt="iShot_2023-03-28_19.52.26-2" style="zoom:50%;" />

复制一键那部份，打开safari，在地址栏输入后确认，即可直接导入到小火箭中。

<img src="./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/iShot_2023-03-28_19.56.28.png" alt="iShot_2023-03-28_19.56.28" style="zoom:50%;" />

**最后要提醒的是，如果你已通过小火箭获取了一组可用的 WireGuard 配置，那么建议卸载 1.1.1.1 这个应用程序，因为重启该应用时可能会自动重置密钥，导致之前获取的配置不再可用，必须重新获取。**

**说明一下：目前转出来的节点，只有在电信网络下有比较好的体验，联通和移动的体验均不太好，请根据自己网络运营商看要不要折腾。**

根据我目前的测试情况来看，小火箭下的Wireguard的速度并不是很好，不过好在它是免费并且不限流量的，如果想获得更好的体验，建议买一个Loon，能获得更好的速度和体验。

可以看下面两个视频有分别的测速对比：

Loon：    https://youtu.be/waKzvRmAJXY

小火箭：  https://youtube.com/shorts/mtFqzbPSg5Q?feature=share

# Loon简介：

### Loon是什么

Loon是一个集网络代理、网络调试、网络改写等一系列功能于一体的网络工具。

### 网络代理

- 支持常见的代理协议，http、https、Shadowsocks、ShadowsocksR、VMess、VLess、Trojan、WireGuard
- 能够代理TCP和UDP（仅Shadowsock、ShadowsockR、Trojan协议支持）数据
- 支持IPv4和IPv6

### 网络调试

- 使用MitM攻击方式可以查看详细的https请求
- 详细记录一个连接的请求过程，方便调试网络问题

### 网络改写

- 使用Rewrite功能快速修改一个http(s)请求的请求头或者直接返回一个请求体
- 使用JavaScript修改一个http(s)请求的任何数据

简单说就是跟Surge、Shadowrocket、Clash、Quantumult X等类似的iOS平台网络工具，对比其他App个人感觉有如下优势：

1. 价格合适，仅售 $4.99(约35元)
2. 提供图形化界面进行管理和配置，基本上常用操作均可通过UI进行
3. 界面简单美观
4. 功能强大
5. 开发者和用户直接沟通，良好的社区氛围
6. 如果想了解更多Loon，可以加入官方Telegram群组：https://t.me/Loon0x00

**可以说比Shadowrocket和Quantumult X更加适合新手使用。**


购买链接：https://apps.apple.com/app/loon/id1373567447

Loon 界面见下图：

<img src="./%E5%B0%8F%E7%81%AB%E7%AE%AD%E7%9A%84warp%E6%95%99%E7%A8%8B.assets/IMG_1498.png" alt="IMG_1498" style="zoom:50%;" />

Loon上的Warp教程：[https://github.com/getsomecat/GetSomeCats/blob/Surge/Loon新手起步折腾Warp.md](https://github.com/getsomecat/GetSomeCats/blob/Surge/Loon新手起步折腾Warp.md)
