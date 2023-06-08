//转自https://raw.githubusercontent.com/RS0485/network-rules/main/scripts/gas-price.js
//兼容surge loon
//由 @keywos 修改
//需要本地模块
/*
[Panel]
YJ = script-name=YJ,update-interval=43200
[Script]
YJ = type=generic,timeout=5,script-path=https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/script/youjia.js,argument=guangdong
*/

var region = 'shanxi-3/xian'

if (typeof $argument !== 'undefined' && $argument !== '') {
    region = $argument
}

try{
//持久化适合远程引用不添加本地模块
//工具>脚本编辑器>左下角齿轮图标>$persistentStore
const region_pref = $persistentStore.read("yj");
	if (typeof region_pref !== 'undefined' && region_pref !== null) { //Surge Loon写法
		console.log("2")
    region = region_pref
}}catch(i){}

const query_addr = `http://m.qiyoujiage.com/${region}.shtml`

$httpClient.get(
    {
        url: query_addr,
        headers: {
            'referer': 'http://m.qiyoujiage.com/',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
        },
    }, (error, response, data) => {
        if (error) {
            console.log(`解析油价信息失败, 请反馈至 @RS0485: URL=${query_addr}`)
            done({});
        }
        else {
            const reg_price = /<dl>[\s\S]+?<dt>(.*油)<\/dt>[\s\S]+?<dd>(.*)\(元\)<\/dd>/gm

            var prices = []
            var m = null;

            while ((m = reg_price.exec(data)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === reg_price.lastIndex) {
                    reg_price.lastIndex++;
                }

                prices.push({
                    name: m[1],
                    value: `${m[2]} 元/L`
                })
            }

            // 解析油价调整趋势
            var adjust_date = ''
            var adjust_trend = ''
            var adjust_value = ''

            const reg_adjust_tips = /<div class="tishi"> <span>(.*)<\/span><br\/>([\s\S]+?)<br\/>/
            const adjust_tips_match = data.match(reg_adjust_tips)

            if (adjust_tips_match && adjust_tips_match.length === 3) {
                adjust_date = adjust_tips_match[1].split('价')[1].slice(0, -2)

                adjust_value = adjust_tips_match[2]
                adjust_trend = (adjust_value.indexOf('下调') > -1 || adjust_value.indexOf('下跌') > -1) ? '↓' : '↑'

                const adjust_value_re = /([\d\.]+)元\/升-([\d\.]+)元\/升/
                const adjust_value_re2 = /[\d\.]+元\/吨/
                const adjust_value_match = adjust_value.match(adjust_value_re)

                if (adjust_value_match && adjust_value_match.length === 3) {
                    adjust_value = `${adjust_value_match[1]}-${adjust_value_match[2]}元/L`
                }
                else {
                    const adjust_value_match2 = adjust_value.match(adjust_value_re2)

                    if (adjust_value_match2) {
                        adjust_value = adjust_value_match2[0]
                    }
                }
            }

            const friendly_tips = `${adjust_date} ${adjust_trend} ${adjust_value}`

            if (prices.length !== 4) {
                console.log(`解析油价信息失败, 数量=${prices.length}, 请反馈至 @RS0485: URL=${query_addr}`)
                done({})
            }
            else {
                body = {
                    title: "实时油价信息",
                    content: `${prices[0].name}  ${prices[0].value}\n${prices[1].name}  ${prices[1].value}\n${prices[2].name}  ${prices[2].value}\n${prices[3].name}  ${prices[3].value}\n${friendly_tips}`,
                    icon: "fuelpump.fill"
                }

                $done(body);
            }
        }
    });