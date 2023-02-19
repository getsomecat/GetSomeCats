//由本群重庆佬提供，key和小白脸大佬修改完善。
let $ = {
bilibili:'https://www.bilibili.com',
baidu:'https://www.baidu.com',
youtube:'https://www.youtube.com/',
google:'https://www.google.com/generate_204',
github:'https://www.github.com'
}

!(async () => {
await Promise.all([http($.baidu),http($.bilibili),http($. github),http($. google),http($.youtube)]).then((x)=>{
	$done({
    title: 'Network Connectivity Test',
    content: x.join('\n'),
    icon: 'timer',
    'icon-color': '#FF5A9AF9',
  })
})
})();

function http(req) {
    return new Promise((r) => {
			let time = Date.now();
        $httpClient.post(req, (err, resp, data) => {
            r(req.split(".")[1]+
						'\xa0\xa0\xa0\xa0\xa0\t: ' +
						(Date.now() - time)+' ms');
        });
    });
}