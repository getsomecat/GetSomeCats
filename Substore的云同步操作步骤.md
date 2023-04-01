# Substore的云同步操作步骤

## 免责声明：

本文涉及的任何解锁和解密分析脚本仅用于资源共享和学习研究，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。

间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, 本文作者对于由此引起的任何隐私泄漏或其他后果概不负责。

请勿将本文内的任何内容用于商业或非法目的，否则后果自负。

如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我将在收到认证文件后删除相关脚本。

对任何本文中包含的脚本在使用中可能出现的问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害．

您必须在下载后的24小时内从计算机或手机中完全删除以上内容。

任何以任何方式查看此项目的人或直接或间接使用该项目的任何脚本的使用者都应仔细阅读此声明。本文作者保留随时更改或补充此免责声明的权利。一旦使用并复制了任何本文相关脚本或其他内容，则视为您已接受此免责声明。

**本文的部份内容来自于Substore的官方操作文档**：

https://www.notion.so/Sub-Store-6259586994d34c11a4ced5c406264b46

## 介绍

在 [Surge下的Sub-Store初步教程](https://github.com/getsomecat/GetSomeCats/blob/Surge/sub-store初步教程.md)一文中，介绍了一点点Sub-Store初步的用途，本文将对云同步操作进行一点讲解，知识水平有限，其中有错漏之处请谅解

## 操作步骤

1. 申请属于自己的GitHub帐号
2. 申请GitHub的Token以备用

### 申请属于自己的GitHub帐号

申请 GitHub 并不麻烦，拥有简单的英语水平即可，[百度](http://www.baidu.com/) &[ 谷歌](http://www.google.com/) 上有大量的教程，输入关键词为 “申请 GitHub 账号” 点击搜索一下，跟随网路上教程即可完成创建账号，因此此步骤在本教程中就不再累赘了。

### 申请GitHub的Token以备用

1. 打开自己的GitHub库

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_10.45.18.png" alt="iShot_2023-04-01_10.45.18" style="zoom:25%;" />

2. 点击右上角头像

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_10.46.02.png" alt="iShot_2023-04-01_10.46.02" style="zoom:25%;" />

3. 选择 Settings

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_10.46.35.png" alt="iShot_2023-04-01_10.46.35" style="zoom:25%;" />

4. 左侧往下拉并选择 Developer settings

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_10.46.35-0319592.png" alt="iShot_2023-04-01_10.46.35" style="zoom:25%;" />

5. 左侧选择 Personal access tokens

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_10.48.30.png" alt="iShot_2023-04-01_10.48.30" style="zoom:25%;" />

6. 选择Token（classic）并在右上选择Generate new token（classic）

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_11.00.48.png" alt="iShot_2023-04-01_11.00.48" style="zoom:25%;" />

7. note里面取一个自己喜欢的名字，选择合适的有效期，勾上Repo和Gist这两项后，点击底下的Generate token即生成Token了

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_11.05.36.png" alt="iShot_2023-04-01_11.05.36" style="zoom:25%;" />

8. 将生成的Token复制出来并且保存好

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_11.06.55.png" alt="iShot_2023-04-01_11.06.55" style="zoom:25%;" />



## 云同步

### 介绍

现在可以通过 GitHub 同步 Sub-Store 配置了。填入 GitHub 的 Token，点击上传即可创建备份，其他设备填入相同 Token，下载即可。

### 操作步骤

1. Sub-Store上传备份
2. 其他设备下载备份



### Substore配置

1. 在Substore的我的页面GitHub配置点编辑

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_12.10.58.png" alt="iShot_2023-04-01_12.10.58" style="zoom:25%;" />

2. 根据提示输入GitHub帐号名和上面申请的Token并保存

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_12.12.58.png" alt="iShot_2023-04-01_12.12.58" style="zoom:25%;" />

3. 保存好后即可点击上传

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_12.14.01.png" alt="iShot_2023-04-01_12.14.01" style="zoom:25%;" />

4. 去同步页面添加同步订阅

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_12.28.03.png" alt="iShot_2023-04-01_12.28.03" style="zoom:25%;" />

5. 根据提示填好相关信息

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_12.30.02.png" alt="iShot_2023-04-01_12.30.02" style="zoom:25%;" />

6. 向左滑动出现相关选项

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_12.32.07.png" alt="iShot_2023-04-01_12.32.07" style="zoom: 25%;" />

7. 要先同步，然后再复制

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_12.34.29.png" alt="iShot_2023-04-01_12.34.29" style="zoom:25%;" />

8. 复制订阅即可粘贴到其他平台进行使用

   <img src="./Substore%E7%9A%84%E4%BA%91%E5%90%8C%E6%AD%A5%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.assets/iShot_2023-04-01_13.22.16-2.jpg" alt="iShot_2023-04-01_13.22.16-2" style="zoom:25%;" />



