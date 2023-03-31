//由本群重庆佬提供，key和小白脸大佬修改完善。
//薯条🍟大佬进行完善，这样不会有一个测试失败导致其余都失败

let $ = {
Bilibili:'https://www.bilibili.com',
Baidu:'https://www.baidu.com',
Youtube:'https://www.youtube.com/',
Google:'https://www.google.com/generate_204',
Github:'https://www.github.com'
}

!(async () => {
await  Promise.allSettled([http('Baidu'),http('Bilibili'),http('Github'),http('Google'),http('Youtube')]).then(results => {
 $done({
    title: 'Network Connectivity Test',
    content: results.map(result => result.value).join('\n'),
    icon: 'timer',
    'icon-color': '#FF5A9AF9',
  })
});

function http(req) {
    return new Promise((r) => {
			let time = Date.now();
        $httpClient.post($[req], (err, resp, data) => {
            r(req +
						'\xa0\xa0\xa0\t: ' +
						(Date.now() - time)+' ms');
        });
    });
}
