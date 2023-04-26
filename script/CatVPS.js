
/*
 * 本地脚本修改URL信息
 * 脚本作者：@wuhu_zzz 整理者：整点猫咪
 * 使用时需要在panel中设置自己的vps端口和IP地址等
 * 详细使用方法请参照教程：https://surge.ga/09/2549/
 * https://github.com/getsomecat/GetSomeCats/blob/Surge/自己部署一个VPS流量监控Surge面板.md
 */


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
    '3': arg?.fast
}
// 发送请求获取信息
const request = {
    url: URL,
    timeout: 3000
};
$httpClient.get(request, function(error, response, data) {
    if (error) {
        console.log('error: '+error);
        $done({title:'哦吼', content:'完蛋了，连不上，看看是不是端口没打开？'+error});
    } else  {
        const Data = JSON.parse(data);
        const col = Diydecide(0, 30 ,70, parseInt(Data.mem));
//				console.log(typeof parseInt(Data.mem))
                console.log(parseInt(Data.mem))
        console.log(col);
                panel["icon-color"] = shifts.col;
        panel.content = `入站: ${Data.in}\n`
        + `出站: ${Data.out}\n`
        + `所有: ${Data.all}\n`
        + `CPU: ${Data.cpu}\n`
        + `内存: ${Data.mem}`;
        $done(panel);
    }
});

//确定变量所在区间
function Diydecide(x,y,z,item) {
    let array = [x,y,z]
    array.push(item)
    return array.sort((a,b) => a-b).findIndex(i => i === item)
  }
