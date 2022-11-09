# Surge新手从开始使用到退款（一）

个人频道：[https://t.me/GetsomeCats](https://t.me/GetsomeCats)

另外推个关于[warp+（zerotrust）的教程](https://github.com/Zeaphyou/GetSomeCats/blob/8d635114f0f4471ddbb48471b97975a4a9a9c58f/Zero%20Trust%20%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E6%94%BE%E5%BC%83.md))

> 前言：请原谅我用了这个很俗气的标题，其实动念写这个主要的原因是在telegram的surge群里经常遇到一些朋友，进来问的第一个问题就是：surge怎么导入机场订阅啊？次数多了被戏称surge新手灵魂第一问：如何导入订阅？想想自己虽然是从surge刚上架用到现在，但是因为以前几乎没有加telegram群，也很少交流，也是从小白一路走过来的，虽然对于现在surge5还有很多不满意的地方，但是还是可以为它做一点事情帮助一下好不容易来到墙外的朋友们。

> 如果教程中有错漏之处，请大家指正包涵，我也只是一个普通用户非专业人士连代码都不懂。

----

### 首先你需要准备的：

- 本文在写作的时候使用的是iOS16，surge5 TF 5.20 2492版，不排除现在所写的东西在后续的系统或者app更新中会有变动，请自行参照使用。
- 一台iOS15以上系统的手机，已经接入了互联网，除了surge之外最好已经有其它的可供使用的代理app例如loon、Shadowrocket（俗称小火箭）、Quantumult X（俗称Qx、圈叉），因为在对surge设置过程中可能会出现因为配置错误导致无法连接外网的情况，而当时偏偏又需要，至少还有个其它app可用；另外，有这几个app至少说明你对于机场、托管、订阅、规则、重写、脚本、模块等词语有个基本概念。
- ### 一个线路提供商，俗称的机场。至于是自建还是购买的无所谓，但是对于协议这块既然是讲surge，那么就注意Surge目前只支持以下几种协议：

![IMG_3419.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/44d73564-465f-89b5-c175-e6fb8f294a8b/HtXAxTSLyOjx5jdy9eWvHLQ5a8dJ3DMiXx5DXkBlcxAz/IMG_3419.jpeg)

> **这里重点提醒一下，有个别机场只提供SSR协议的线路，Surge是不支持的！千万注意了‼️**

- 已经下载好了surge（需要非中国区Apple ID）并已经付费解锁了相关功能（本文默认至少已经解锁了模块）
- 本文不准备讲述具体如何注册外区的Apple ID以及如何充值购买本app。不过提供几个思路，注册外区Apple ID就不用讲了，随便搜一下很多手把手的教程，现在苹果美国官网据说可以直接购买gift card用银联或者master visa卡付费后发充值代码到邮箱，给Apple ID充值；还有就是日本区支持大陆各银行发行的JCB卡直接绑定付费，最后就是可以用万能的某宝做个土耳其人或者俄罗斯人🌝（此方法存在风险）

# 开始使用

使用前请将脚本、rewrite、MITM这几个开关打开，配置根证书按照如下图生成证书并信任，如果新手那是肯定有H2订阅功能的，能开就打开吧，毕竟花了钱的功能。

![IMG_4303.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/DD06B192-A323-4B2D-A48D-51C5BB5550D5_2/xyofG5N2R2tggMsAKS0NcDhceyybuu5BEHKb7V53lHUz/IMG_4303.png)

![IMG_4304.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/AA866A02-2CD7-418E-844F-1DA56962ECE1_2/trynyeSrOGpWW6xljWET0DFeOoYdFYGHdZ9nxMLTeP0z/IMG_4304.jpeg)

### 托管模式：

很多机场如果支持surge的话会提供一个叫做托管配置的东西，这里以我现在所用的墙洞为例：

顺便做个推介：墙洞在各种评测里面都是属于一线机场，线路速度方面都是很不错的。有想购买的可以通过我的AFF：[https://dlercloud.com/auth/register?affid=126669](https://dlercloud.com/auth/register?affid=126669)

登入后在用户中心可以看到如下

![IMG_3955.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/3bdde160-d9a3-753c-786f-95122b804ca0/L8R6eyV28EaTKYVuJauyvBM8B9zcSBLrV0sfD2SyobEz/IMG_3955.png)

如果没有什么特殊要求，那么就是点击一下导入托管/导入托管（喜爱模式），然后打开surge的首页，从配置然后从URL下载配置，接着就可以使用了。

![IMG_3956.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/858ede03-9613-e1c9-0b9f-a6bb17a22795/Wmg1N4Ked2fY4hecptohyxfsfoAyJ9cWRwYICc22IrMz/IMG_3956.jpeg)

![IMG_3957.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/db8b2254-21b7-9dfe-9fc5-5a4a5d88a6c9/21ssISTqb1a9niXAmnV71obLZQFdhA6UMXxe9ER6qewz/IMG_3957.jpeg)

![IMG_4002.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/254a2b53-00fd-325a-47f5-29652ce68032/bJoipZuHDVpD3Ld3xxn5ZUAXCsWvOy8k4bf9guaNmm8z/IMG_4002.png)

![IMG_4003.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/9813aafb-11dd-a1d5-1e04-293dfb774af8/PyK6Zn5xa5JKBuNzMOlnkQbJBHyUNz14G2G1yfiSfFMz/IMG_4003.png)

如果你没有太多太多要求或者想折腾的想法，那么对于大部分用户，机场托管的配置基本都是够用的。而如果你看到群里有人发的一些花里胡哨的东西，想着折腾一下，那么就是需要开始自己弄配置了。

### 订阅模式：

最新版的surge已经支持把托管的连接当作订阅来使用。所以你也可以不用再去寻找订阅连接。

这里仍然以墙洞为例

![IMG_3959.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/9205b919-b99b-d764-6396-efa7072b62e9/xycs7xJ90mEuvCv99RWzsYud6SYuT2a0zIdqGLTrlt0z/IMG_3959.jpeg)

Provider（订阅）点击复制后就会得到一个链接，这时候可以去surge首页的配置文件选择页面里面选择新建一个空白配置，取名那些就随你自己了，建好空白配置后点击代理服务器，再点击新的策略组，策略组的名字就随意了。拉到下面点选上使用外部代理列表，将你从机场得到的订阅（托管）链接粘贴进去，点击右上角的完成保存，至此你就得到了机场的节点并且学会如何导入订阅了🌝

![IMG_3960.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/75651e4a-39ce-1eb7-6f53-0aaa6da75e72/EDhnfoviLGs0BDLpHfVpB1j7TL2kx1MiAyBgeC5QZzsz/IMG_3960.png)

![IMG_3963.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/d30fb6e5-fa6e-1053-8992-d5f5fca97705/LjSnrNwTkIMnvHEjGHfyhbjXf87epkyekHQIAmRspt0z/IMG_3963.jpeg)

![IMG_3964.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/0c59c95b-93ba-3b2a-4a9c-58479b39a3db/bdxF7vp9DOwYSixxy5VLgPbOG5IySJFqDUjkZjJbAJwz/IMG_3964.png)

![IMG_3974.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/b523e8c1-5cbb-cc67-14da-9c2872a20c82/EdYe8PqZiVxpMrHWcvoDwxNJHpm0Izj4ISnjjwLsBxsz/IMG_3974.png)

### 订阅转换

上面我举例的是以墙洞为例的，作为一线机场，提供了各种App的订阅链接，有些人买的可能没有提供surge的订阅链接，但是也不是没有办法，可以用订阅转换。

这里以墙洞的订阅转换为例：

[https://sub.dler.io](https://sub.dler.io)

然后拿出我那封存的垃圾机场为例：可以看出没有提供 surge 的订阅或者托管，但是一般会提供一个通用订阅，如下图的 v2ray/Trojan 通用订阅，点击复制后去转换网址，然后将复制的通用订阅粘贴进去，客户端那里选择 surge4，讲输出为 node list 勾选上，点击生成订阅链接并复制就可以拿到 surge 里面用了

![IMG_4777.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/881B8808-616A-4A54-B7EB-FFC43527E48A_2/6Riqayf6zDdrP2pirUMKDCoNT823ikpX6iTrYVUhF7Mz/IMG_4777.png)

![IMG_4778.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/BC5BBECE-4A3C-43C4-B024-C9F6C3F58D38_2/CQP74jruN8YvU87gvc43mxuXKJ0VWExlRupKJjMtN6Az/IMG_4778.jpeg)

![IMG_4779.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/FD02C58F-D201-49E7-8DAC-30702EF1447A_2/XqxyWohiL2oKnXk1kjuG23CxN078YWha5SACfWdCK1kz/IMG_4779.jpeg)

![IMG_4780.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/B1E02104-7ACC-45F5-9CC0-37C5CFD97897_2/FxN6nG3nrD6eOuMXRiCJGAyTyJfBEXSre0DjLVvVyNQz/IMG_4780.png)

### 建立规则

如果你这个时候去上一些外网可能发现还是会上不了，为什么？因为你虽然有策略组但是没有规则啊，规则的作用就是让流量走指定的线路，国内的一般直连就好啦，国外一些被屏蔽的就通过机场代理使用。

建立规则的方法：在surge的首页，代理服务器旁边就有一个代理规则，点进去可以看到目前是没有任何规则的，点击新增会有三种：增加新规则、增加新规则集、增加逻辑规则，对于一个新手，我们先学会操作步骤，选择增加新规则

这里我以一个制定GEOIP为中国的就走直连为例：选择规则类型为GEOIP，然后在GEOIP 里面选择CN（中国），并选上不执行DNS解析，策略里面选择DIRECT，保存后就得到了一个规则了。

![IMG_3968.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/f77a33e8-df3e-e9bb-d818-373e6744f835/Us8tcD8uUpRW8JByTO1nC56JIEpuzcT0YXxeWcrs6bAz/IMG_3968.jpeg)

![IMG_3969.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/b34df176-cb89-0de2-e913-9a9add3dbe7f/w3lLbqHSTUy2egfIlmie5n0TZ50v6WgJyqlEuUuKyyAz/IMG_3969.png)

![IMG_3970.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/02af32d0-346c-e755-7b30-08c4536b2b44/hCkkbGWacMzZFKKyfKPxNflg9ZWJqRl0yqgO36HAHsYz/IMG_3970.jpeg)

![IMG_3971.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/710a257a-ff9a-94ca-1fbf-fd3ffcd69082/xdktBgb0s19qAsWocQthB7xD2ZYCnuopMTVfxA2dDagz/IMG_3971.png)

![IMG_3972.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/432bdc6e-1bd3-2ab9-0e93-47b9f1d1fcb3/tZyvGU3xmdI2I2b59MTiPIQ2k2yFhhdL4SMy4e8Of4Az/IMG_3972.png)

其它类型的也是按照类似的方式进行添加和进行。而这时，如果我们在规则页面，将最底下的默认策略（也就是参数final，常说的兜底），更改为机场订阅，那么我们就基本已经可以用使用surge了，这时候的规则就是中国IP的，直接连接，除此之外的，走机场订阅里面选择的节点。

至此你的surge已经是处于基本可用状态了，可以用它上外网或者看YouTube等了。

### 一些进阶操作

我这里只是简单教了一下如何建立策略组并导入订阅以及初步建立一个规则，那么如果想如同群里一些人那样，进行更多的规则而达到去广告、采用不同的地区节点看YouTube、Netflix该如何进行呢？

节点筛选

在教导入订阅的时候，可能有人注意到了底下还有一行过滤器，而里面的备注上写着正则表达式（选填），这里就需要用到正则对节点进行筛选了。还是以墙洞为例，我订阅的机场节点有几十个，全部挤在一个策略组里面，我想按照区域进行分开，常用的香港、台湾、日本、新加坡、美国分开放，操作方法和步骤有两种：一种是直接订阅筛选，另外一种是对策略组筛选。

先说订阅筛选，还是如同刚开始的导入机场订阅一样，新建一个策略组，取名叫做香港节点，然后使用外部代理列表，贴上机场订阅，区别就是在底下的过滤器中输入香港，保存后就可以在策略组页面看到只包含香港的节点的策略组了。

![IMG_3980.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/0d206122-7613-c5b1-f7b8-19c05a0cac70/AlFmgYWr6KAWL2NDMlydgpr1xD98gJacFlP2AQy7fEcz/IMG_3980.jpeg)

![IMG_3978.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/10631ff8-8015-7488-2a8b-2af5e28416b5/epF3CsAy5fOmhjVBd95SHPXTBFXAGvsGm1VVSTMJI1Az/IMG_3978.png)

![IMG_3979.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/952043cd-4656-6937-dbda-ab27c26259d6/kbmIdguRonxWbWcEGYFgc9j4tYnZR2w6buroUdiuORUz/IMG_3979.png)

另外一个办法就是在机场订阅的策略组里面筛选

前面方法类似，新建策略组，命名为新加坡节点，但是这里不使用外部代理列表，而是选择包含另外一个策略组的策略，并选中包含所有节点的机场订阅，并在底下的正则筛选中输入新加坡，就会得到一个只包含新加坡的节点的策略组了。

![IMG_3986.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/06232517-0491-f543-87cb-73de1aaffd4c/gz7IdfjP1qpTnySkplfRSf9Q62FZY35bDb7XCfoD56sz/IMG_3986.jpeg)

![IMG_3982.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/8bea1f48-22f9-cfdb-0e7f-c3da40d50f38/nBSHIPzTCtvKHmCpyK02OJZym6ASWmeeyEDoOGCWWVEz/IMG_3982.png)

![IMG_3984.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/3463d633-4ce1-476f-06d4-e8e6c2f3385f/pM1oGc6ZC9XQYZKpD0y3ubRmzKU8OWctl3rIsFjJTpgz/IMG_3984.png)

![IMG_3985.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/0822ae66-f7e5-d8d8-8663-9f93d8a80cb8/gdMsb7RvjAvUrlG5nGH0YJyfMgv3Zp52Z0BDJgjxa4Mz/IMG_3985.png)

如果明白了这两种操作方法，你在拥有多个机场订阅的时候就可以对他们进行统一的筛选和分组了。方法为：建立机场一策略组，建立机场二策略组，再建立一个策略组所有节点来包含机场一和机场二，然后所有的节点筛选就通过对所有节点策略组来进行。

![IMG_4012.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/38c15f1c-bc8b-a29d-7f21-aa0868b09456/ZBwNmmiq05XktyCSgMcsZauhxEkZiTiHrbYMR9N564Yz/IMG_4012.jpeg)

![IMG_4008.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/0950c384-cd4f-c2ff-ccca-6b41793d5a26/RvQUNM505gGW33JP4P8qaNLsK6uplx3mrmNLGocXmhEz/IMG_4008.png)

![IMG_4010.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/3a15bab8-1417-5407-240e-dd03a398c1e7/NK2ExqB0xpgudIYvyaOOVttU81gmzb9yeFNnk5tkJ8kz/IMG_4010.png)

![IMG_4011.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/794162eb-1fa4-b9e6-3579-e997e386ed6f/LpKPK5LfSD0l7z79iNtFdPndIkPeZmQHwK9RYzKNqUwz/IMG_4011.png)

附上节点筛选规则：

^.*(A|B) = A或者B

(A.*B|B.*A) = 有A有B

^(?!.*A) = 不含A

^(?!.*?B).*A = 有A但不含B

另外种写法：

(A).*(B) 节点名既有 A 也有 B

(A)|(B) 节点名有 A 或者 B

^(?!.*A) 节点名不含有 A

^(?!.*A).*(B) 节点名不含有 A 但含有 B

^(?!.*(A|B)) 节点名既不含有 A 也不含有 B

例如：写一个策略组，不包含港台日新美的：

^((?!(日|台|新|美|港)).)*$

例如：写一个策略组，只包含港台日新美的：

日|台|新|美|港

具体的还是看你的节点命名方式

### 更多的规则

在建立好区域策略组，那么当然就要在规则里面去进行设置使用了，很多人问去哪里找规则，找规则当然是去GitHub，这里推荐两个，一个就是神机规则：

[Profiles/Surge at master · DivineEngine/Profiles](https://github.com/DivineEngine/Profiles/tree/master/Surge)

另外就是blackmatrix7的：

[GitHub - blackmatrix7/ios_rule_script: 分流规则、重写写规则及脚本。](https://github.com/blackmatrix7/ios_rule_script)

这里以blackmatrix7的去广告规则为例

进入后会看到会有相应的一些说明，如果不熟悉的建议仔细阅读，一般规则的说明和搭配以及使用方法都会写的清清楚楚的

![IMG_3988.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/347802e4-ae4d-9a77-c77a-cfdaecc6419f/KS0BtbnxADolmERV3R1yy4NLndDKGsXxxoQgZ9yLmYsz/IMG_3988.png)

![IMG_3989.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/a0febd6f-0fe9-770b-7cd5-31303ae99e26/jvuDrn5JSIZWC0tKeilmyb2LwVg2yoeV2BxKOber6D8z/IMG_3989.png)

![IMG_3990.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/b90619d2-37f5-1a61-5cc4-2c34df499325/nGxCidRiC90imqbzXsLTR5NrPYMFEltyuPD5yL8Ew7sz/IMG_3990.png)

![IMG_3991.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/847031bf-9984-af85-db9f-1366e1ed4d93/kYtTzdSwlhvw7yeasYu7kWHv0aAdijV1JoiVEq0LXM4z/IMG_3991.png)

![IMG_3992.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/6d5434e5-3301-edb0-7c1b-995dad8d4dff/ZaYTDQyhQ5mE40MP4WnfLYXv1dUywIsNxAXnKyneesQz/IMG_3992.png)

![IMG_3993.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/5da1d83e-6d2f-9f22-ccb7-1885c57d3169/7mMbfu2D0r15LoE8SQypoKymv85Zj0dpmYUFZEHSGOgz/IMG_3993.png)

而在通过找到rule- surge- advertising后，通过点击页面…处的RAW即得到链接的地址，复制这个RAW的地址到surge的主页，选择代理规则里面的增加新规则集（这种一个list里面包含了很多条规则的都是属于规则集），选择底下的外部规则集，而因为是去广告的，策略当然是REJECT（拒绝）

![IMG_3994.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/79598c0b-a887-c1e0-c781-5c0cd0453a30/Zdh4wuDDC7CvVxRoK6p1mzuMN9NsAjsd6BrOEYoDsSQz/IMG_3994.png)

这里新手比较容易迷惑的一点就是底下有个说明：Advertising_Domain.list采用Domain-Set，是的就是域名规则，这种添加方式不是增加规则集，而是增加规则，规则类型为Domain-set

![IMG_3995.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/ebbc7234-190e-1ff2-edc9-2710f340167c/gnTJlgl6ZGel2w3jWksoPcmNbklsc9HW81IEzkuMr6Uz/IMG_3995.png)

![IMG_3996.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/327eb541-db22-daa9-2f11-be96f172f0f4/qYHGw5lmApVXbaeE0uOtHlZGjzqYTWxkFhy7GaXEOp0z/IMG_3996.png)

### 给APP进行分流

这里以Netflix为例，先建立个策略组：Netflix，然后包含香港节点和新加坡节点两个区域策略组：将香港节点和新加坡节点这两个策略组从可用的策略**拖动**到包含的策略里面并保存。

![IMG_3997.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/b19bdf92-95d8-4489-86d0-bb4f06e3cb58/c6r5sGzz10cOEx5BSwtrTuCcIJN0LSFNWssumczsyTMz/IMG_3997.png)

![IMG_3998.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/b1809927-d382-1caa-64e3-dbd9f57a3bdd/KUJau2LP6QeDmpPct1rWcxgJycKH7Z9pyztI128rsawz/IMG_3998.png)

然后去Blackmatrix7的GitHub里面找到Netflix的分流，复制好RAW地址后，在surge里面代理规则-增加规则集-外部规则集，在底下的粘贴上地址后，策略里面选择Netflix并保存，以后就可以在看Netflix时候根据需要选择区域了。

![IMG_3999.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/3f2e3b21-df7b-8a5d-50af-a57f34c50eda/VP3DOGHxf921ElCoZH1zEyAz9oyZih48pbxUXA4IIdYz/IMG_3999.png)

![IMG_4001.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/0a4bb09a-bd60-bdbd-f520-eac324065511/XNCyULqImkWZFUnoqNEfzZmbXFSNI2btGyo6vbC5puIz/IMG_4001.png)

依此类推就可以给其它的app建立策略组并进行分流了。然后就可以根据自己的需求和喜好来建立自己的个性配置了。
顺便推荐一个基于surge作者推荐的官方配置进行了小幅修改并自带了我的warp节点的配置：
```
https://raw.githubusercontent.com/Zeaphyou/GetSomeCats/Surge/A%20easy%20Surge%20config.conf
```
将上面链接复制下来到surge的配置文件页面选择从url下载配置粘贴进去结合自己的订阅即可使用。

第一部份的建立策略组导入订阅使用规则就先介绍到这里。

第二部分：[Surge新手从开始使用到退款（二）](https://github.com/Zeaphyou/GetSomeCats/blob/ba52acb5b91f874a0ee50e73c8a963910fcb602c/Surge%E6%96%B0%E6%89%8B%E4%BB%8E%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8%E5%88%B0%E9%80%80%E6%AC%BE%EF%BC%88%E4%BA%8C%EF%BC%89.md)

