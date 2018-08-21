chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = details.url;

    // if (url === 'https://parrotmocker.leanapp.cn/api/testxhr') {
    //   return {
    //     redirectUrl: 'data:application/json;charset=utf-8,' + `{"code":200,"msg":"good xhrxxx","data":{"method":"POST","requestHeaders":{"host":"parrotmocker.leanapp.cn","connection":"close","content-length":"3","x-lc-domain":"parrotmocker","x-forwarded-proto":"https","x-real-ip":"124.64.126.129","x-avoscloud-code-web-hosting":"1","accept":"*/*","origin":"https://chinesedfan.github.io","user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36","content-type":"application/x-www-form-urlencoded; charset=UTF-8","referer":"https://chinesedfan.github.io/parrot-mocker/demo.html","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,ja;q=0.7,zh-TW;q=0.6,cy;q=0.5,es;q=0.4"},"requestData":{"a":"1"}}}`
    //   }
    // }

    if (url === 'https://parrotmocker.leanapp.cn/api/testfetch') {
      return {
        redirectUrl: 'data:application/json; charset=utf-8,' + `{"code":200,"msg":"good fetchxxx"}`
      }
    }

    return {cancel: false}
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
)

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    if (url === 'https://parrotmocker.leanapp.cn/api/testfetch') {
      return {
        requestHeaders: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
)
