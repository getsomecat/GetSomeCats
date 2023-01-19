# Surge新手从购买到退款

前言：写这个东西是因为在圈叉群云熙写了个77页的pdf文档号称喂饭级别的教程，当时在surge群就开玩笑让她写一个88页的surge喂饭教程（虽然之前自己已经写过从入门到退款，但是还是整理整理，再详细一点吧。

本文中对一些app内的词语进行了讲解，但是有些没有，如果不满足于此教程，可以去看官方网站的

**Surge 官方中文指引：理解 Surge 原理**

*https://manual.nssurge.com/book/understanding-surge/cn/*

- [Surge新手从购买到退款](#surge新手从购买到退款)
  - [一，注册外区ID](#一，注册外区id)
  - [二，购买Surge授权](#二，购买surge授权)
  - [三 开始使用](#三开始使用)
  - [四，使用教程](#四，使用教程)
    - [1，基本操作](#1，基本操作)
      - [**Surge快速上手流程：从URL导入配置-＞导入机场托管配置；即可使用**](#surge快速上手流程：从url导入配置＞导入机场托管配置；即可使用)
    - [2， 导入配置](#2，导入配置)
    - [3，导入单个节点](#3，导入单个节点)
    - [4，新建策略组（机场订阅）](#4，新建策略组（机场订阅）)
    - [5，订阅转换](#5，订阅转换)
    - [进阶操作：](#进阶操作：)
      - [节点筛选](#节点筛选)
    - [6，建立规则](#6，建立规则)
      - [域名规则](#域名规则)
      - [域名和主机名](#域名和主机名)
      - [IP 地址规则](#ip地址规则)
      - [HTTP 相关规则](#http相关规则)
      - [其他规则](#其他规则)
      - [规则集](#规则集)
      - [RULE-SET 和 DOMAIN-SET 的不同](#rule-set和-domain-set的不同)
      - [逻辑规则](#逻辑规则)
    - [规则的操作步骤](#规则的操作步骤)
      - [6.1 建立本地规则](#6-1建立本地规则)
      - [6.2 建立远程规则集](#6-2建立远程规则集)
    - [7，模块的使用](#7，模块的使用)
      - [基本概念](#基本概念)
      - [编写模块](#编写模块)
    - [模块样例](#模块样例)
    - [本地模块](#本地模块)
    - [Boxjs](#boxjs)
    - [Sub-Store](#sub-store)
    - [五，推荐资源：](#五，推荐资源：)
    - [Corn定时设置教程](#corn定时设置教程)
      - [模块：](#模块：)
    - [推荐的GitHub](#推荐的github)
  - [常用仓库](#常用仓库)
  - [**其他**](#其他)




## 一，注册外区ID

因为某些众所周知的原因，Surge并没有在中国区的App Store上架，所以如果你需要使用Surge的话，就需要去其它国家或地区的Apple Store进行下载并购买它的授权进行激活使用，备注，其实激活surge授权可以直接在它的官方网站 https://nssurge.com/buy_now 通过支付宝进行购买即可，而不需要去购买外币的App Store GiftCard进行内购，这样很容易导致刚注册的外区ID因为苹果的官方封控而无法进行内购。

话不多说，接下来进入本节主题，外区Apple id的注册

备注：本文主要内容来自知乎这篇文章：https://zhuanlan.zhihu.com/p/367821925 对作者进行感谢

**1、准备工作**

1一个能接收短信的国内手机号

2.一个全新邮箱（指从没注册过Apple ID的邮箱）

3.美国地址生成器（后面我会给大家提供）

4.无需任何代理工具

**注意以下四点可以避免很多问题：**

出生日期：一定要设置成大于 18 周岁的日期，否则会导致部分应用由于年龄限制无法使用。

电子邮件：建议新注册一个全新的从未注册过 Apple ID 的邮箱，比如 163 邮箱。

手机号码：亲测，注册过中国区 Apple ID 的手机号码可以用来注册美区账号，不会产生冲突。

密码：设置密码时，密码中不要包含有名字、生日、邮箱中的信息，否则会卡在验证码那一步。

**2、注册教程**

为了方便大家注册，该方法全程都在手机中操作，不用借助电脑。

首先进入美国 Apple ID 注册页面，复制下方网址至 Safari 浏览器中打开即可进入。

https://appleid.apple.com/account

具体注册方法如下长图，跟着我的步骤走就行了，一定要严格按照我写的要求操作<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/v2-3e1c026cc9396785f6c2f747d2e9bc8f_1440w-2.webp" alt="v2-3e1c026cc9396785f6c2f747d2e9bc8f_1440w-2" style="zoom:50%;" />



接着需要对**电子邮件/手机号码**进行验证。把收到的验证码输入进去，依次点击**下一步**就行了。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/v2-b1cc10399838e94328ca56cd55b0499f_r-2898731-2898733-2898734.jpg" alt="v2-b1cc10399838e94328ca56cd55b0499f_r" style="zoom:50%;" />

注册成功后，账号会自动登录，如果没登录的话重新登录一遍刚注册的账号即可。

接着点击退出登录左边的“箭头”然后点击**付款方式**，接着再点击**添加付款方式**。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/v2-b30ec45de66285d41370200e1fba7885_r.jpg" alt="v2-b30ec45de66285d41370200e1fba7885_r" style="zoom:50%;" />



下一步是填写付款方式&账单地址，这步很关键，需要借助[美国地址生成器](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s%3F__biz%3DMzg5ODYwOTk3Nw%3D%3D%26mid%3D2247485842%26idx%3D1%26sn%3De2017929ea140600290ec3d1d854b5e5%26chksm%3Dc05eafc4f72926d2be2fbc542011cbc68c95c70f66c6f0ff0c4218a8af80ee6d10e78bf0fb9b%23rd)，它会自动帮你生成街道地址、城市、邮编、电话号码等信息。

生成地址前，建议选以下**五个免税州**：蒙大拿州（Montana）俄勒冈州（Oregon）

阿拉斯加州（Alaska）

特拉华州（Delaware）

新罕布什尔州（New Hampshire）

**三个稳定美国地址生成器**[（点这里获取）](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s%3F__biz%3DMzg5ODYwOTk3Nw%3D%3D%26mid%3D2247485842%26idx%3D1%26sn%3De2017929ea140600290ec3d1d854b5e5%26chksm%3Dc05eafc4f72926d2be2fbc542011cbc68c95c70f66c6f0ff0c4218a8af80ee6d10e78bf0fb9b%23rd)



下图中标注的**由美国地址生成器生成**的内容，直接复制美国地址生成器中生成的内容即可。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/v2-bf50ef49ee10e4d872aa8dc8d0454b9b_r.jpg" alt="v2-bf50ef49ee10e4d872aa8dc8d0454b9b_r" style="zoom:50%;" />

接着勾选**拷贝账单寄送地址**，最后点击**更新**就行了。



<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/v2-15a59fa3ac51284991b3685743231a73_r-2.jpg" alt="v2-15a59fa3ac51284991b3685743231a73_r-2" style="zoom:50%;" />

到这里我们的美区 Apple ID 就注册完成了！下面教大家如何登录。

3、登录美区ID

打开 App Store，首先退出当前账号。点击右上角的头像，然后拉到末尾，点击**退出登录**即可。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/v2-81f62cbca06b4df4416c233b331db22b_r.jpg" alt="v2-81f62cbca06b4df4416c233b331db22b_r" style="zoom:50%;" />

接着再次点击 App Store 中右上角的头像，输入前面注册的美区账号&密码，点击**登录**即可。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/v2-c17f93cd1e1ae62820a59e6cd17df48c_r.jpg" alt="v2-c17f93cd1e1ae62820a59e6cd17df48c_r" style="zoom:50%;" />

然后会跳出一个弹窗，选择**检查**即可，接着打开**同意条款与条件**，选择**下一页**。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/v2-f545d9e8e7919f2ca0415216f5bec514_r.jpg" alt="v2-f545d9e8e7919f2ca0415216f5bec514_r" style="zoom:50%;" />

不要修改任何内容，直接点击**下一页**，然后点击**继续**。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/v2-079753dbdbe6a367c0f940265f052752_r.jpg" alt="v2-079753dbdbe6a367c0f940265f052752_r" style="zoom:50%;" />

点击**Continue**，到这里我们的美区 Apple ID 就已经成功登录了。



注册登录成功后，我们就能下载美区中的各种 App 了。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_B060D5C88E48-1.jpeg" alt="IMG_B060D5C88E48-1" style="zoom:50%;" />

本篇是Surge教程，当然是去搜索Surge后进行下载了。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_24D6FC3BFF41-1.jpeg" alt="IMG_24D6FC3BFF41-1" style="zoom:50%;" />

4、一些需要注意的地方

1.设置密码时，密码中不要包含前面填写的名字、生日、邮箱中的任何信息，否则可能会卡在验证码那一步，总之就是密码尽量原创一个。

2.不要在「设置」中登录美区Apple ID，以免造成不必要的麻烦。下载美区 App 只需在 App Store 中登录即可，下载完后再换回国区账号即可，对 iCloud 等不会有任何影响。

3.如果你有在用Apple Music，切换成美区后会导致已下载的歌曲全被清空。

4.建议不要把美区 Apple ID 当成主力账号，需要下美区应用时登录就行了，以免出现啥问题。

5、常见问题汇总

➊ 手机号码提示错误怎么解决？

答：看看复制的号码是不是开头有数字"1"或者"+1"，有的话去掉即可。

➋ 更新 App 的时候显示账号被锁定，但可以下载未下载过的 App 是什么原因？

答：因为你更新的这个 App 之前是用其他 Apple ID 下载的，所以这个 App 是和你之前下载时的那个 Apple ID 绑定在一起的，所以出现被锁定的提示是原先账号出了问题，和当前账号没关系。解决方法很简单，把 App 卸载重新安装即可。

➌ 邮编错误怎么办？

答：估计是地址生成器网站数据库中的部分邮编有误，多生成几份地址试试即可。

➍ Your request could not be completed at this time 怎么办？

答：应该是地址生成器生成的号码有问题，电话是 xxx-xxx-xxx 的正常，而 +1xxx-xxx-xxx 就不行。解决方法就是去掉号码开头的"1"或者"+1"即可。

➎ Cannot be created at this time 怎么办？

答：切换成 4G、5G、或者换个浏览器、或者用电脑注册，或者次日再试试。

➏ 注册成功后，如何二次修改美区 Apple ID 的地址、姓名等信息？

答：进入**[美国苹果官网](https://link.zhihu.com/?target=https%3A//www.apple.com/)**，拉到底部找到 manage your apple id，登录后即可修改，不懂英文的同学可借助翻译。

如果以上回答仍然无法解决你的问题，那建议用Google、百度、必应、知乎等搜索工具去寻找解决方法。

在你按照上述都步骤注册了一个美国Apple id并且下载好了Surge后，我们接着就是进入下一步，购买并且使用。

## 二，购买Surge授权

一般来说购买Surge的授权有两种方式，一种是通过App Store的id内购进行，另外一种是直接在Surge的官网通过支付宝等方式进行购买，我们强烈推荐的是通过第二种方式即在官网进行购买。

Surge的官方网站的网址是：https://nssurge.com

在进入网站后，点击右上角的Buy Now

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0378-2902571.JPEG" alt="IMG_0378" style="zoom:50%;" />



接下来注意看清楚购买的授权是**for iOS**还是**for Mac**千万别买错了



<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0384-2902626.JPEG" alt="IMG_0384" style="zoom:50%;" />

本片教程以iOS为例，那么就是选择Buy Surge iOS ，点击后跳转到下一个页面，显示价格$49.99，然后下面的 License Email Address 就是输入**你的常用email**，**注意邮箱地址不要输错了。**

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0476.PNG" alt="IMG_0476" style="zoom:50%;" />

直接使用支付宝就没什么好说的了，点了后跳转到二维码的页面用支付宝扫了付款就会将授权码通过email发到你刚才输入的邮箱了，注意去查收就行了。

**国内用户强烈建议使用支付宝付款**

有些用户可能不想用支付宝，可以在输入邮箱后选择pay another way，点击底下的checkout

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0556.jpg" alt="IMG_0556" style="zoom:50%;" />

然后可以通过信用卡、Apple Pay等方式进行付款

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0557.PNG" alt="IMG_0557" style="zoom:50%;" />

**⚠️注意：千万千万看清楚你输入的邮箱有没有错误**

如果你真的马大哈到连自己的邮箱也输错了的话，也不是没有补救方法，附上你的付款订单相关信息，发送到官方的反馈邮箱：support@nssurge.com ，然后等待回复，当然也可以直接在官网上发工单说明相关情况然后等回复吧。



## 三 开始使用

**进行激活**

在上一步我们提到了surge的下载以及购买，在购买后，会发一个授权码到你的邮箱里

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0487.JPG" alt="IMG_0487" style="zoom:50%;" />

这时候打开surge app，刚开始打开它会提示给网络权限、添加VPN等，都接受并同意吧，不然肯定是没法用的

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0413-2903629.PNG" alt="IMG_0413" style="zoom:50%;" />

在都允许之后，需要对surge进行授权激活，不然出站模式就只有一个直接连接，没法使用代理功能

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0477.PNG" alt="IMG_0477" style="zoom:50%;" />

随意点击一下其他的出站规则，会提示你升级到Surge Pro，并会有已经推出的功能的介绍及解锁价格等等

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0478.PNG" alt="IMG_0478" style="zoom:50%;" />

因为我们之前已经在官方网站上通过支付宝的方式获得了授权码，这时候只需要点击一下恢复购买，就会弹出恢复购买的方式，这里当然是选择使用邮箱恢复了。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0479.PNG" alt="IMG_0479" style="zoom:50%;" />

选择邮箱恢复后会进入到下一个页面，输入你的激活邮箱并输入授权码

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0489.JPG" alt="IMG_0489" style="zoom:50%;" />

点击继续，确认后进入下一步

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0483.PNG" alt="IMG_0483" style="zoom:50%;" />

至此，你就已经获得了全功能的Surge了，接下来就是具体的一些使用教程了。

## 四，使用教程

### 1，基本操作

**Surge快速上手流程：从URL导入配置-＞导入机场托管配置；即可使用**

在完成上述操作后，打开以下功能开关，点击配置根证书，请点击生成新的CA证书，安装证书，根据页面中文提示操作。如下图所示。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/photo_2022-11-16_10-55-54.jpg" alt="photo_2022-11-16_10-55-54"  />

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/photo_2022-11-16_11-00-27.jpg" alt="photo_2022-11-16_11-00-27"  />

**证书安装并信任的步骤：打开Surge」→「首页」→「修改」→「配置跟证书」→「生成新的CA证书」→「安装证书」→「打开Apple系统设置」→「通用」→「底部」→「VPN与设备管理」→「安装证书」→「返回上一级」→「关于本机」→「底部证书信任设置」。**



### 2， 导入配置

**注意事项：Surge 5 目前支持以下协议：HTTP、HTTPS、SOCKS5、SOCKS5 via TLS、Snell、Shadowsocks、VMess、Trojan、SSH、WirGuard、TUIC**

若您的机场有一键导入Surge的功能，可以忽略此教程。

打开 Surge，在「**首页**」左上角点击配置名 - 「**从 URL 下载配置**」，**将输入框清除干净后**，粘贴懒人配置链接。 常用配置（排名不分先后）：

**深巷有喵**: https://raw.githubusercontent.com/Rabbit-Spec/Surge/Master/Conf/Spec/Surge-Mini.conf

**Surge开发者推荐的中国区用户最小配置**: https://raw.githubusercontent.com/ExaAlice/Alice/main/Surge/Surge.conf

🎉一个**公益配置**，基于Surge开发者的最小配置做了修改，并添加Warp免费节点： [https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/A%20easy%20Surge%20config.conf](https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/A easy Surge config.conf) 该配置目前由 **整点猫咪** 提供并维护 图片示例教程：

 1、打开 Surge，在「首页」左上角点击配置名

![photo_3_2022-11-16_09-33-46](./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/photo_3_2022-11-16_09-33-46.jpg)

2、从 URL 下载配置

![photo_1_2022-11-16_09-33-46](./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/photo_1_2022-11-16_09-33-46.jpg)

3、将输入框清除干净后，粘贴懒人配置链接

![photo_2_2022-11-16_09-33-46](./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/photo_2_2022-11-16_09-33-46.jpg)

4、点击完成

![photo_8_2022-11-16_09-33-46](./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/photo_8_2022-11-16_09-33-46.jpg)

5、打开配置列表，选择在文本模式中编辑

![photo_4_2022-11-16_09-33-46](./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/photo_4_2022-11-16_09-33-46.jpg)

6、找到 **[Proxy Group]**,在该模块下 所有 的**policy-path=**后填写**你的机场订阅链接**

![photo_5_2022-11-16_09-33-46](./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/photo_5_2022-11-16_09-33-46.jpg)

7、保存配置，返回首页

![photo_6_2022-11-16_09-33-46](./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/photo_6_2022-11-16_09-33-46.jpg)

8、长按更新外部资源

![photo_7_2022-11-16_09-33-46](./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/photo_7_2022-11-16_09-33-46.jpg)

执行完以上步骤后即可开始使用了。

备注：通常情况下，出站模式选择**规则模式**。



### 3，导入单个节点

[打开Surge]->[首页]->[代理服务器]->[选择代理类型]->[填入相应节点参数即可]

步骤图如下：

1，选择代理服务器（所有**添加策略组**或者**单个节点或者订阅**都是在代理服务器里面进行的）

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0495.jpg" alt="IMG_0495" style="zoom:50%;" />

2，选择添加代理

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0497.jpg" style="zoom:50%;" />

选择相应代理协议

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0498.jpg" alt="IMG_0498" style="zoom:50%;" />

根据节点协议类型选择相应的选项，选择好后填入相应的参数

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0499.PNG" alt="IMG_0499" style="zoom:50%;" />



### 4，新建策略组（机场订阅）

步骤：

[首页]->[通用]->[代理服务器]->[新增策略组]->[使用外部代理列表]->[粘贴订阅或者本地节点文件（带后缀名）]

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3960.png" alt="IMG_3960" style="zoom:50%;" />

新增策略组并且给策略组取个名字，拉到底下点上使用外部代理列表并贴上订阅链接

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3963.jpeg" alt="IMG_3963" style="zoom:50%;" />

保存后即可

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3964.png" alt="IMG_3964" style="zoom: 50%;" />

点开可看到里面的全部节点

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3974.png" alt="IMG_3974" style="zoom:50%;" />



### 5，订阅转换

上面我举例的是以墙洞为例的，作为一线机场，提供了各种App的订阅链接，有些人买的可能没有提供surge的订阅链接，但是也不是没有办法，可以用订阅转换。

这个机场没有提供surge的订阅链接，需要进行订阅转换后使用

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4777.png" alt="IMG_4777" style="zoom:50%;" />

这里以墙洞的订阅转换为例：

转换网址为： https://sub.dler.io，进入后如下图所示

客户端选择Surge4

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4778.jpeg" alt="IMG_4778" style="zoom:50%;" />



输出为 node list 勾选上，点击生成订阅链接

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4779.jpeg" alt="IMG_4779" style="zoom:50%;" />



复制生成的订阅链接

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4780.png" alt="IMG_4780" style="zoom:50%;" />



接下来就是按照上一步的操作使用外部代理列表的方式导入即可。

### 进阶操作：

#### 节点筛选

在教导入订阅的时候，可能有人注意到了底下还有一行过滤器，而里面的备注上写着正则表达式（选填），这里就需要用到正则对节点进行筛选了。还是以墙洞为例，我订阅的机场节点有几十个，全部挤在一个策略组里面，我想按照区域进行分开，常用的香港、台湾、日本、新加坡、美国分开放，操作方法和步骤有两种：一种是直接订阅筛选，另外一种是对策略组筛选。

先说订阅筛选，还是如同刚开始的导入机场订阅一样，新建一个策略组，取名叫做香港节点，然后使用外部代理列表，贴上机场订阅，区别就是在底下的过滤器中输入香港，保存后就可以在策略组页面看到只包含香港的节点的策略组了。

建立一个名为香港节点的策略组，底下选择使用外部代理列表，并且贴上机场的订阅，同时在底下过滤器中输入关键字：香港

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3980-3763374.jpeg" alt="IMG_3980" style="zoom:50%;" />

进行保存

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3978-3763422.png" alt="IMG_3978" style="zoom:50%;" />

点开看下效果

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3979-3763462.png" alt="IMG_3979" style="zoom:50%;" />

**注意：这里的策略组的类型选择的是手动选择（select），如果你想自动测速后自动选择为延迟最低的节点，将组类型改为延迟自动测试（Url-test）即可，或者根据你的需要改为url可用性自动测试（fallback）、负载均衡（load-balance）。**

另外一个办法就是在机场订阅的策略组里面筛选

前面方法类似，新建策略组，命名为新加坡节点，但是这里不使用外部代理列表，而是选择包含另外一个策略组的策略，并选中包含所有节点的机场订阅，并在底下的正则筛选中输入新加坡，就会得到一个只包含新加坡的节点的策略组了。

建立个策略组，命名为新加坡节点，选择包含另外一个策略组的策略，选择机场订阅策略组，同时过滤器中以新加坡为关键词

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3986.jpeg" alt="IMG_3986" style="zoom:50%;" />

包含另一个策略组的策略中选择机场订阅

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3982.png" alt="IMG_3982" style="zoom:50%;" />

保存

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3984.png" alt="IMG_3984" style="zoom:50%;" />

点开看下效果

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3985.png" alt="IMG_3985" style="zoom:50%;" />



如果明白了这两种操作方法，你在拥有多个机场订阅的时候就可以对他们进行统一的筛选和分组了。方法为：建立机场一策略组，建立机场二策略组，再建立一个策略组所有节点来包含机场一和机场二，然后所有的节点筛选就通过对所有节点策略组来进行。

建立个机场二策略组，使用外部代理列表，贴上机场订阅，类型选的是手动选择（select）

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4012.jpeg" alt="IMG_4012" style="zoom:50%;" />

保存后可以看到有两个机场的订阅

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4008.png" alt="IMG_4008" style="zoom:50%;" />

再建立一个策略组所有节点，来包含机场一和机场二

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4010.png" alt="IMG_4010" style="zoom:50%;" />

保存即可看到效果

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4011.png" alt="IMG_4011" style="zoom:50%;" />





附上节点筛选规则：



`^.*(A|B) = A或者B`

`(A.*B|B.*A) = 有A有B`

`^(?!.*A) = 不含A`

`^(?!.*?B).*A = 有A但不含B`

另外种写法：



`(A).*(B) 节点名既有 A 也有 B`

`(A)|(B) 节点名有 A 或者 B`

`^(?!.*A) 节点名不含有 A`

`^(?!.A).(B) 节点名不含有 A 但含有 B`

`^(?!.*(A|B)) 节点名既不含有 A 也不含有 B`

例如：写一个策略组，不包含港台日新美的：

`^((?!(日|台|新|美|港)).)*$`

例如：写一个策略组，只包含港台日新美的：

`日|台|新|美|港`

具体的还是看你的节点命名方式



### 6，建立规则

以下讲解部分来自官网：

Surge 使用规则系统来对选择每个连接的出口策略。规则的匹配方式为**自上而下，逐一测试**。最末尾规则一定是一个 FINAL 规则，当所有规则都不匹配时使用。

#### 域名规则

当连接的目标主机名符合时，匹配该规则。

- DOMAIN：严格匹配某域名。
- DOMAIN-SUFFIX：匹配某域名及其子域名，如 DOMAIN-SUFFIX,apple.com 可以匹配 apple.com 和 www.apple.com，但是不会匹配 anapple.com。
- DOMAIN-KEYWORD：简单的字符串搜索，只要域名包含子串就会匹配。
- DOMAIN-SET：专为大量域名集列表文件设计，支持上万条记录的快速查询。文件中每行为一个域名，如果某行以 . 开头则表示匹配所有子域名和该域名本身。可用于广告过滤。

#### 域名和主机名

域名其实是主机名的一种形式，Surge 内部对域名和主机名并没有区分，所有文档所提到的域名和主机名所对应的处理逻辑都是一样的。

比如，DOMAIN,1.2.3.4 规则其实也可以用于匹配目标主机为 IP 地址 1.2.3.4 的连接。DOMAIN,MacBook.local 也可用于匹配 Bonjour 主机名。

#### IP 地址规则

当连接的目标主机的 IP 地址符合时，匹配该规则。包含 IP-CIDR，IP-CIDR6，GEOIP 三种类型。

当目标主机名是一个域名或主机名时，IP 类型规则会触发本地 DNS 解析。根据解析得到的 IP 地址进行判断。当解析失败是： * 如果最终的 FINAL 规则带有 dns-failed 标记，那么将直接匹配 FINAL 规则。 * 如果 FINAL 规则不带有 dns-failed 标记，**该请求将直接失败**。

IP 类型规则有一个专有的参数 no-resolve，如果一个 IP 规则带有该参数，那么 1. 如果目标主机名是一个域名，那么将跳过该规则，不触发 DNS 解析。 2. 如果目标主机名是 IP 地址，按规则进行判断。 3. 如果目标主机名是一个域名，且先前出现的 IP 规则已经触发了 DNS 解析获得了 IP 地址，那么使用该 IP 地址进行判断。

由于 DNS 查询有时间开销，所以在配置规则时，最优的方式是尽量先不触发 DNS 解析，将所有会触发 DNS 解析的规则放在底部。这样应使用代理策略的请求就完全避免了在本地进行 DNS 解析。

但是也不用刻意的去完全避免解析，因为一旦决定使用 DIRECT 策略，那么最终还是要进行解析。Surge 有完备的 DNS 缓存系统，不必在意短时间内的重复解析。

不过需要注意，如果某目标主机在本地 DNS 不可被解析，那么一定需要加入对应的规则，在触发 DNS 前就决定策略终止匹配。或者对 FINAL 规则加上 dns-failed 标记并使用代理策略。

####  HTTP 相关规则

仅对 HTTP 请求有效的规则，包含 URL-REGEX 和 USER-AGENT。

比较特殊的是，只有由于只有进行 MITM 解密后才可获取到 URL，所以 URL-REGEX 对未解密的 HTTPS 连接无效。但是 USER-AGENT 规则却对未解密的 HTTPS 也连接有效，因为程序在使用 HTTP 代理时，会在发送 CONNECT 请求时带上自己 User Agent 的明文。

####  其他规则

- PROCESS-NAME：仅对 Mac 版本有效，可以匹配程序名。
- SRC-IP：可匹配连接来源 IP 地址，接管其他设备连接时可使用。
- IN-PORT：Mac 版本支持多端口监听，可为不同监听端口配置特定的规则。
- DEST-PORT：可匹配目标主机的端口号。
- PROTOCOL：可根据连接的协议进行匹配，取值范围是 HTTP，HTTPS，TCP，UDP。（虽然逻辑关系上 HTTP 和 HTTPS 都是 TCP 的一种特殊形式，但是该规则将按照前一章的分类区别对待。）
- SCRIPT：可以使用 JavaScript 根据各种参数完全自由的选择策略。

####  规则集

RULE-SET 规则集可以将多个子规则放在一个单独的文件中，便于分享和复用。但是规则集中的规则不可以指定策略，整个规则集指向一个同一个策略。

另外 Surge 自带了 SYSTEM 和 LAN 两个规则集，规则集包含的具体子规则会随 Surge 更新而有所调整。注意 LAN 规则集会触发 DNS 解析。

####  RULE-SET 和 DOMAIN-SET 的不同

RULE-SET 可包含所有类型的子规则，执行效率和在主配置中的规则没有区别，而 DOMAIN-SET 仅可使用 DOMAIN 和 DOMAIN-SUFFIX 两种形式的内容，使用了特别的逻辑进行优化，在内容非常多时性能有极大的提升。（千条以上，否则两者没有太大的区别）

#### 逻辑规则

可通过 AND，OR，NOT 运算对所有规则类型进行组合使用。如

```
AND,((PROCESS-NAME,Google Chrome),(PROTOCOL,UDP)),REJECT
```

可以拦截 Chrome 发出的 UDP 数据包。



### 规则的操作步骤

[打开Surge]->[首页]->[通用]->[出站模式]->[代理规则]->[新增规则集]->[远程链接或者本地文件名]

备注：根据类型选择是新增规则集还是规则

先说一个简单的判断方式，远程的最容易出现问题是Domain类型的list，有些人在选择的时候弄到规则集里面选择了类型为rule-set，实际上是选择增加新规则里面的Domain-set，区别很简单，打开list文件，看下里面的规则是不是都是域名（Domain）的格式就可以简单区分了，而且Domain类型的里面一般都是好几千甚至好几万条，如果错误的放到rule-set类型里面，在更新外部资源的时候会发现更新不动。

#### 6.1 建立本地规则

这里以建立一个当IP是中国的时候，就不经过代理，直连为例

首页选择代理规则，选择新增，增加新规则

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3999.jpeg" alt="IMG_3999" style="zoom:50%;" />

根据IP来判断的属于Geoip规则，故规则类型选择geoip

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4900.png" alt="IMG_4900" style="zoom:50%;" />

geoip规则选择好以后，在底下选择geoip的区域，这里选择中国 CN，

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0559.jpg" alt="IMG_0559" style="zoom:50%;" />

选好区域后，选择默认的规则 DIRECT

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0558.PNG" alt="IMG_0558" style="zoom:50%;" />

点击右上角的完成保存设置。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_13972.png" alt="IMG_13972" style="zoom:50%;" />

#### 6.2 建立远程规则集

这里分别以去广告和建立Netflix的分流为例。

先介绍 blackmatrix7 （俗称爬虫佬）的GitHub库，里面各种规则分流都是很齐全的

https://github.com/blackmatrix7/ios_rule_script

进入后一般各种规则都会有相应的说明，例如搭配什么策略哪几种规则配合，很多新人容易犯的一个错误就是盲目追求规则多分流多，其实根本没必要，根据自己的需要进行添加即可，大部分人可能也就是添加一点去广告的以及对常用的流媒体例如YouTube、Netflix等进行一个区域分流即可，而且去广告规则也不建议添加过多，避免误杀引起各种奇奇怪怪的问题。

以添加去广告为例：先进入上面链接

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3988.png" alt="IMG_3988" style="zoom:50%;" />

选择rule（规则）

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3989.png" alt="IMG_3989" style="zoom:50%;" />

在里面找到Advertise（广告）（一般去广告或者类似的都会以advertise或者类似的进行命名

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3990.png" alt="IMG_3990" style="zoom:50%;" />

可以看到里面有好多种，拉到底下有使用说明

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3991.png" alt="IMG_3991" style="zoom:50%;" />

选择advertising.list，并点击右上角的…出现的菜单选择view raw即可获得真实链接地址（备注：注意在Github获取的规则链接开头必须是`https://raw.githubusercontent.com/.... `

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3992.png" alt="IMG_3992" style="zoom:50%;" />

获取到真实链接地址后在浏览器的地址栏进行全选后复制链接地址

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3993.png" alt="IMG_3993" style="zoom: 50%;" />

打开surge的主页，选择代理规则里面的增加新规则集（这种一个list里面包含了很多条规则的都是属于规则集），选择底下的外部规则集，而因为是去广告的，策略当然是REJECT（拒绝

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3994.png" alt="IMG_3994" style="zoom:50%;" />

这里新手比较容易迷惑的一点就是底下有个说明：Advertising_Domain.list采用Domain-Set，是的就是域名规则，这种添加方式不是增加规则集，而是增加规则，规则类型为Domain-set

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3995.png" alt="IMG_3995" style="zoom:50%;" />

选择好类型和策略后保存即可

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3996.png" alt="IMG_3996" style="zoom:50%;" />



我们要对某个app进行分流的思路就是：找到app的规则，然后给这个规则指定一个策略（策略组）



这里以Netflix为例，先建立个策略组：Netflix，然后包含香港节点和新加坡节点两个区域策略组：将香港节点和新加坡节点这两个策略组从可用的策略**拖动**到包含的策略里面并保存。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3997.png" alt="IMG_3997" style="zoom:50%;" />

看下策略组的效果

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3998.png" alt="IMG_3998" style="zoom:50%;" />



然后去Blackmatrix7的GitHub里面找到Netflix的分流，复制好RAW地址后，在surge里面代理规则-增加规则集-外部规则集，在底下的粘贴上地址后，策略里面选择Netflix并保存，以后就可以在看Netflix时候根据需要选择区域了。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_3999.png" alt="IMG_3999" style="zoom:50%;" />

选择增加新规则集，并在外部规则集里面贴上链接

 [`https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Netflix/Netflix.list`]( https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Netflix/Netflix.list ) 

，策略选择之前建好的Netflix策略组点击完成保存即可。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4001.png" alt="IMG_4001" style="zoom:50%;" />



了解后就可以根据自己的需求给其他的app建立分流了。

再次提醒：不建议弄太多去广告和app的分流。

### 7，模块的使用

Module（模块）是一系列设置的集合，可用于覆盖当前配置的部分设定，有非常多的使用场景：

- 微调不可编辑的配置的设定，如托管配置和企业配置。
- 快捷的在不同工作环境中切换，比如临时开启对所有域名的 MitM 并调整过滤器。
- 使用他人编写的模块以完成某些特定任务，比如，你的同事可以编写一个模块将应用的 API 请求重定向至测试服务器。
- 如果你在多个设备间使用了同一份配置，有可能需要根据设备的使用场景进行微调。模块的开启状态是保存于当前设备的，可以用于在不同设备间的差异性修改。
- 模块不可以调整 [Proxy]、[Proxy Group]、[Rule] 段内容。
- 模块不可以调整 MITM 的 CA 证书。
- 模块的设置覆盖于主配置之上，因此不可以通过 UI 进行调整。

#### 基本概念

模块相当于给当前配置进行 Patch，其优先级高于配置本身的设置。有三种模块：

- 内置模块：Surge 会预置一些模块，随着 Surge 自身更新。
- 本地模块：放置配置文件根目录的 .sgmodule 文件
- 安装的模块：从某个 URL 安装的模块

你可以同时开启多个模块，模块的开启状态保存于当前设备，不会进行同步。切换配置也不影响模块的开启状态。

#### 编写模块

模块的内容和标准配置基本一致，目前支持调整以下段：

- General，Replica

  有三种写法

  - key = value：直接覆盖原始值
  - key = %APPEND% value：在原始值的末尾进行追加（仅适用于适用逗号分隔的字段）
  - key = %INSERT% value：在原始值的开始进行插入（仅适用于适用逗号分隔的字段）

- MITM
  仅支持操作 hostname 字段，同样支持上述三种写法。

- Script，URL Rewrite，Header Rewrite，Host
  新加入的定义将会追加在原始内容的顶部。

- Rule

  - 新配置的规则将被插入在最顶部
  - 规则只可以使用 DIRECT、REJECT、REJECT-TINYGIF 三个策略

同时，模块支持配置 name，desc 和 system 描述，请参照最后的样例。
(system 描述的可取值为 ios 和 mac，用于限制模块的使用范围)

### 模块样例

```
`#!name=MitM All Hostnames`
`#!desc=Perform MitM on all hostnames with port 443, except those to Apple and other common sites which can't be inspected. You still need configure CA certificate and enable the main switch of MitM.`

`[MITM]`
`hostname = -*.apple.com, -*.icloud.com, -*.mzstatic.com, -*.crashlytics.com, -*.facebook.com, -*.instagram.com, *`
```

```
`#!name=Game Console SNAT`
`#!desc=Let Surge handle SNAT conversation properly for PlayStation, Xbox, and Nintendo Switch. Only useful if Surge Mac acts the router for these devices.`
`#!system=mac`

`[General]`
`always-real-ip = %APPEND% *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com`
```


详细说明参照[官网模块的说明]](https://community.nssurge.com/d/225-module)

下面简单的列几个实际应用模块的例子

一种是直接远程引用开袋即食的，以经常有人问到的京东历史价格为例（淘宝历史价格因为App的API接口问题，已经不可用，所以别问了）。

这里以深[巷有喵的库](https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec)为例：一般作者模块的文件夹都是以module命名，点进去后找到想要的模块，这里以京东比价模块为例，找到后点击文件右上角的view raw 会跳转到内容页面

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4105.jpeg" alt="IMG_4105" style="zoom:50%;" />

找到京东比价的模块，并选择view raw获得地址

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4107.png" alt="IMG_4107" style="zoom:50%;" />

view raw可以看到模块的具体内容，建议都看一下内容，尤其是如果模块内含有mitm字段的话，检查是否有加 %APPEND%或者%INSERT% ,不然会覆盖其他的mitm主机导致其他模块或脚本等相关功能失效。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4108.png" alt="IMG_4108" style="zoom:50%;" />

这时可以在浏览器的底部选择网址，全选后复制，切换到surge的首页-模块-选择安装新模块，并将复制的模块地址填入并选择安装保存即可。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4109.jpeg" alt="IMG_4109" style="zoom:50%;" />

粘贴网址（再次提醒，网址是以 https://raw.githubusercontent.com/....开始

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4110.png" alt="IMG_4110" style="zoom:50%;" />

如果网址正确的话会将模块的内容呈现出来让你进行检查并确认是否安装（提示：模块中如果包括mitm字段，主机名都是以红色显示，这是正常的）

而且模块的安装也都会提醒你恶意模块的安全问题，所以建议不要随便安装来历不明的模块。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4111.jpeg" alt="IMG_4111" style="zoom:50%;" />

### 本地模块

对于有些模块来说，还需要根据自己的情况进行修改的，就只能通过本地模块的方式来进行。

这里以显示机场流量面板为例：

找到模块的地址，按照说明要求raw后将模块的内容全部复制到本地模块并命名保存。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4112.jpeg" alt="IMG_4112" style="zoom:50%;" />

全选复制模块内容

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4113.png" alt="IMG_4113" style="zoom:50%;" />

在surge的首页点击模块进入后在本地模块选择新建本地模块，在弹出的窗口中，将复制的全部内容粘贴进去并点击右上角的完成进行保存，这时会弹出对话框，填写模块的名字后进行保存

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4114.jpeg" alt="IMG_4114" style="zoom:50%;" />

然后根据说明将订阅地址encode：

https://www.urlencoder.org

复制encode后的机场订阅地址，打开刚才保存的模块将提示内容进行更改，勾选使用后即可去首页看到效果了。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4115.jpeg" alt="IMG_4115" style="zoom:50%;" />

复制encode后的地址到模块相应位置，并点击右上角完成进行保存：

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4116.jpeg" alt="IMG_4116" style="zoom:50%;" />

可以看到相应效果：

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4117.png" alt="IMG_4117" style="zoom:50%;" />

如果有多个机场，就需要将Panel和script字段复制一份，并按照上面的步骤重复进行，需要注意的是画圈的几个地方要分别对应起来。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4118.jpeg" alt="IMG_4118" style="zoom:50%;" />

画圈的地方要对应起来

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4119-3786329.jpeg" alt="IMG_4119" style="zoom:50%;" />

正确的话可以看到效果：可以同时显示两个机场的流量和订阅情况。

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4120-3786364.png" alt="IMG_4120" style="zoom:50%;" />

**提醒，有些订阅禁止用head访问，试试后面加上&method=get，来进行获取流量信息**。

因为各种模块的功能太多，这里只是简单的列举一些安装使用的方法，但是基本都是这些步骤，实际使用中多多举一反三灵活应用吧。

### Boxjs



[官方文档](https://docs.boxjs.app)

BoxJs 是一款运行在 Surge、Quantumult X、Loon、Shadowrocket、Stash 环境下的脚本！

安装：

```
Surge Module

\# 安装路径: 

  首页 > 模块 > 安装新模块

\# 模块地址: 

  https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.surge.sgmodule
```

在安装上面那个模块后，打开safari浏览器，并输入boxjs.com，即可进入boxjs的页面，再根据页面的内容进行添加订阅并使用

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0561.jpg" alt="IMG_0561" style="zoom:50%;" />

为便于使用，可以在底下选择分享添加到主屏幕

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0562.jpg" alt="IMG_0562" style="zoom:50%;" />

就可以当作一个app来方便使用了

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0563.jpg" alt="IMG_0563" style="zoom:50%;" />

这里只做一个surge的设置方面的提醒：

在surge的首页-底下更多设置里面的http Api页面设置的端口和密码，要跟boxjs的控制端口密码一致

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4396.jpeg" alt="IMG_4396" style="zoom:50%;" />

boxjs的页面：

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4397.jpeg" alt="IMG_4397" style="zoom:50%;" />

http-api页面

<img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_4398.jpeg" alt="IMG_4398" style="zoom:50%;" />

### Sub-Store

 适用于 Loon 、 Surge 和 Quantumult X 的高级订阅管理工具。完全本地解析，无订阅泄露的风险。

[官方教程](https://www.notion.so/Sub-Store-6259586994d34c11a4ced5c406264b46)

安装链接：

```
https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/config/Surge.sgmodule
```

1. 使用 Safari 打开这个 [https://sub.store](https://sub.store/) 如网页正常打开并且未弹出任何错误提示，说明 Sub-Store 已经配置成功。

2. 可以把 Sub-Store 添加到主屏幕，即可获得类似于 APP 的使用体验

3. 因为[vercel.app](https://sub-store.vercel.app/)被墙，所以使用中请将vercel.app通过代理来进行链接。
备注：下面截图有误，类型不能选domain-set，应该选择domain-keyword

   

   <img src="./Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E8%B4%AD%E4%B9%B0%E5%88%B0%E9%80%80%E6%AC%BE.assets/IMG_0564.PNG" alt="IMG_0564" style="zoom:50%;" />

   具体到sub-store使用，在它的官方文档中已经有详细的使用教程，请参阅使用。

### 五，推荐资源：

### Corn定时设置教程
本教程来源于telegram群里面流传的一个pdf文件，原作者未署名我也不知道是谁，反正大家知道不是我写的就行了，在此对原作者表示感谢！

cron定时怎么设置?不愿记就对照着⽐划⽐划
#语法
懒得去学，直接抄作业得了！够⽤就得了嘛！
常⽤定时示例：
1、定点运⾏的⼏种常⽤格式
每天0：00运⾏⼀次
0 0 * * *
每天凌晨1:00运⾏⼀次
0 1 * * *
每天凌晨1:30运⾏⼀次
30 1 * * *
每天下午13:30分运⾏⼀次
30 13 * * *
对照以上，可以凑出想要的定点格式了
2、按⼩时定点频率运⾏的⼏种格式
0 0-23/1 * * *
**每⼩时运⾏1次
**
运⾏时间示例：1:00、2:00、3:00.....直到第⼆天1:00 循环
0 * * * *
和上⾯那个⼀样，每个⼩时运⾏⼀次，
运⾏时间示例：1:00、2:00、3:00.....直到第⼆天1:00 循环
0 0-23/2 * * *
每2个⼩时运⾏⼀次，
运⾏时间示例：2:00、4:00、6:00.....直到第⼆天2:00 循环
0 */2 * * *
每2个⼩时运⾏⼀次，
运⾏时间示例：2:00、4:00、6:00.....直到第⼆天2:00 循环
0 2-4/1 * * *
每天凌晨2点到4点之间，每⼩时运⾏⼀次。
运⾏示例：2:00、3:00、4:00 ，第⼆天的2:00、3:00、4:00，循环
⽐照以上规律，可写出按任意⼩时定点的格式
3、按分钟定点频率运⾏的⼏种格式
*/10 * * * *
每10分钟 运⾏1次 ，
示例22:30、22:40类推
3,15 * * * *
每个⼩时的第3分钟和第15分钟运⾏ ⼀次
**懒得示例了，应该都懂
**
3,15 8-11 * * *
每天早上8-11点间，每⼩时的第3分钟和第15分钟运⾏⼀次



#### 模块：

 点击链接，内附详细教程以及模块链接

DoH : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/DoH

WARP+ : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Panel/WARP

刷新DNS : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Panel/Flush-DNS

节点切换 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Panel/Group-Panel

节点iP信息 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Panel/IP-Check

网络信息 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Panel/Network-Info

流媒体解锁检测 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Panel/Stream-All

流媒体解锁检测Lite : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Panel/Stream-All-Lite

Sub-Store : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/Sub-Store

机场流量信息 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Panel/Sub-info

Surge启动时长 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Panel/Surge-Pro

节假日信息 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Panel/Timecard

TestFlight下载修正/账户管理 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/TestFlight

Safari 谷歌搜索重定向 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/GoogleRewrite

隐藏状态栏VPN图标 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/Hide-VPN-Icon

京东历史价格展示 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/JD_Price

🌐 通用设置增强 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/General

跳过部分国内App的代理检测 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/Skip-Proxy

什么值得买「自动签到+去广告」 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/smzdm

B站净化 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/Bilibili

B站签到 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/Bilibili-Login

微博净化 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/Weibo

知乎净化 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/Zhihu

贴吧净化 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/Tieba

贴吧签到 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/Tieba_Checkin

短信转发 : https://github.com/xream/scripts/tree/main/surge/modules/sms-forward

TikTok解锁 : https://github.com/Semporia/TikTok-Unlock

macOS翻译 : https://github.com/Rabbit-Spec/Surge/tree/Master/Module/Spec/macOS-Translate

去广告模块：https://github.com/blackmatrix7/ios_rule_script/tree/master/rewrite/Surge



### 推荐的GitHub

## 常用仓库


**BlackMatrix7，包含大部分常用分流规则，整合各个仓库脚本以及重写**


[https://github.com/blackmatrix7/ios_rule_script](https://github.com/blackmatrix7/ios_rule_script)



**NobyDa 野比**

[https://github.com/NobyDa/Script
](https://github.com/NobyDa/Script)


**DivineEngine 神机**

[https://github.com/DivineEngine/Profiles/tree/master](https://github.com/DivineEngine/Profiles/tree/master)



## **其他**


GitHub - VirgilClyne/iRingo: 解锁完整的 Apple功能和集成服务

[https://github.com/VirgilClyne/iRingo](https://github.com/VirgilClyne/iRingo)





GitHub - VirgilClyne/GetSomeFries: 个人独立作品或公共组件库

[https://github.com/VirgilClyne/GetSomeFries](https://github.com/VirgilClyne/GetSomeFries)





GitHub - Rabbit-Spec/Surge: Surge自用配置以及模块和脚本

[https://github.com/Rabbit-Spec/Surge](https://github.com/Rabbit-Spec/Surge)





GitHub - mieqq/mieqq

[https://github.com/mieqq/mieqq](https://github.com/mieqq/mieqq)





GitHub - githubdulong/Script: QuantumultX｜Surge｜Loon

[https://github.com/githubdulong/Script](https://github.com/githubdulong/Script)





GitHub - Loyalsoldier/surge-rules: 🦄 🎃 👻 Surge 规则集(DOMAIN-SET 和 RULE-SET)，兼容 Surge for iOS 和 Surge for Mac 客户端。

[https://github.com/Loyalsoldier/surge-rules
](https://github.com/Loyalsoldier/surge-rules)```






GitHub - Hackl0us/GeoIP2-CN: 最小巧、最准确、最全面、最实用的中国大陆 GeoIP2 数据库及 IP 地址段

[https://github.com/Hackl0us/GeoIP2-CN](https://github.com/Hackl0us/GeoIP2-CN)





附上本人的GitHub库：

由本人和Alice共同维护

[https://github.com/getsomecat/GetSomeCats](https://github.com/getsomecat/GetSomeCats)


对于各种破解类型的脚本，因为我本人的态度是如果某些app确实是你需要的而且经常使用的，还是建议入正，所以对于脚本部分不做介绍了，而对于经常问的很多的将圈叉上的东西转到surge上使用可以通过如下模块

[https://raw.githubusercontent.com/chengkongyiban/Surge/main/modules/QX_to_Surge.sgmodule](https://raw.githubusercontent.com/chengkongyiban/Surge/main/modules/QX_to_Surge.sgmodule)

可以直接在surge/火箭里添加模块时在线转化。

使用方法：**在qx重写的链接末尾加上qx**

具体可看这个视频：

[https://t.me/GetsomeCats/111](https://t.me/GetsomeCats/111)

其他的圈叉东西弄到surge上无非也就是一些对应问题，可以去telegram的surge交流群 [https://t.me/loveapps](https://t.me/loveapps)

注意群规：禁止谈论政治，色情，盗版，破解，免流以及淘宝兑换码等话题。



