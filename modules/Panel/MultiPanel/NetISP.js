let url = "http://ip-api.com/json/?lang=zh-CN"
$httpClient.get(url, function(error, response, data){
let jsonData = JSON.parse(data)
let ip = jsonData.query
let isp = jsonData.isp
.replace(/, Inc./g, "");

let country = jsonData.country;
let city = jsonData.city;
let citys = jsonData.regionName;
//去重
let locationsArray = [country, city, citys];
let uniqueLocationsArray = [...new Set(locationsArray)];
let uniqueLocations = uniqueLocationsArray.join("  ");

  body = {
    title: "NetISP",
		//${emoji}
    content: `${ip}  ${isp} \n${uniqueLocations}`
   // icon: "key.icloud", 'icon-color': "#FF5A9AF9"
  },$done(body);})
