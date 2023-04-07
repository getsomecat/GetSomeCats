let $ = {
H:'https://connectivitycheck.platform.hicloud.com/generate_204',
B:'https://www.baidu.com',
Y:'https://www.youtube.com',
G:'https://www.google.com/generate_204'}  
//GH:'https://www.github.com'}
!(async () => {
await Promise.all([http('H'),http('B'),http('Y'),http('G')]).then((x)=>{
	$done({
    title: 'NetPing',
    content: x.join(' '),
    //icon: 'timer','icon-color': '#FF5A9AF9',
  })})})();
function http(req) {
    return new Promise((r) => {
			let time = Date.now();
        $httpClient.post($[req], (err, resp, data) => {
            r(req +': ' +(Date.now() - time)+'ms');});});}
