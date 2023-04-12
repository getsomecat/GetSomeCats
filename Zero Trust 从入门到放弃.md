# Zero Trust 从入门到放弃



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

## 操作步骤

### Surge上的设置

按照如下图所示的打开Surge的MITM、脚本、Rewrite开关，并且在MitM的配置根证书选项中，按照系统提示安装并信任CA证书，打开MITM over HTTP/2 开关

注：证书信任步骤自行搜索解决。

<img src="./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-04-10_15.43.37-2.png" alt="iShot_2023-04-10_15.43.37-2" style="zoom:25%;" />



🔔再提醒：除了一开始要求的打开1.1.1.1 app链接一次并加入team后，就可以断开它的链接，后面只是点开这个app并不需要链接它，后续操作都是在surge运行的情况下进行！

### 1.去app store下载1.1.1.1 app：

下载地址

[https://apps.apple.com/jp/app/1-1-1-1-faster-internet/id1423538627](https://apps.apple.com/jp/app/1-1-1-1-faster-internet/id1423538627)

### 2.去apps tore下载wireguard app

[‎WireGuard](https://apps.apple.com/jp/app/wireguard/id1441195209)

### 3.注册cloud flare账号

按照下面链接教程：注册和加入一个team（Zero Trust），并用1.1.1.1 app进行一次链接以生成数据，其后可以关闭并打开surge。

一个关于注册Cloudflare账户和加入ZeroTrust的详细设置教程，

Blog：

https://surge.ga/?p=2116

GitHub：
https://github.com/getsomecat/GetSomeCats/blob/Surge/注册Cloudflare并加入ZeroTrust教程.md

~~此教程不是我编写的，我是网上找到的，只是觉得写得很详细，所以就附上了。~~

~~[Cloudflare WARP](https://www.morax-xyc.com/post/839e7851/)~~

如果你觉得注册账号步骤太过于麻烦，可以选择跳过此步骤，选择Warp+个人版。

**Warp+下的操作**：

通过更改key获取流量

<img src="./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-04-09_13.37.09-2-1116732.png" alt="iShot_2023-04-09_13.37.09-2" style="zoom:25%;" />



备注：关注telegram频道：https://t.me/warpplus ，会定时推送key，自己选一个按上面步骤填入即可；可以自己邀请朋友注册获得流量，因为第三方App（Loon、Surge、小火箭等）使用warp+消耗的流量并不会计入账户（只有通过1.1.1.1 App链接消耗的会计入），所以实际上只需要邀请一个朋友注册获得1G流量即可，也可以通过内购的方式获得每月无限流量（土区约4元/月）



### 4.在surge里面安装薯条的warp+ panel 模块



安装模块方法：首页-模块-安装新模块-在弹出的窗口中贴上下面的地址

模块地址：

[https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/sgmodule/Cloudflare.1.1.1.1.sgmodule](https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/sgmodule/Cloudflare.1.1.1.1.sgmodule)

### 5.surge 安装boxjs 模块，并订阅薯条的boxjs json：

Boxjs的官方文档： https://docs.boxjs.app

**boxjs的安装地址**：

https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.surge.sgmodule

备注：安装完后在Safari中输入：boxjs.com 如果成功则如下图所显示，否则请检查根证书、MITM、脚本、Rewrite开关

订阅**薯条的boxjs json地址**如下：

[https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/box/Cloudflare.boxjs.json](https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/box/Cloudflare.boxjs.json)

<img src="./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-03-27_12.17.47-2.jpg" alt="iShot_2023-03-27_12.17.47-2" style="zoom:25%;" />



boxjs中的一些设置：

HTTP API中的密码和端口要对应才能使用Boxjs

<img src="./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-04-10_17.01.42.png" alt="iShot_2023-04-10_17.01.42" style="zoom:25%;" />

### 6.在Wireguard App中生成密钥

打开wireguard app添加隧道-手动创建-生成密钥对，将生成的公钥和私钥都复制出来，保存在备忘录并做好备注公钥、私钥。本次教程中wireguard的唯一作用就是生成一对密钥。

<img src="./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-03-27_13.35.05-2.jpg" alt="iShot_2023-03-27_13.35.05-2" style="zoom:25%;" />





### 7.打开1.1.1.1 App 复制设备ID

打开一次1.1.1.1 app ，surge会有一个提示公钥 设备注册ID等等，也可以进入surge的工具-日志拉到下面点开warp team response ，找到里面的设备注册ID，设备令牌数据，可以提前复制出来备用。

🔔提示：Zerotrust的设备注册ID 格式为：t.xxxxxxxxxxxxxx要全部复制进去，Warp+的则是一串字符串。

<img src="./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-03-27_14.22.56-2.jpg" alt="iShot_2023-03-27_14.22.56-2" style="zoom:25%;" />

Warp+下

<img src="./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-04-09_13.17.33-2.png" alt="iShot_2023-04-09_13.17.33-2" style="zoom:25%;" />



提醒：很多人最后发现出错很多时候就是**私钥、公钥、 设备ID**没有复制完全。



### 8.填写boxjs中设置

打开boxjs 选择cloudflare 1.1.1.1，并按照提示填好相应参数

请确保设备ID、私钥、公钥的正确性



<img src="https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/EED32D84-9DCF-47AF-95CD-06A7404AB437_2/k1FPTBgJdPGIMa54ESfF2yEduHxXbAyXVoz8RwlcVpwz/IMG_3813.jpeg" alt="IMG_3813.jpeg" style="zoom:25%;" />



9. ### 1.1.1.1App中重置密钥生成配置

   打开1.1.1.1 app，进入设置 高级 链接选项拉到最底下的重置加密密钥

   Zerotrust 下：



<img src="./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-03-27_14.44.30-2.png" alt="iShot_2023-03-27_14.44.30-2" style="zoom:25%;" />

Warp+下：

![iShot_2023-04-09_13.37.09-2](./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-04-09_13.37.09-2.png)



正常情况下这时候surge会有个通知，通知内容是提示公钥是否一致并生成配置，点击生成配置的通知会自动跳转到系统邮件app，里面就是生成的wireguard配置，按照里面内容，进入surge首页-代理服务器-添加代理-代理类型选择wire guard 填入里面相应字段即可。（备注此图中配置仅仅是示例，别问我为什么两边不一样）

<img src="./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-04-10_17.28.05.png" alt="iShot_2023-04-10_17.28.05" style="zoom:25%;" />

或者按照如下图所示的方法在文本模式进行粘贴复制。

<img src="./Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.assets/iShot_2023-04-07_16.01.15-1115516.png" alt="iShot_2023-04-07_16.01.15" style="zoom:25%;" />

🔔说明一下：有些人按照教程生成的配置可能去ping的时候会不通，这是很正常的，服务器在美国呢，所以需要用代理链去拉warp才会快，~~目前香港只有HKT线路可以~~，现在surge加了client-id参数后可以使用HK地区代理链，然后其他地区就是日美新台了。

另外注意，拉warp的代理链需要UDP，根据目前的经验，SS和Trojan及Snell均可，Vmess不行，也不排除个别机场屏蔽了UDP，请自行测试

再说明：如果你按照本教程已经成功的生成了wireguard配置，将 https://raw.githubusercontent.com/ExaAlice/Alice/main/Rule/WARP.list 此规则加入到代理规则，并走warp节点，即可在面板上显示是否保护，或者点一下[https://www.cloudflare.com/cdn-cgi/trace](https://www.cloudflare.com/cdn-cgi/trace)  测试

<img src="https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/357FB9B2-BAE7-4345-9ABA-F998C9996B1B_2/GRsmyiU8CnMsSqiFEHpMrzsjwCRossl4zUlx8ERTTyAz/IMG_3772.png" alt="IMG_3772.png" style="zoom:25%;" />

显示warp=plus/on，那么就是成功了，还有就是用warp线路去看YouTube，如果能看就成功了，区域如果直连的可能显示为US，用其他地区代理链的会显示相应代理链，那么1.1.1.1 app可以打入冷宫了（卸载），因为你再次打开它会自动重置客户端公钥。

2023.3.30 更新增加说明：目前因为cloudflare那边更改政策，所有的zerotrust在测试时候只会显示on（部份保护），而不是之前的plus（完全保护），实际上没区别，如果实在纠结这个可以退掉zerotrust，用个人版warp+



<img src="https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/8F901CEE-C93E-4433-A50E-70839C4DB9DA_2/JgzoNnR2m051PHN83z5LQGKxLBYwW3voS28zkVT5KZsz/IMG_3806.jpeg" alt="IMG_3806.jpeg" style="zoom:25%;" />
刷新一下后去工具的最近请求里面看如下所示的三个网址是否走了warp的节点

![IMG_3783.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/A8BD134F-8802-4804-A991-6B499652D131_2/49VLYavISKlsNhCA8h1IhJCOcBhwvMFSRHdojoNbPBYz/IMG_3783.jpeg)

🔔补充一点：用薯条面板生成的配置的endpoint是 [engage.nanocat.me:2408](engage.nanocat.me:2408)，这个是他的私有DNS服务器，里面包含了所有warp的endpoint可用IP，包括free的，有些IP段在国内是不通的，这也是有些人有时候直连ping不通的原因，当时正好分配到不能用的IP，如果这样时候可以试试把endpoint改为：

162.159.193.1～10:2408

或者162.159.195.1～10:2408，

注意不是上面的格式，而是从1～10中选一个去试

🔔最终格式应该是类似：
```
162.159.193.5:2408
```
或者
```
162.159.195.8:2408
```
这两个193、195段是Warp+服务的。

千万不要直接填成1～10然后问为什么不行🫠

关于endpoint，可以参照这篇blog： https://surge.ga/?p=2189

2023年2月10日补充：

老刘于昨天更新了surge中的wireguard配置：

WireGuard 新增 Peer 参数 client-id，用于兼容 Cloudflare 或其他一些特殊的 WireGuard 实现。

例如：

peer = (public-key = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=, allowed-ips = "0.0.0.0/0, /0", endpoint = [2606:4700:d0a29f:c002]:2408, client-id = 83/12/235)

注：


1. 该参数仅被 Cloudflare 用于负载均衡，不涉及防滥用问题
2. 若使用 Surge 作为客户端连接 WARP 服务，请阅读并遵守 Cloudflare 的服务条款，合理使用。

如果使用最新的薯条面板抓出来的已经包含了client-id了（reserved参数即是）

根据示例自行添加进去即可，无其他变化


最后再次感谢各位大佬们凭借着热情写出来的东西，让我们这些小白用户有东西可以折腾！


最后的最后：如果看到最后也按照步骤来了一遍发现还是搞不定，那么可以选择加入我的team：getsomecats，验证方式：gmail。

如果还是搞不定，那么下面这个应该能帮到你：

想玩设备 ID 又懒得再抓配置的，这里有一个配置：


Surge用配置:
[Proxy]
WARP = wireguard, section-name=Cloudflare, test-url=http://cp.cloudflare.com/generate_204

[WireGuard Cloudflare]
private-key = EMNcZrq0R/P87ZbJcJ8sX8qDfCMlL/Tlb6Ln/6S7+lE=
self-ip = 172.16.0.2
self-ip-v6 = 2606:4700:110:8a81:2af4:55c2:34cc:8058
dns-server = 162.159.36.1, 2606:4700:4700::1111
mtu = 1280
peer = (public-key = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=, allowed-ips = "0.0.0.0/0, ::/0", endpoint = engage.cloudflareclient.com:2408, client-id = 139/184/125)

顺便说一下想买机场的可以走我的aff，强烈推荐一线机场墙洞：[https://dlercloud.com/auth/register?affid=126669](https://dlercloud.com/auth/register?affid=126669)

 ~~将我的GetSomeCats Team 配置放出来供使用。也可以加入我的Team：Getsomecats，验证方式为：gmail~~已满

有问题可以去我的频道https://t.me/GetsomeCats
或者surge讨论频道https://t.me/loveapps

