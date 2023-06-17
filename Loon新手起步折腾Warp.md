# Loon新手起步折腾Warp

## 前言：

最近没什么可以折腾的，加上Loon最近的更新支持了WireGuard协议，所以去Loon群的次数多了一点，然后有人建议我写个Loon从入门到退款，本来都已经建好了文件，结果一查，Loon官方群里本来就已经有写好的官方和非官方的教程，而且都挺好，让我来写也没什么新意，于是转念一想，干脆写一下Loon上抓Warp的WireGuard教程算了，虽然熟悉的人知道步骤和Surge上是一样的，但是总会有些不熟悉的来问，干脆另起一篇，于是卸载Loon重新安装，从起步开始折腾吧。



## 免责声明：

本文涉及的任何解锁和解密分析脚本仅用于资源共享和学习研究，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。

间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, 本文作者对于由此引起的任何隐私泄漏或其他后果概不负责。

请勿将本文内的任何内容用于商业或非法目的，否则后果自负。

如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我将在收到认证文件后删除相关脚本。

对任何本文中包含的脚本在使用中可能出现的问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害．

您必须在下载后的24小时内从计算机或手机中完全删除以上内容。

任何以任何方式查看此项目的人或直接或间接使用该项目的任何脚本的使用者都应仔细阅读此声明。本文作者保留随时更改或补充此免责声明的权利。一旦使用并复制了任何本文相关脚本或其他内容，则视为您已接受此免责声明。

## 简介：

以下部份来自官方文档：

### Loon是什么

Loon是一个集网络代理、网络调试、网络改写等一系列功能于一体的网络工具。

### 网络代理

- 支持常见的代理协议，http、https、Shadowsocks、ShadowsocksR、VMess、VLess、Trojan、WireGuard
- 能够代理TCP和UDP（仅Shadowsocks、ShadowsocksR、Trojan协议支持）数据
- 支持IPv4和IPv6

### 网络调试

- 使用MitM攻击方式可以查看详细的https请求
- 详细记录一个连接的请求过程，方便调试网络问题

### 网络改写

- 使用Rewrite功能快速修改一个http(s)请求的请求头或者直接返回一个请求体
- 使用JavaScript修改一个http(s)请求的任何数据

简单说就是跟Surge、Shadowrocket、Clash、Quantumult X等类似的iOS平台网络工具，对比其他App个人感觉有如下优势：

1. 价格合适
2. 提供图形化界面进行管理和配置，基本上常用操作均可通过UI进行
3. 界面简单美观
4. 功能强大
5. 开发者和群众直接沟通

可以说比起Shadowrocket和Quantumult X更适合新手。

界面见下图：

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/IMG_1498.png" alt="IMG_1498" style="zoom: 25%;" />



## 快速上手：

开始使用前的准备工作：

在第一次打开Loon的时候，它会询问你需要以下网络权限：

- 无线局域网与蜂窝数据
- 本地网络
- 添加VPN配置

请都选择**允许并按照系统指引**进行设置。

**以下部份来自官方手册**

新安装的Loon自带一个简易的配置，所以只需要导入节点或者导入订阅节点就能使用，具体步骤如下：

**首次添加订阅节点：**

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/Untitled.png" alt="Untitled" style="zoom: 50%;" />

**首次添加单个节点：**

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/Untitled-2.png" alt="Untitled-2" style="zoom:50%;" />

在根据上述操作添加完订阅后，你的Loon就已经属于可用状态了。

接下来我们开始进行Warp阶段的一些操作了。

## 一些必要设置及证书安装

提示：如果你已经将脚本、复写、MitM打开，并且已经安装并信任了证书，则下面这一段可以跳过。

首先进入配置页面，将脚本、复写、MitM这三个开关都打开，如下图：

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_11.01.53.png" alt="iShot_2023-03-27_11.01.53" style="zoom: 25%;" />

接下来需要进入到设置的MitM的域名设置里面，将MitM over HTTP/2 开关打开

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_11.10.39-2.jpg" alt="iShot_2023-03-27_11.10.39-2" style="zoom: 25%;" />

接下来是安装证书并且信任，文字步骤如下：

设置-证书管理-（如果有证书）安装CA证书-允许描述文件-选取设备iPhone-设置-已下载描述文件-安装描述文件-输入密码-安装-通用-关于本机-拉到底部的证书信任设置-点上Loon对应证书。

图片步骤见下面的图示：

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_11.12.39-2.jpg" alt="iShot_2023-03-27_11.12.39-2" style="zoom: 25%;" />

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_11.15.33-2.jpg" alt="iShot_2023-03-27_11.15.33-2" style="zoom: 25%;" />

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_11.17.28-2.jpg" alt="iShot_2023-03-27_11.17.28-2" style="zoom:50%;" />



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


## 下载1.1.1.1 App

下面链接是日本区的，你们可以直接在自己的App Store搜索1.1.1.1

https://apps.apple.com/jp/app/1-1-1-1-faster-internet/id1423538627

## 注册一个cloudflare帐号

注册帐号操作建议在电脑上进行。

#### **我这里仅根据下面教程和实际大家注册过程中的一些问题做一些提示：**

