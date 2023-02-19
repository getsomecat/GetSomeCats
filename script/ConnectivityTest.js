const REQUEST_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
  'Accept-Language': 'en',
}

;(async () => {
  let panel_result = {
    title: 'Network Connectivity Test',
    content: '',
    icon: 'wifi.circle',
    'icon-color': '#FF5A9AF9',
  }

  await Promise.all([test_baidu(), test_bilibili(), test_google(), test_youtube(), test_github()])
    .then((result) => {
      let content = result.join('\n')
      panel_result['content'] = content
    })
    .finally(() => {
      $done(panel_result)
    })
})()
/////baidu
async function test_baidu() {
  let inner_check = () => {
    return new Promise((resolve) => {
      let option = {
        url: 'https://www.baidu.com',
        headers: REQUEST_HEADERS,
      }
      baidu_startTime = Date.now()
      $httpClient.post(option, function (error, response, data) {
        baidu_endTime = Date.now()
        resolve('1')
      })
    })
  }

  baidu_test_result =  'Baidu' + '\xa0\xa0\xa0\xa0\xa0\xa0' + ': '
  await inner_check()
    .then((code) => {
      baidu_Delay = baidu_endTime-baidu_startTime + ""
      if (code === '1') {
        baidu_test_result += baidu_Delay + ' ms'
      }
    })
  
  return baidu_test_result
}
///bilibili
async function test_bilibili() {
  let inner_check = () => {
    return new Promise((resolve) => {
      let option = {
        url: 'https://www.bilibili.com',
        headers: REQUEST_HEADERS,
      }
      bilibili_startTime = Date.now()
      $httpClient.post(option, function (error, response, data) {
        bilibili_endTime = Date.now()
        resolve('1')
      })
    })
  }

  bilibili_test_result =  'Bilibili' + '\xa0\xa0\xa0\xa0\xa0\xa0' + ': '
  await inner_check()
    .then((code) => {
      bilibili_Delay = bilibili_endTime-bilibili_startTime + ""
      if (code === '1') {
        bilibili_test_result += bilibili_Delay + ' ms'
      }
    })
  
  return bilibili_test_result
}
////youtube
async function test_youtube() {
  let inner_check = () => {
    return new Promise((resolve) => {
      let option = {
        url: 'https://www.youtube.com',
        headers: REQUEST_HEADERS,
      }
      youtube_startTime = Date.now()
      $httpClient.post(option, function (error, response, data) {
        youtube_endTime = Date.now()
        resolve('1')
      })
    })
  }

  youtube_test_result =  'Youtube' + '\xa0\xa0' + ': '
  await inner_check()
    .then((code) => {
      youtube_Delay = youtube_endTime-youtube_startTime + ""
      if (code === '1') {
        youtube_test_result += youtube_Delay + ' ms'
      }
    })
  
  return youtube_test_result
}

//keygoogle
async function test_google() {
  let inner_check = () => {
    return new Promise((resolve) => {
      let option = {
        url: 'https://www.google.com/generate_204',
        headers: REQUEST_HEADERS,
      }
      google_startTime = Date.now()
      $httpClient.post(option, function (error, response, data) {
        google_endTime = Date.now()
        resolve('1')
      })
    })
  }

  google_test_result =  'Google' + '\xa0\xa0\xa0\xa0' + ': '
  await inner_check()
    .then((code) => {
      google_Delay = google_endTime-google_startTime + ""
      if (code === '1') {
        google_test_result += google_Delay + ' ms'
      }
    })
  
  return google_test_result
}
////Github
async function test_github() {
  let inner_check = () => {
    return new Promise((resolve) => {
      let option = {
        url: 'https://www.github.com',
        headers: REQUEST_HEADERS,
      }
      github_startTime = Date.now()
      $httpClient.post(option, function (error, response, data) {
        github_endTime = Date.now()
        resolve('1')
      })
    })
  }

  github_test_result =  'Github' + '\xa0\xa0\xa0\xa0\xa0' + ': '
  await inner_check()
    .then((code) => {
      github_Delay = github_endTime-github_startTime + ""
      if (code === '1') {
        github_test_result += github_Delay + ' ms'
      }
    })
  
  return github_test_result
}
