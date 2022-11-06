# Zero Trust 从入门到放弃

借着RE大佬发布了Warp+ Panel然后薯条大佬进一步完善后，Surge群里又重新折腾起了将Cloudflare的Warp+及Zero Trust（Team）变成Wireguard配置的热潮。鉴于有部份朋友不会弄，用自己浅显的理解写了一个教程，希望能帮到大家。

🔔写在最前面的提醒：检查一下你的surge订阅情况，要开通MITM H2！！！并且开关已经打开，如图所示，另外，现在折腾的wireguard V6 需要最新的TF版。

再次说明：当时写教程用的TF版，和最新的商店版略微有点差别，但是基本的东西还是没变，所以教程截图就不更新了。有问题可以去我的频道[https://t.me/GetsomeCats](https://t.me/GetsomeCats)
或者surge讨论频道[https://t.me/loveapps](https://t.me/loveapps)

![IMG_3795.png](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/81FBC7BE-52C3-4524-A26C-EEB8BA0D7A76_2/e78bDhSQGyxkSEJCfyTuxA7Hh1w6w0sIzJB32u0bEd0z/IMG_3795.png)

![IMG_3769.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/035CD551-6581-4684-83CF-A83FCF346905_2/eacavfSSMITcRFivBcZnPxqviqv5wSUwYo9iPSUBGxgz/IMG_3769.jpeg)

🔔再提醒：除了一开始要求的打开1.1.1.1 app链接一次并加入team后，就可以断开它的链接，后面只是点开这个app并不需要链接它，后续操作都是在surge运行的情况下进行！

#第一步：去app store下载1.1.1.1 app：

下载地址

[https://apps.apple.com/jp/app/1-1-1-1-faster-internet/id1423538627](https://apps.apple.com/jp/app/1-1-1-1-faster-internet/id1423538627)

#第二步：去apps tore下载wireguard app

[‎WireGuard](https://apps.apple.com/jp/app/wireguard/id1441195209)

#第三步：按照下面链接教程：注册和加入一个team（Zero Trust），并用1.1.1.1 app进行一次链接以生成数据，其后可以关闭并打开surge。

此教程不是我编写的，我是网上找到的，只是觉得写得很详细，所以就附上了。

[Cloudflare WARP](https://www.morax-xyc.com/post/839e7851/)

#第四步：在surge里面安装薯条的warp+ panel 模块

薯条这个模块写着支持Qx指的是这个模块可以在Q X下运行并生成wireguard配置，但是Qx不支持wireguard，所以没有surge就别折腾了。

模块地址：

[https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/sgmodule/Cloudflare.1.1.1.1.sgmodule](https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/sgmodule/Cloudflare.1.1.1.1.sgmodule)

#第五步：surge 安装boxjs，并订阅薯条的boxjs：

[https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/box/Cloudflare.boxjs.json](https://raw.githubusercontent.com/VirgilClyne/Cloudflare/main/box/Cloudflare.boxjs.json)

在薯条的boxjs里面关注cloudflare 1.1.1.1，本次只需要用到这一个。

![IMG_3812.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/039AD17B-5D8A-43C0-B05A-0655AFA8D4D9_2/pUV17wcjAHQIxc5I2JH4lKQTZLhcY4WMI5yPtCnUAjIz/IMG_3812.jpeg)

如果你是surge老用户应该已经知道如何使用配置boxjs了。

🔔注意的一点就是新用户，boxjs我画红线的地方要和surge里面的http api 那里端口 密码一致。

![IMG_3742.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/19C1A227-5AA4-49E4-9857-7243EB5C704A_2/bNmHN7ZmRYd9j7EKSYYX22yZUMxMmKjuWBsfgdpYys4z/IMG_3742.jpeg)

![IMG_3743.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/31F3735C-647E-47C9-B24C-D7800C44D33A_2/uj3Ah8PFAgj20PFxxEm5wciZ5lFzf7lQ2zfaa6VCJxgz/IMG_3743.jpeg)

第六步：打开wireguard app添加隧道-手动创建-生成密钥对，将生成的公钥和私钥都复制出来，保存在备忘录并做好备注公钥、私钥。本次教程中wireguard的唯一作用就是生成一对密钥。

![IMG_3798.png](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/1FFCFA44-10EA-443F-BB36-3CB74B63D91D_2/GfxItVOHbWKExZT43e3EyqqXWW86MJ0GEwm2IZHHuJYz/IMG_3798.png)

![IMG_3799.png](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/A307E2E3-7A84-4231-A186-814B823A084E_2/gxn4Hxs6yFDN3WnxByIDvtSUqWNfWUkrzJxsdif1GEcz/IMG_3799.png)

![IMG_3800.png](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/4BECFA52-0E0E-4485-B211-975ACB3639EF_2/xNZqVcxFkHRYGUYrT1jxwVy0tbniVXLclHkGTy9yTd8z/IMG_3800.png)

#第七步：打开一次1.1.1.1 app ，surge会有一个提示公钥 设备注册ID等等，也可以进入surge的工具-日志拉到下面点开warp team response ，找到里面的设备注册ID，设备令牌数据，可以提前复制出来备用。

🔔提示：设备注册ID 格式为：t.xxxxxxxxxxxxxx要全部复制进去。

很多人最后发现出错很多时候就是私钥 公钥 设备ID没有复制完全。

![IMG_3746.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/84AA217B-34C3-4CAC-A1A5-C00AA4713AFA_2/tpxkwlY2y9dwLXcFuWjbxyUNZu2n7jxLNdUvEWBjHDAz/IMG_3746.jpeg)

![IMG_3747.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/0016E6BC-C8D8-40C4-9453-D05B9C871C32_2/O3sFpC9xVxpGtDJa4MTqtwlLmFEDmvDzXqPWHA7EQE0z/IMG_3747.jpeg)

#第八步：打开boxjs 选择cloudflare 1.1.1.1

![IMG_3768.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/66CBC541-4E6A-4782-9C88-756B84465901_2/pz1yMCjM24qqX93ZQ3cntK9VOrkdJ3maS2Xq5fUZjucz/IMG_3768.jpeg)

![IMG_3813.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/EED32D84-9DCF-47AF-95CD-06A7404AB437_2/k1FPTBgJdPGIMa54ESfF2yEduHxXbAyXVoz8RwlcVpwz/IMG_3813.jpeg)

如上图所示打开总功能开关，选择更换公钥，然后在boxjs里面按照顺序填入之前wireguard app生成并复制出来的公钥 私钥，在surge日志里面找到的设备ID ，并保存即可。现在最新版的在上一步打开1.1.1.1 app的时候也会提示发现team配置，里面也有设备ID等信息，但是方便起见还是第七步的surge日志页面找到warp team response并查看和复制里面的信息比较方便。

#第九步：打开1.1.1.1 app，进入设置 高级 链接选项拉到最底下的重置加密密钥

![IMG_3801.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/7D3698CD-E192-45AB-9AC5-9C5470F9102B_2/90JCXHOyBrrKyLA7CnIip6wg8eymBqs1Mxac0OfnDDEz/IMG_3801.jpeg)

![IMG_3802.png](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/5FD38D14-9BF1-447B-9DBD-C7C15B502E81_2/4mi4lFwhiC98dHh7krgxt2Ru65eTLyH0BH0ecacT9YQz/IMG_3802.png)

![IMG_3803.png](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/5721DD4D-90D7-4E98-93B5-41E442C002EE_2/ZiB9pqXo5UBMxLaquRITs7mA1X7Ekr6KOetO318vj8Mz/IMG_3803.png)

![IMG_3804.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/B88B78CC-7D2B-4F5D-80A3-33C6B2FC4DD1_2/ie12RobNRtsRUUnYeTgkzpYCLlGXoNYaSa5w5vwuxN4z/IMG_3804.jpeg)

![IMG_3805.png](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/25749ED8-A378-4E1B-9E02-872F7549531A_2/mMPJxSZsvxdaI3USijsVO8xdsOnbSTRkKIxrYk8o5agz/IMG_3805.png)

正常情况下这时候surge会有个通知，通知内容一个是提示公钥是否一致，另外一个是生成配置，点击生成配置的通知会自动跳转到系统邮件app，里面就是生成的wireguard配置，按照里面内容，进入surge首页-代理服务器-添加代理-代理类型选择wire guard 填入里面相应字段即可。

![IMG_3815.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/5E15FA79-897A-41A6-B15B-58C4474082A8_2/tixpMFBxxrLeZugn5BBPkT5Zy8q5CVsg8umatpaixTUz/IMG_3815.jpeg)

![IMG_3814.png](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/C9A46998-CC62-4139-B72C-42FD542B9F69_2/s5MB3ylF93b98cVqFiQ2v0mr8G4D679DNKLnRYzlpxwz/IMG_3814.png)

🔔说明一下：有些人按照教程生成的配置可能去ping的时候会不通，这是很正常的，服务器在美国呢，所以需要用代理链去拉warp才会快，目前香港只有HKT线路可以，然后其他地区就是日美新台了。

![IMG_3789.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/3B5B6405-3B14-4A86-A3F9-5EC05F5736C5_2/7QN83gc0VNzAlpw1W8AtmGx5iDQYfr4WAdON5Y06KMQz/IMG_3789.jpeg)

![IMG_4047.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/12C47C1B-7095-4D97-A313-C4450049DCCD_2/zGcyvnsWkxTEBwiftzPKyUGIMWqYpdPwZNrT7xXN0E0z/IMG_4047.jpeg)

另外注意，拉warp的代理链最好是trojan协议的，部份机场的SS好像也可以，Vmess不行，其它的可以自行试验。

备注：有大佬说我这段是误人子弟，解释一下是因为拉warp代理链要通过UDP，但是有些机场的SS 似乎因为某些原因对UDP有限制，而trojan会好一点，请各位根据自己机场情况自行试验。

再说明：如果你按照本教程已经成功的生成了wireguard配置，但是ping的时候是failed，点一下[https://www.cloudflare.com/cdn-cgi/trace](https://www.cloudflare.com/cdn-cgi/trace) 测试，（注意看一下这个测试网址是否走了你的warp策略组）

![IMG_3772.png](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/357FB9B2-BAE7-4345-9ABA-F998C9996B1B_2/GRsmyiU8CnMsSqiFEHpMrzsjwCRossl4zUlx8ERTTyAz/IMG_3772.png)

显示warp=plus，那么就是成功了，还有就是用warp线路去看YouTube，如果能看就成功了，区域如果直连的可能显示为US，用其他地区代理链的会显示相应代理链，那么1.1.1.1 app可以打入冷宫了（卸载），因为你再次打开它会自动重置客户端公钥。

再次提醒：有些人会说最后面板上能显示出团队版 无限流量，但是显示无保护，这是因为脚本读取到了zero trust（team）的信息，但是测试网址没有走warp线路，如下图所示，这时候刷新一下面板然后去工具-最近请求里面看一下如下图所示的这三个测试网址走的是什么策略，把这个策略改成warp线路的，就好了。

![IMG_3806.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/8F901CEE-C93E-4433-A50E-70839C4DB9DA_2/JgzoNnR2m051PHN83z5LQGKxLBYwW3voS28zkVT5KZsz/IMG_3806.jpeg)

![IMG_3783.jpeg](https://res.craft.do/user/full/3d8a8c5e-ccfa-1873-1c87-72e71ce00df1/A8BD134F-8802-4804-A991-6B499652D131_2/49VLYavISKlsNhCA8h1IhJCOcBhwvMFSRHdojoNbPBYz/IMG_3783.jpeg)

🔔补充一点：用薯条面板生成的配置的endpoint是[engage.nanocat.me:2408](engage.nanocat.me:2408)，这个是他的私有DNS服务器，里面包含了所有warp的endpoint可用IP，包括free的，有些IP段在国内是不通的，这也是有些人有时候直连ping不通的原因，当时正好分配到不能用的IP，如果这样时候可以试试把endpoint改为：

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

最后再次感谢各位大佬们凭借着热情写出来的东西，让我们这些小白用户有东西可以折腾！

顺便说一下想买机场的可以走我的aff，强烈推荐一线机场墙洞：[https://dlercloud.com/auth/register?affid=126669](https://dlercloud.com/auth/register?affid=126669)

最后的最后：如果看到最后也按照步骤来了一遍发现还是搞不定，那么可以选择加入我的team：getsomecats，验证方式：gmail。

如果还是搞不定，那么下面这个应该能帮到你：
```
[Proxy]
# 将我的GetSomeCats Team 配置放出来供使用。也可以加入我的Team：Getsomecats，验证方式为：gmail
Warp+GSC = wireguard, section-name=GetSomeCats, test-url=http://cp.cloudflare.com/generate_204

[Proxy Group]
Proxy = select, Warp+GSC, no-alert=0, hidden=0, include-all-proxies=0

[WireGuard GetSomeCats]
private-key = oFl4IF42oioy2rU9Dc2af5vi6X6+zbFDnY/CUckU23g=
self-ip = 172.16.0.2
self-ip-v6 = 2606:4700:110:8f71:49f:13f4:55d6:a577
prefer-ipv6 = true
dns-server = 162.159.36.1, 2606:4700:4700::1111
mtu = 1380
peer = (public-key = bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=, allowed-ips = "0.0.0.0/0, ::0/0", endpoint = 162.159.195.9:2408, keepalive = 45)
```