- 有些人在注册Zero Trust过程中，发现并不能如同文中所提到那样跳过付款，那么我的建议是添加一个付款方式，支持PayPal、Visa、Master、AE等;

- 如果你实在不想添加付款方式又想玩，那么可以选择加入别人的ZearoTrust Team，我可以提供一下我的团队名：

  GetMoreCats,验证方式为gmail邮箱;

- 如果设置过程中发现device里面是空白的，这时候去左边的setting里面有个warp client，进去后有个mange 里面添加设备验证规则即可，验证规则一般建议选择邮箱后缀（Emails ending in）：[gmail.com](http://gmail.com) 或者 [outlook.com](http://outlook.com) 不太建议国内邮箱。顺便建议如果有电脑，最好在电脑上进行设置更方便。

- 在setting里面Authentication里面的Login methods记得选择**One-time PIN**，这样才能在登陆时候收到邮件发送过来的一次性认证PIN

- 如果还有其他问题可以进[Loon官方telegram群](https://t.me/Loon0x00)找我：🐈🐈‍⬛🐈‍⬛整点猫咪️



按照下面链接教程：注册warp和加入一个team（Zero Trust），并用1.1.1.1 app进行一次链接以生成数据


教程：https://surge.tel/?p=2116


2023.4.9补充：如果你看了上面的zero trust教程觉得没法解决其中某些问题，可以直接使用warp+（个人版）下面已经补充warp+的操作。

2023.6.17日补充：如果无基础的/折腾不好zero team的建议直接使用warp+，在实际使用中无任何区别。



## 下载WireGuard App

下面链接是日本区的，你们可以直接在自己的App Store搜索WireGuard

https://apps.apple.com/jp/app/wireguard/id1441195209





## 安装Boxjs以及薯条的clouflare插件：

首先安装Loon社区制作的插件仓库：

https://gitlab.com/lodepuly/vpn_tool/-/raw/main/Tool/Loon/Plugin/LoonGallery.plugin

或者通过这里[一键添加插件仓库](https://www.nsloon.com/openloon/import?plugin=https://gitlab.com/lodepuly/vpn_tool/-/raw/main/Tool/Loon/Plugin/LoonGallery.plugin)

安装方法：

配置-插件-右上角添加-URL中粘贴上面地址-信任插件安装，并且按照图示的点击进入插件仓库

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_12.02.13-2.jpg" alt="iShot_2023-03-27_12.02.13-2" style="zoom: 25%;" />

安装boxjs插件并订阅薯条的脚本json：

薯条的脚本json地址：

https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/box/Cloudflare.boxjs.json

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_12.11.18-2.jpg" alt="iShot_2023-03-27_12.11.18-2" style="zoom: 25%;" />

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_12.17.47-2.jpg" alt="iShot_2023-03-27_12.17.47-2" style="zoom: 25%;" />

安装薯条的插件：

在插件仓库中找到：VIRGICLYNE/CLOUDFLARE点开后选择右边的安装按钮按照上面教过的步骤进行安装

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_12.22.49-2.jpg" alt="iShot_2023-03-27_12.22.49-2" style="zoom: 25%;" />



### 附上不通过插件仓库的安装地址：

- boxjs插件：

手动安装：

`https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.loon.plugin`

 ☁ [1.1.1.1 by Cloudflare with WARP](https://github.com/VirgilClyne/Cloudflare/wiki/☁-1.1.1.1-by-Cloudflare-with-WARP)

- Loon:

  - 点击一键安装: [Cloudflare.1.1.1.1.plugin](https://api.boxjs.app/loon/import?plugin=https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/plugin/Cloudflare.1.1.1.1.plugin)

  - `插件`链接: [Cloudflare.1.1.1.1.plugin](https://github.com/VirgilClyne/Cloudflare/blob/main/plugin/Cloudflare.1.1.1.1.plugin?raw=true)

  - 薯条的boxjs订阅：

    `https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/box/Cloudflare.boxjs.json`		

### 通过Wireguard app生成一堆密钥

打开wireguard app添加隧道-手动创建-生成密钥对，将生成的公钥和私钥都复制出来，保存在备忘录并做好备注公钥、私钥。本次教程中wireguard的唯一作用就是生成一对密钥。

提示：建议先复制公钥再复制私钥，因为进行app间程序切换回来，公钥似乎会消失；复制私钥时候用全选再复制，避免漏字母

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_13.35.05-2.jpg" alt="iShot_2023-03-27_13.35.05-2" style="zoom: 25%;" />



## boxjs中的设置：

根据上面的教程我们已经安装并且配置好了boxjs，进入薯条的cloudflare 1.1.1.1，按照提示填入设备ID和在上一步Wireguard App中生成的一对密钥，按照提示位置贴好设备ID、私钥和公钥。

设备ID可在1.1.1.1 app的设置-诊断中找到，复制并保存

**Zero Trust下的操作**：

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_14.22.56-2.jpg" alt="iShot_2023-03-27_14.22.56-2" style="zoom: 25%;" />

**Warp+下的操作**：

通过更改key获取流量

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-04-09_13.37.09-2.png" alt="iShot_2023-04-09_13.37.09-2" style="zoom:25%;" />

备注：关注telegram频道：https://t.me/warpplus ，会定时推送key，自己选一个按上面步骤填入即可；可以自己邀请朋友注册获得流量，因为第三方App（Loon、Surge、小火箭等）使用warp+消耗的流量并不会计入账户（只有通过1.1.1.1 App链接消耗的会计入），所以实际上只需要邀请一个朋友注册获得1G流量即可，也可以通过内购的方式获得每月无限流量（土区约4元/月）

在设置-高级-诊断页面客户端配置下的ID中找到设备的ID

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-04-09_13.17.33-2.png" alt="iShot_2023-04-09_13.17.33-2" style="zoom:25%;" />

注意：**以下操作是建立在Loon运行过程中**：

在boxjs中填好相应字段并保存：

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_14.37.28.png" alt="iShot_2023-03-27_14.37.28" style="zoom: 25%;" />

**Zero Trust下：**

接下来进入到1.1.1.1 app的设置-高级-连接选项-拉到底部，重置加密密钥，就会出现Loon的通知打开即是生成的配置文件

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_14.43.40-2.jpg" alt="iShot_2023-03-27_14.43.40-2" style="zoom: 25%;" />



**Warp+下**：

进入到1.1.1.1 app的设置-高级-连接选项-拉到底部，重置加密密钥，也是和zero trust一样的操作过程。

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-04-09_13.30.43-2.png" alt="iShot_2023-04-09_13.30.43-2" style="zoom:25%;" />

**提醒：在系统自带的邮件客户端里面添加一个可用邮箱，不然会收不到邮件通知，可以将收到的邮件发送给自己便于保存。**

将生成的配置文件复制并粘贴到Loon的Proxy字段里面去，即可使用啦。

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-27_15.04.50-2.jpg" alt="iShot_2023-03-27_15.04.50-2" style="zoom:50%;" />



如果你不想折腾，这里有一个配置：



`WARP = wireguard, interface-ip=172.16.0.2, interface-ipv6=2606:4700:110:832c:b21b:4f99:f9fa:417b, private-key="2JkWiH65BRnIZTr5y4i4XVPkYnWZ9Vr18FkpWEc7aEQ=", mtu=1280, dns=162.159.36.1, dnsv6=2606:4700:4700::1111, keepalive=45, peers=[{public-key="bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=", allowed-ips="0.0.0.0/0, ::/0", endpoint=engage.nanocat.me:2408, reserved=[195,10,198]}]`



**最后要提醒的是，如果你已通过Loon获取了一组可用的 WireGuard 配置，那么建议卸载 1.1.1.1 这个应用程序，因为重启该应用时可能会自动重置密钥，导致之前获取的配置不再可用，必须重新获取。**

**说明一下：目前转出来的节点，只有在电信网络下有比较好的体验，联通和移动的体验均不太好，请根据自己网络运营商看要不要折腾。**

2023.03.30 补充一点：用薯条面板生成的配置的endpoint是[engage.nanocat.me:2408](engage.nanocat.me:2408)，这个是他的私有DNS服务器，里面包含了所有warp的endpoint可用IP，包括free的，有些IP段在国内是不通的，这也是有些人有时候直连ping不通的原因，当时正好分配到不能用的IP，如果这样时候可以试试把endpoint改为：

162.159.193.1～10:2408

或者162.159.195.1～10:2408，

注意不是上面的格式，而是从1～10中选一个去试

最终格式应该是类似：162.159.193.5:2408

或者

162.159.195.8:2408

这两个193、195段是Warp+服务的。

千万不要直接填成1～10然后问为什么不行🫠

或者直接用官方的域名地址：

engage.cloudflareclient.com:2408

然后更改endpoint的方法：

<img src="./Loon%E6%96%B0%E6%89%8B%E8%B5%B7%E6%AD%A5%E6%8A%98%E8%85%BEWarp.assets/iShot_2023-03-31_11.22.23-2.jpg" alt="iShot_2023-03-31_11.22.23-2" style="zoom:25%;" />

2023.6.17 修订：在Loon TestFlight 3.1.0（573）中，增加了新的策略组类型Chain（代理链），可以将所选策略组连接起来形成代理链，Chain类型的策略组可以嵌套任意类型的策略组、节点，自动策略组（utl-test，fallback，loadbalance） 暂时不能将Chain策略组作为子策略，当前版本的代理链暂不支持UDP，后续会支持

在Loon TestFlight 3.1.0（581）中已经增加了代理链对UDP的支持，至此，Loon也可以通过代理链使用wireguard（warp）了，同时因为开发者对于Loon的优化，所以在Loon上使用warp+（zero trust）转化来的wireguard，可以不用进行endpoint的优选，根据自己需要，通过代理链或者直连的方式进行使用。

最后打一个小小的广告：

机场推荐： 

两家还不错的中端机场

魔法学院： http://www.2220.it/register?aff=czShtQkPmv （机场主是群里的好朋友）

炸鱼薯条：https://front.fishport.cloud/#/register?code=vB4AqLDi  （机场主就是做这个转化面板的薯条）

