//说明：
//url为完整的url地址，以http或https开头
export function openUrlInNewWindow (url) {
  if (url === undefined || url === "" || url === null) return;

  if (window.navigator.userAgent.indexOf("gameapp") >= 0) {
    //判断操作系统
    if (window.api.systemType == "android") {
      //安卓下，如果有安装QQ浏览器就用QQ浏览器打开，否则用默认方式打开。
      window.api.appInstalled(
        {
          appBundle: "com.tencent.mtt"
        },
        function (ret) {
          if (ret && ret.installed) {
            location.href = `mttbrowser://url=${url}`;
          } else {
            window.api.openApp(
              {
                androidPkg: "android.intent.action.VIEW",
                mimeType: "text/html",
                uri: url
              },
              function (ret, err) { }
            );
          }
        }
      );
    } else {
      //iOS中的使用方法如下：
      window.api.openApp({
        iosUrl: url
      });
    }
  } else {
    //window.open(url, "_system");
    let a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.target = "_blank";
    a.click();
    document.body.removeChild(a);
  }
}