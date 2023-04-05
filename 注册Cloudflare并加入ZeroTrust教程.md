# 注册Cloudflare并加入ZeroTrust教程

## 前言

在之前写用Surge、Loon和小火箭上，关于获得ZeroTrust这块，我都是附带的这篇文章：https://blog.moraxyc.com/post/839e7851 ，然后发现因为这个文章写的时间比较早，有些东西Cloudflare改了，但是没有更新，正好最近自己也需要重新注册一个CF帐号，干脆抓图也写一篇~~（GetSomeCats团队人数满了我自己都没得用了）~~

## 首先需要准备的

- 外区Apple ID

- 一个可以用的科学上网方案（临时使用）

  

## 注册Cloudflare帐号并进行设置

1.首先进入Cloudflare的注册帐号网站：https://dash.cloudflare.com/sign-up

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.14.05.png" alt="iShot_2023-03-30_12.14.05" style="zoom:50%;" />

2.按照流程注册一个Cloudflare帐号，并且进入邮箱认证你的邮箱

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_13.03.32.png" alt="iShot_2023-03-30_13.03.32" style="zoom: 33%;" />

请尽量选用outlook、gmail这种国外邮箱

3.登陆Cloudflare帐号，如果是新帐号，会有如下的一些提示：

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.17.52.png" alt="iShot_2023-03-30_12.17.52" style="zoom:50%;" />

4.选择ZeroTrust，并且进入一些设置

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.19.10.png" alt="iShot_2023-03-30_12.19.10" style="zoom:50%;" />

5.进入后要给你的组织取个名字，自己取一个好记住的就行，重复了会有提醒

![iShot_2023-03-30_12.19.48](./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.19.48.png)

6.接下来是选择Plan

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.20.21.png" alt="iShot_2023-03-30_12.20.21" style="zoom:50%;" />

7.选择Plan后要添加付款方式

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.20.54.png" alt="iShot_2023-03-30_12.20.54" style="zoom:50%;" />

8.~~在上面付的那个教程里说添加付款可以取消再进去的方式跳过，我经过多次试验，包括套warp等诸多方式发现是无法跳过的，所以是必须选择一个Plan并且添加付款的~~

已经发现可以跳过付款的步骤，后面大家根据自己情况选择跳过或者不跳过添加付款方式，不添加付款方式就没有Warp Client的相关设置选项了，而且后续如果要改验证方式比较麻烦，就是要再走一遍跳过的过程。

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.23.52.png" alt="iShot_2023-03-30_12.23.52" style="zoom:50%;" />

8.1.1跳过添加付款方式步骤

在上面选择好Plan后，到了添加付款方式页面，将地址栏：https://one.dash/cloudflare.com 后面的全部删掉然后回车

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_17.02.36.png" alt="iShot_2023-03-30_17.02.36" style="zoom:50%;" />



<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_17.03.51.png" alt="iShot_2023-03-30_17.03.51" style="zoom:50%;" />

8.1.2跳转到了首页

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_17.04.31.png" alt="iShot_2023-03-30_17.04.31" style="zoom:50%;" />

8.1.3 这时候点一下左侧的My Team，会发现里面没有东西

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.38.16-0168618.png" alt="iShot_2023-03-30_12.38.16" style="zoom:50%;" />

8.1.4点一下浏览器的后退接着按前进，My Team页面就会出现链接设备的选项了

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_17.07.28.png" alt="iShot_2023-03-30_17.07.28" style="zoom:50%;" />

8.1.5 按照流程走完

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_17.07.59.png" alt="iShot_2023-03-30_17.07.59" style="zoom:50%;" />

![iShot_2023-03-30_17.08.40](./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_17.08.40.png)

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_17.09.22.png" alt="iShot_2023-03-30_17.09.22" style="zoom:50%;" />

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_17.10.33.png" alt="iShot_2023-03-30_17.10.33" style="zoom:50%;" />

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_17.11.13.png" alt="iShot_2023-03-30_17.11.13" style="zoom:50%;" />

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_17.11.58.png" alt="iShot_2023-03-30_17.11.58" style="zoom:50%;" />

