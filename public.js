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
// 转化时间格式yyyy-MM-dd HH:mm:ss为时间戳
function timeParse(stringTime) {
  if (isBrowser().ie) {
    var strTime = stringTime.replace(/\D/, "T");
    var timestamp = Date.parse(new Date(strTime)) - 3600000;
  } else {
    var strTime = stringTime.replace(/\s/, " ");
    var timestamp = Date.parse(new Date(strTime));
  }
  return timestamp;
}
//转化时间戳(返回yyyy-MM-dd格式或者yyyy-MM-dd HH:mm:ss)
function formatTime(time, flag) {
  var now = new Date(time);
  var year = now.getFullYear();
  var month =
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
  var date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  var hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  var minute =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  var second =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  if (flag) {
    return year + "-" + month + "-" + date;
  }
  return (
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
  );
}
