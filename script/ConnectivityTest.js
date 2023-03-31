//由本群重庆佬提供，key和小白脸大佬修改完善。修改了一下
//由整点薯条大佬优化
let $ = {
Bilibili:'https://www.bilibili.com',
Baidu:'https://www.baidu.com',
Youtube:'https://www.youtube.com/',
Google:'https://www.google.com/generate_204',
Github:'https://www.github.com'
}

!(async () => {
  let results = await Promise.allSettled([http('Baidu'), http('Bilibili'), http('Github'), http('Google'), http('Youtube')])
    .then(results => results.map(result => result.value));

  $done({
    title: 'Network Connectivity Test',
    content: results.join('\n'),
    icon: 'timer',
    'icon-color': '#FF5A9AF9',
  })
})();

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