这一套流程走完就可以关掉页面了，接下来就是去Cloudflare WARP App里面的操作了。
Tips：如果在1.1.1.1里面按照你设置的团队名字能进行登录而不是提示没有这个团队名，那就是已经成功，至于有些人邮箱没有收到PIN码之类的，有可能是Cloudflare抽风或者发的PIN码被塞到垃圾邮件了。

~~8.2.1.我选择了添加Paypal的方式（我添加信用卡没成功）~~

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.35.45.png" alt="iShot_2023-03-30_12.35.45" style="zoom:50%;" />

~~8.2.2.之前那个教程里面说添加后进入Device里面添加设备，我估计现在是Cloudflare改了，因为进去后Team里面Device下是空白的，而且也提示了要添加认证方式~~

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.38.16.png" alt="iShot_2023-03-30_12.38.16" style="zoom:50%;" />

~~8.2.3.这时候去左边的settings里面选择Warp Client，选择Manage~~

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.39.11.png" alt="iShot_2023-03-30_12.39.11" style="zoom:50%;" />

~~8.2.4.选择Add a rule 添加规则~~

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.40.06.png" alt="iShot_2023-03-30_12.40.06" style="zoom:50%;" />

~~8.2.5.添加设备的验证规则，Rule name（规则名称）：自己随便取一个，建议选择 email ending in~~

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.44.07.png" alt="iShot_2023-03-30_12.44.07" style="zoom:50%;" />

~~这里设置完后点击左边的Save保存即可生效了。~~

9.另外就是也检查一下Settings里面的

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.27.03.png" alt="iShot_2023-03-30_12.27.03" style="zoom:50%;" />

10.点进去后查看一下Login methods 是否是One-time PIN，如果有其他的就删掉其它的，保留这一个，如果没有就添加这个。

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_12.27.39.png" alt="iShot_2023-03-30_12.27.39" style="zoom:50%;" />

至此Cloudflare网站上需要设置的部份结束，接下来的就是去1.1.1.1 APP 进行。

## Cloudflare WARP

### 安装

首先要在App Store登录外区Apple ID，接着访问[安装链接](https://itunes.apple.com/us/app/1-1-1-1-faster-internet/id1423538627)进行安装1.1.1.1 这个App。

在安装好之后，我们打开1.1.1.1 App，默认界面是这样的，这时点一下右上角

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_13.24.19.png" alt="iShot_2023-03-30_13.24.19" style="zoom: 25%;" />

进去设置后选择账户：

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_13.25.52.png" alt="iShot_2023-03-30_13.25.52" style="zoom:25%;" />



选择登陆到ZeroTrust

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_13.27.06.png" alt="iShot_2023-03-30_13.27.06" style="zoom:25%;" />

接下来就是跟着提示走，选择下一步、接受就行，接下来就是到了输入ZeroTrust名称，输入上面自己取的名字

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_13.29.17.png" alt="iShot_2023-03-30_13.29.17" style="zoom:25%;" />

然后再下一步，就是会让你输入邮箱，按照之前设置的规则，输入符合规则的邮箱

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_13.30.59.png" alt="iShot_2023-03-30_13.30.59" style="zoom:25%;" />

在邮箱里查看PIN码并输入

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_13.31.58.png" alt="iShot_2023-03-30_13.31.58" style="zoom: 25%;" />

登陆成功界面变为ZeroTrust

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_13.32.38.png" alt="iShot_2023-03-30_13.32.38" style="zoom:25%;" />

后面要抓配置，先链接一次生成设备ID等信息，你如果不在意全局模式可以直接使用。
一个小提醒：在链接Zerotrust之前，关闭掉其它的代理App，surge loon 小火箭这些，手动关掉。

<img src="./%E6%B3%A8%E5%86%8CCloudflare%E5%B9%B6%E5%8A%A0%E5%85%A5ZeroTrust%E6%95%99%E7%A8%8B.assets/iShot_2023-03-30_13.33.25.png" alt="iShot_2023-03-30_13.33.25" style="zoom:25%;" />