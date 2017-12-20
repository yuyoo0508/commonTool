// 判断浏览器
function isBrowser() {
  var Sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (Sys.ie = s[1])
    : (s = ua.match(/msie ([\d.]+)/))
      ? (Sys.ie = s[1])
      : (s = ua.match(/firefox\/([\d.]+)/))
        ? (Sys.firefox = s[1])
        : (s = ua.match(/chrome\/([\d.]+)/))
          ? (Sys.chrome = s[1])
          : (s = ua.match(/opera.([\d.]+)/))
            ? (Sys.opera = s[1])
            : (s = ua.match(/version\/([\d.]+).*safari/))
              ? (Sys.safari = s[1])
              : 0;

  return Sys;
}
// 传参(获取url)
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return r[2];
  return "";
}
/*
*解析对象成查询字符串
* 传入对象data
* */
function qs(data) {
  var str = "";
  for (var k in data) {
    str += k + "=" + data[k] + "&";
  }
  return str.slice(0, -1);
}
