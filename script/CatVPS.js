/*
注⚠️：脚本的运行需提前在VPS上完成相关操作
见教程：https://surge.ga/09/2549/
脚本作者 @wuhu_zzz 由整点猫咪进行整理
参数介绍：
url：你的VPS设置的链接
title：Panel的标题
icon：Panel的图标
low、mid、high分别对应内存不同占比时图标的颜色
ddl：到期时间
total：总共流量

实例：
argument = url=http://guaiguaiqiqi.com&title=花里胡哨才是生产力&icon=bolt.horizontal.icloud.fill&low=#06D6A0&mid=#FFD166&high=#EF476F&ddl=2012.12.12&total=300GB

*/

// 本地脚本修改URL信息
let your_url = " ";
let arg;
if (typeof $argument != 'undefined') {
    arg = Object.fromEntries($argument.split('&').map(item => item.split('=')));
};
// 检查配置
const URL = arg?.url || your_url;
if (!URL) $notification.post('配置错误❌', 'URL有误或无');
// 面板
let panel = {};
panel.title = arg?.title || 'VPSCAT';
panel.icon = arg?.icon;
let shifts = {
    '1': arg?.low,
    '2': arg?.mid,
    '3': arg?.high
};
// 时间
let time = new Date();
const t = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
console.log(t)
// 发送请求获取信息
const request = {
    url: URL,
    timeout: 3000
};
$httpClient.get(request, function(error, response, data) {
    if (error) {
        console.log('error: '+error);
        $done({title:'啊呃～', content:'完蛋了，出错了！看看是不是端口没打开？'+error});
    } else  {
        const Data = JSON.parse(data);
        const col = Diydecide(0, 10 ,25, parseInt(Data.mem));
        console.log(Data);
    panel["icon-color"] = shifts[col];
    panel.content = `统计时间：${Data.last_exec_time}\n` +
                 `入站: ${Data.in}` + '    |    ' + `出站: ${Data.out}\n` +
                 `用量: ${Data.all}` + '     |    ' + `总共: ${arg?.total}\n` +
                 `CPU: ${Data.cpu}` + '           |    ' + `内存: ${Data.mem}\n` +
                 `服务到期时间：${arg?.ddl}`;
        $done(panel);
    }
});

//确定变量所在区间
function Diydecide(x,y,z,item) {
    let array = [x,y,z]
    array.push(item)
    return array.sort((a,b) => a-b).findIndex(i => i === item)
  }
