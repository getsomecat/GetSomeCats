# Surge新手从开始使用到退款（二）

个人频道：[https://t.me/GetsomeCats](https://t.me/GetsomeCats)

在上一篇[《Surge新手从开始使用到退款（一）》](https://www.craft.do/s/rXHk8AmmqaHJJz) 中初步教了一下如何通过空白配置建立策略组和使用规则，可能会有人说这样也太麻烦了，我就是想伸手即用，那这里准备开始说一下如何使用别人的懒人配置。

以surge大群[https://t.me/loveapps](https://t.me/loveapps)里面的新手配置指导员@深巷有喵 的新手配置为例 他的GitHub地址：[https://github.com/Rabbit-Spec/Surge/tree/Master/Conf](https://github.com/Rabbit-Spec/Surge/tree/Master/Conf)

也可以直接在下方复制（点击左滑）

```plaintext
[General]
# > 日志级别
loglevel = notify
show-error-page-for-reject = true
# > 增强版 Wi-Fi 助理
allow-wifi-access = false
# > All Hybrid 网络并发
all-hybrid = false
# > IPv6 支持（默认关闭）
ipv6 = false
# > 测试超时（秒）
test-timeout = 5
# > Internet 测试 URL
internet-test-url = http://www.baidu.com
# > 代理测速 URL
proxy-test-url = http://1.1.1.1/generate_204
# > GeoIP数据库
geoip-maxmind-url = https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb
# > 排除简单主机名
exclude-simple-hostnames = true
# > DNS 服务器
dns-server = 223.5.5.5, 119.29.29.29
hijack-dns = 8.8.8.8:53, 8.8.4.4:53
# > 从 /etc/hosts 读取 DNS 记录
read-etc-hosts = true
# > 远程控制器
http-api-web-dashboard = false
use-default-policy-if-wifi-not-primary = false
# > 跳过代理
skip-proxy = 127.0.0.1, 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, 100.64.0.0/10, 17.0.0.0/8, localhost, *.local, *.crashlytics.com
# Surge VIF
# tun-excluded-routes = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12
# tun-included-routes = 192.168.1.12/32
# > Always Real IP Hosts
always-real-ip = *.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com*.srv.nintendo.net, *.stun.playstation.net, xbox.*.microsoft.com, *.xboxlive.com, *.battlenet.com.cn, *.battlenet.com, *.blzstatic.cn, *.battle.net

[Replica]
# > 隐藏 Apple 请求
hide-apple-request = false
# > 隐藏崩溃追踪器请求
hide-crash-reporter-request = true
# > 隐藏 UDP 会话
hide-udp = false
# > 关键词过滤器
keyword-filter-type = false

[Proxy Group]
# > 策略组（下面的节点信息需与外部节点对应，若删除了外部节点里的节点，那么在策略组里也要删除。）
节点选择 = select, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点, 手动选择
谷歌服务 = select, 节点选择, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点
苹果服务 = select, DIRECT, 节点选择, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点
电报信息 = select, 节点选择, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点
奈飞视频 = select, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点
迪士尼+ = select, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点
油管视频 = select, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点
哔哩哔哩 = select, DIRECT, 香港节点, 台湾节点
国外媒体 = select, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点
国内媒体 = select, DIRECT, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点
微软服务 = select, DIRECT, 节点选择, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点
游戏平台 = select, DIRECT, 节点选择, 香港节点, 美国节点, 新加坡节点, 日本节点, 台湾节点
# > 外部节点
香港节点 = fallback, update-interval=0, policy-regex-filter=(🇭🇰)|(港)|(Hong)|(HK), no-alert=0, hidden=0, include-all-proxies=0, include-other-group=手动选择
台湾节点 = fallback, update-interval=0, policy-regex-filter=(🇨🇳)|(台)|(Tai)|(TW), no-alert=0, hidden=0, include-all-proxies=0, include-other-group=手动选择
美国节点 = fallback, update-interval=0, policy-regex-filter=(🇺🇸)|(美)|(States)|(US), no-alert=0, hidden=0, include-all-proxies=0, include-other-group=手动选择
日本节点 = fallback, update-interval=0, policy-regex-filter=(🇯🇵)|(日)|(Japan)|(JP), no-alert=0, hidden=0, include-all-proxies=0, include-other-group=手动选择
新加坡节点 = fallback, update-interval=0, policy-regex-filter=(🇸🇬)|(新)|(Singapore)|(SG), no-alert=0, hidden=0, include-all-proxies=0, include-other-group=手动选择
手动选择 = select, policy-path=https://dler.cloud/subscribe/yBUpUds0a95rj17LaiqS?protocols=trojan&provider=surge, update-interval=0, no-alert=0, hidden=0, include-all-proxies=0

[Rule]
# > 本地/局域网地址
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Lan/Lan.list,DIRECT
# > 谷歌服务
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Google/Google.list,谷歌服务
# > 微软服务
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Microsoft/Microsoft.list,微软服务
# > 苹果服务
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Apple/Apple.list,苹果服务
# > 社交平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Telegram/Telegram.list,电报信息
# > 游戏平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Epic/Epic.list,游戏平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Sony/Sony.list,游戏平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Steam/Steam.list,游戏平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Nintendo/Nintendo.list,游戏平台
# > 流媒体
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/YouTube/YouTube.list,油管视频
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Netflix/Netflix.list,奈飞视频
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Disney/Disney.list,迪士尼+
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/BiliBili/BiliBili.list,哔哩哔哩
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/ChinaMedia/ChinaMedia.list,国内媒体
RULE-SET,https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyMedia.list,国外媒体
# > Proxy
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Proxy/Proxy.list,节点选择
DOMAIN-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Proxy/Proxy_Domain.list,节点选择
# > China
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/China/China.list,DIRECT
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Surge/Download/Download.list,DIRECT
# > GeoIP China
GEOIP,CN,DIRECT
# > DNS 查询失败走 Final 规则
FINAL,节点选择
```

按照他的配置的说法，新建一个空白配置，然后将配置里面的全部内容复制进去，然后在文本模式下进行编辑。

在导入了配置后，进入首页-代理服务器，拉到最底下选择手动选择，将底下原本的订阅地址几个字，换成机场的订阅链接并保存即可。

![IMG_4100.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/43D0B5F7-9435-4BCC-A692-55E7CA731144_2/QXWC3m6WfZvPZ2pyx9yPI19IqvY5sxarXR3tLgdYf74z/IMG_4100.jpeg)

![IMG_4104.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/8F8EC4F8-4B17-40F1-B40F-06B489FC7CE0_2/yewX8IBBDT9e3MQjyzMxxPDg5cxJjCgZYBxFd3TS9Z4z/IMG_4104.jpeg)

备注：深巷有喵的原配置里面，对香港节点、新加坡节点、日本节点、美国节点、台湾节点，几个区域策略组都是采用外部代理列表的方式，需要如同上面那样粘贴上机场订阅，但是我觉得对于单机场用户没有必要，所以略微进行了修改，采用了包含其它策略组策略的方式，只需要在手动选择这个策略组粘贴一次机场地址即可。

如果想使用其他人的配置也是采用相同的办法进行，新建空白配置并粘贴，然后在文本模式下编辑机场地址，在深巷有喵的GitHub里面也贴了详细步骤，我这里不再重复了。

模块的使用：

surge的一大特色就是通过模块实现一些特殊功能，在surge 4时代更是通过panel类型的模块来实现一些花里胡哨的应用，而模块有两种，一种是开袋即食的，比较简单：

找到作者的GitHub库（或者别人发的模块链接）这里以深巷有喵的库为例：一般作者模块的文件夹都是以module命名，点进去后找到想要的模块，这里以京东比价模块为例，找到后点击文件右上角的view raw 会跳转到内容页面

![IMG_4105.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/2322908E-1172-4BA0-8CF3-B44F39A16576_2/LJyBF1iqvi56XA8WPzYpYFny1Psjw3yCmAqrMFa8D2gz/IMG_4105.jpeg)

![IMG_4107.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/F8EC0832-FE5D-4365-A59C-408AD535183D_2/Mjg7eDeFaiOxWgzGaHlUe2wMqy3BuIRGqzJlUGfON1Uz/IMG_4107.png)

![IMG_4108.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/6D32E701-3E35-44D6-A89C-D8E870931148_2/vXqrwFInkLZwTuIREimiSqkvSd6U8jQihjgqko196KAz/IMG_4108.png)

这时可以在浏览器的底部选择网址，全选后复制，切换到surge的首页-模块-选择安装新模块，并将复制的模块地址填入并选择安装保存即可。

![IMG_4109.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/8480DDA2-17E9-4FA8-865E-35CF131B513B_2/pIzKST9RZwtc5z8oprACWIMSluR6WTJEgwqGgQ2y4pcz/IMG_4109.jpeg)

![IMG_4110.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/69075903-324A-42A4-8A6B-6D15F2DCCBF8_2/YErjyamnzDyxaKo5F72DPvul5TRPgMeO4aOPqzFqA8gz/IMG_4110.png)

![IMG_4111.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/C5A8679C-0396-4639-A7F3-2E5B96E314BA_2/XQPhOj4RJPeKFUOoOPiryJ2RaOvP8cHUDvsZqHjVMv0z/IMG_4111.jpeg)

出于安全问题，模块地址如果正确都会将里面的内容读取出来并让你审查，有兴趣的人也可以看一下模块的内容，如果不懂的就直接安装吧。另外如果不是很确定，尽量不要去安装来历不明的模块。

对于有些模块来说，还需要根据自己的情况进行修改的，就只能通过本地模块的方式来进行。

这里以显示机场流量面板为例：

找到模块的地址，按照说明要求raw后将模块的内容全部复制到本地模块并命名保存。

![IMG_4112.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/18EE76B8-DB7E-4E5E-A15D-47E605BAD559_2/UbFJKF06FnZCEgh4aP1KunzqySjbl2ljXPn6Wk1kFVIz/IMG_4112.jpeg)

![IMG_4113.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/98538B39-D03E-4F59-9B52-8C59D6A5558B_2/uujN9qOb8bqna6rIgkp5IfSB0NrdKCCY5osN0mAOBA8z/IMG_4113.png)

![IMG_4114.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/AFFEA422-AF7A-4BD9-B4FF-5EBFFEEF0588_2/XAk8MZOa5Tx0iVDGgKJ34edaBUjpZgJh5En4fPI9ssgz/IMG_4114.jpeg)

然后根据说明将订阅地址encode：

[URL Encode and Decode - Online](https://www.urlencoder.org)

![IMG_4115.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/05BD0793-35D7-4EDB-A996-E78FE3350922_2/fttY7m4kTYBjexER8IghpBfL3RnqCC9w4aGTcp6rFlEz/IMG_4115.jpeg)

复制encode后的机场订阅地址，打开刚才保存的模块将提示内容进行更改，勾选使用后即可去首页看到效果了。

![IMG_4116.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/B9F9D92A-887A-4B6C-A46C-2F30D8B7DB33_2/T47jKxGuRBemtdeJwM0ZQfy5l7jF6eJVjLtrJ06dUN4z/IMG_4116.jpeg)

![IMG_4117.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/7299F256-9EB1-47A8-B3BC-3BECD48D169B_2/9hFyDGXrueurkIOVKIchc1ZoSClyKa73wW7xHFJafvQz/IMG_4117.png)

如果有多个机场，就需要将Panel和script字段复制一份，并按照上面的步骤重复进行，需要注意的是画圈的几个地方要分别对应起来。

![IMG_4118.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/4CC3213B-8D4B-4390-8154-2D89B2A962E4_2/CgeNxUQjRdtUG31p6Og8rYETlGT7ULYFnsMu2R8AVHEz/IMG_4118.jpeg)

![IMG_4119.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/4BFD2A40-5400-4301-9789-C1041A4C8DCE_2/itaya3bXqFwsdHPvrMcTnd9lGsEPIpsSfXYtirnPtaEz/IMG_4119.jpeg)

![IMG_4120.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/152B4803-028C-46B2-91EF-3B9DF32C6E97_2/iqnuei7xHGJrk35eaV0igfJqTMMqwvdRz0tjxMWQ9Kcz/IMG_4120.png)

附上常用模块：

B站去广告：[https://raw.githubusercontent.com/app2smile/rules/master/module/bilibili.sgmodule](https://raw.githubusercontent.com/app2smile/rules/master/module/bilibili.sgmodule)

EMBY unlock：[https://raw.githubusercontent.com/SukkaW/Surge/master/Modules/sukka_unlock_emby.sgmodule](https://raw.githubusercontent.com/SukkaW/Surge/master/Modules/sukka_unlock_emby.sgmodule)

P佬的跳过部份应用代理检测：[https://raw.githubusercontent.com/mieqq/mieqq/master/skip-proxy-lists.sgmodule](https://raw.githubusercontent.com/mieqq/mieqq/master/skip-proxy-lists.sgmodule)

Testflight 管理：[https://raw.githubusercontent.com/NobyDa/Script/master/Surge/Module/TestFlightAccount.sgmodule](https://raw.githubusercontent.com/NobyDa/Script/master/Surge/Module/TestFlightAccount.sgmodule)

YouTube去广告：[https://raw.githubusercontent.com/dler-io/Rules/main/Surge/Surge%203/Module/YouTube.sgmodule](https://raw.githubusercontent.com/dler-io/Rules/main/Surge/Surge%203/Module/YouTube.sgmodule)

什么值得买去广告：[https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.sgmodule](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.sgmodule)

喜马拉雅去广告：[https://raw.githubusercontent.com/githubdulong/Script/master/Surge/XiMaLaYa.sgmodule](https://raw.githubusercontent.com/githubdulong/Script/master/Surge/XiMaLaYa.sgmodule)

薯条🍟Siri搜索解锁：[https://raw.githubusercontent.com/VirgilClyne/iRingo/main/sgmodule/Siri.sgmodule](https://raw.githubusercontent.com/VirgilClyne/iRingo/main/sgmodule/Siri.sgmodule)

薯条🍟定位：[https://raw.githubusercontent.com/VirgilClyne/iRingo/main/sgmodule/Location.sgmodule](https://raw.githubusercontent.com/VirgilClyne/iRingo/main/sgmodule/Location.sgmodule)

薯条天气模块已经不能用啦 R.I.P

本来后续想继续写一下boxjs、sub-store的使用，不过说实话这两个东西我基本也不怎么用，所以就暂时不写了。

关于boxjs这里只做一个提醒：在surge的首页-底下更多设置里面的http Api页面设置的端口和密码，要跟boxjs的控制端口密码一致。

![IMG_4396.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/6EE410B1-1AC9-449D-8E3E-581985DBA88D_2/p6dFUEh2n25dTUI6ra8YN2eurnVNcK2b3VnOqdFjN3cz/IMG_4396.jpeg)

![IMG_4397.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/68976EF2-599E-45CE-A395-9BE3820F1DBD_2/2kGBcsnqDAc3MX3mxYUNCtGBPIIdXPD1zxydtCvCOzgz/IMG_4397.jpeg)

![IMG_4398.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/FEE21B09-5D76-49EB-B51F-72BFECF1482D_2/RTqQQfVx5sqTfNAvxiFfiAyC86JiCJwqcosCvxTES58z/IMG_4398.jpeg)

在大家进入telegram的群里，其实可以在群文件里面找到很多以前人家发的模块、配置等有用的东西，也可以自己搜一下聊天记录，一些常见问题都可以找得到答案的

![IMG_4155.jpeg](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/77F69ADC-4428-4ECD-9670-F99DA4FEF0C6_2/gIyfj8ANThSKRgJSr4O3XLbaF6bjbm12HcBe4VQJWioz/IMG_4155.jpeg)

![IMG_4156.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/2D196F5F-B1AC-4681-8868-7C3E0B031B51_2/WSjbfypLjJ61wFzDSbE1hFtkKqDbNEFUIMl90ZX26YQz/IMG_4156.png)

![IMG_4157.png](https://res.craft.do/user/full/2836ab8f-218e-dbc1-14a1-769cf7733ced/77ED28E8-C7A5-4D01-9FDF-BF25E0BD9357_2/hGRITyNPh81RwlC7CtjQyxFYInduyuvujfSrAzEXeBQz/IMG_4157.png)

另外原计划写一下将一些Qx的重写改到surge上使用，不过因为可能涉及到破解问题，而且一般功能性的东西，作者一般都会写surge 模块版的，所以也不写啦。

而且如果看到现在还不知道怎么用surge，那就赶紧去官方反馈邮箱申请退款吧：老刘，听说surge很牛逼，结果花了300多买了发现还要买机场，买了机场发现还要加规则加模块啥啥啥的，都不如小火箭导入订阅就能用，赶紧给我退钱吧！🌝

