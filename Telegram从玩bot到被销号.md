# Telegram从玩bot到被销号
本文主要介绍从注册Telegram（下面简称tg）API到在自己的VPS上建立Pagermaid-Pyro Bot来实现一些有趣的功能。
## 一，注册Telegram的API
在进行安装bot之前，首先需要到Telegram的官方API网站：[https://my.telegram.org/auth](https://my.telegram.org/auth) 按照页面提示，输入自己telegram
绑定的手机号码，记得号码要加上国家区号，例如中国号码+86，美国+1
![iShot_2023-02-04_21.09.31](media/16755200305766/iShot_2023-02-04_21.09.31.png)
输入正确的手机号码之后，点击NEXT，这时候已经登陆的telegram
会收到发来的信息，如下图所示，login code后面那单独的一小行即为登陆验证码。
![IMG_0731](media/16755200305766/IMG_0731.png)
将验证码输入到Confirmation code，点击Sign in即可登陆。
![iShot_2023-02-04_21.15.53](media/16755200305766/iShot_2023-02-04_21.15.53.png)
正确的登陆进去之后会有几个选项，这里选择API development tools，**不要选Delete account哦，这是删除你帐号的**。
![iShot_2023-02-04_21.16.52](media/16755200305766/iShot_2023-02-04_21.16.52.png)
选择API 开发工具后，进入如下的页面，你们可以按照我这个例子来填写即可，我没填的地方都是可以空着的。填写好后，点击底下的Creat application
![iShot_2023-02-04_21.18.15](media/16755200305766/iShot_2023-02-04_21.18.15.png)
如果没什么问题的话就会生成api了，而本次也只需要用到App api_id和App api_hash这两项，其余的都不用管它。将这两项里面的内容分别复制出来留着后面备用。
![iShot_2023-02-04_21.24.02](media/16755200305766/iShot_2023-02-04_21.24.02.png)
这里说一点小Tips：
1，可能有人在登陆第一步的时候会收不到验证码，因为tg发验证码是随机往绑定的手机上发sms或者往tg里面发信息，如果没收到可以等几个小时再试试；
2，如果你所用的是机场的线路，可能IP不太干净，这时候可能会一直收不到验证码，包括后面创建api也会提示出错，这里比较建议使用warp通过代理链的方式来进行。
不知道什么是warp？来看看这篇教程：[Zero Trust 从入门到放弃](https://github.com/getsomecat/GetSomeCats/blob/Surge/Zero%20Trust%20从入门到放弃.md)
## 二，在VPS上搭建pagermaid-pyro bot

