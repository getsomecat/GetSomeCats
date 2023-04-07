let url = "http://chat.openai.com/cdn-cgi/trace"
tf=["T1","XX","AL","DZ","AD","AO","AG","AR","AM","AU","AT","AZ","BS","BD","BB","BE","BZ","BJ","BT","BA","BW","BR","BG","BF","CV","CA","CL","CO","KM","CR","HR","CY","DK","DJ","DM","DO","EC","SV","EE","FJ","FI","FR","GA","GM","GE","DE","GH","GR","GD","GT","GN","GW","GY","HT","HN","HU","IS","IN","ID","IQ","IE","IL","IT","JM","JP","JO","KZ","KE","KI","KW","KG","LV","LB","LS","LR","LI","LT","LU","MG","MW","MY","MV","ML","MT","MH","MR","MU","MX","MC","MN","ME","MA","MZ","MM","NA","NR","NP","NL","NZ","NI","NE","NG","MK","NO","OM","PK","PW","PA","PG","PE","PH","PL","PT","QA","RO","RW","KN","LC","VC","WS","SM","ST","SN","RS","SC","SL","SG","SK","SI","SB","ZA","ES","LK","SR","SE","CH","TH","TG","TO","TT","TN","TR","TV","UG","AE","US","UY","VU","ZM","BO","BN","CG","CZ","VA","FM","MD","PS","KR","TW","TZ","TL","GB"]
tff=["plus","on"]
let gpt;
let warps;
$httpClient.get(url, function(error, response, data){
	let lines = data.split("\n"); 
	let cf = lines.reduce((acc, line) => {
		let [key, value] = line.split("=");
		acc[key] = value;
		return acc;
	},{});
let ip = cf.ip
let warp = cf.warp
let loc = cf.loc
//loc
let l = tf.indexOf(loc)
if (l != -1) {
	gpt = "GPT: 支持"
} else {
	gpt = "GPT: 不支持"
}
//warp
let w = tff.indexOf(warp)
if (w != -1) {
	warps = "增强"
} else {
	warps = "未开启"
}
body = {
title: "ChatGPT",
content: `${gpt}   Loc: ${loc}   Warp: ${warp} ${warps}`
},$done(body);})
