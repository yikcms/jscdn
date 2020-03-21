//layui
layui.use(['element', 'layer'],
function() {
    var element = layui.element;
    var $ = layui.jquery,
    layer = layui.layer;
    //获取来路
	
	
    var reff = document.referrer;
    if (typeof(reff) !== "undefined") {
        reff = reff.split("/");
    }
    if (typeof(reff[2]) !== "undefined") {
        reff = reff[2].split(".");
    }
    var refflen = reff.length - 2;
    reff = reff[refflen];
    if (typeof(reff) == "undefined" || reff == "com" || reff == "cn") {
        reff = "17kyun";
    }
	
	var u=GetQueryString('url');
	if(u.indexOf(".m3u8") >= 0  || u.indexOf(".mp4") >= 0 || u.indexOf("/share/") >= 0){
		document.getElementById('qhy').innerHTML='<li><i class="layui-icon layui-icon-down"></i>直连资源无备用切换</li>';
		document.getElementById('tab').innerHTML='';
	}
	
	function tjdj(){$.ajax({
        type: "POST",
        dataType: "text",
        url: "",
        timeout: 10000,
        data: {mb:layui.device()['mobile'],jx:this.id,type:'yxjx'}
    });}
	var active = {
        ksbf: function() {
		$.ajax({
        type: "POST",
        dataType: "text",
        url: "",
        timeout: 10000,
        data: {mb:layui.device()['mobile'],jx:getCookie('ccbf'),type:'cwjx'}
    });
		setTimeout(tjdj,120000);
        ksbf(this.id);
        }
		,zegai:function(){
		layer.open({
            type: 1,
            title: '<i class="layui-icon layui-icon-up" style="font-size: 24px;color: green;"></i>如果加载失败在顶部切换线路' //不显示标题栏
            ,
            closeBtn: false,
            area: ['96%', '96%'],
            shade: 0.8,
            time: 3000,
            id: 'LAY_layuipro' //设定一个id，防止重复弹出
            ,
            moveType: 1 //拖拽模式，0或者1
            ,
            content: '<div style="padding: 10px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;" scroll="no"><p style=" text-align:center; line-height: 300%; margin: 0 5 0 5px;"><font color="#00FFFF" style="font-size: 24px">' + reff + '视频解析</font></p><p style="text-align:center;line-height: 300%; margin: 0 5 0 5px;"><font style="font-size: 24px" color="#FFFFFF"><i class="layui-icon layui-icon-loading" style="font-size:24px; color: #FFFFFF;"></i>视频正在努力加载中....</font></p><hr color="#00FF00" width="100%" style="height:0px;margin:20px 0 20px" /><p style="text-align:center;line-height: 300%; margin: 0 5 0 5px;"><font color="#00FFFF" style="font-size: 19px"><u>- 使 用 方 法 -</u></font></p><p style=" text-align:center;margin:10px;"><font color="#CCFF99" style="font-size: 14px">播放失败点击左上角切换，系统自动优选可用源，可用率越高解析越靠前。</font></p><p style=" text-align:center;margin:10px;"><font color="#CCFF99" style="font-size: 14px">本解析仅搜集网络解析源，自身并不存储播放资源！！</font></p></div>'

        });	
		}
    }
	active.zegai();
    //加载线路
    var jxym = '';
    var jxdz = {};
    if(u.indexOf(".m3u8") >= 0){active.zegai();
        document.getElementById("iframe").src='./jiexi/m3u8.html?url='+u;
		document.getElementById("iframe").style.height = document.documentElement.clientHeight - document.getElementById("dh").offsetHeight + "px";

	}else if(u.indexOf(".mp4") >= 0){active.zegai();
        document.getElementById("iframe").src='./jiexi/dplayer.html?url='+u;
		document.getElementById("iframe").style.height = document.documentElement.clientHeight - document.getElementById("dh").offsetHeight + "px";

		
	}
	else if(u.indexOf("/share/") >= 0){active.zegai();
	document.getElementById("iframe").src = u;
	document.getElementById("iframe").style.height = document.documentElement.clientHeight - document.getElementById("dh").offsetHeight + "px";
	}
	else{
	$.ajax({
        type: "POST",
        dataType: "text",
        url: "",
        async: false,
        timeout: 10000,
        data: {
            url: "",
            type: "jxym"
        },
        success: function(data, textStatus) {
            jxym = data;
        }
    });
    data = jxym.split('|\\|');
    var yzy = data[0].split('|||');
    var byy = data[1].split('|||');
    var yzym = document.getElementById('tab1').innerHTML;
    var byym = document.getElementById('tab2').innerHTML;
    document.getElementById('tab1').innerHTML = '';
    document.getElementById('tab2').innerHTML = '';
    for (var i = 0; i < yzy.length; i++) {
        document.getElementById('tab1').innerHTML += yzym.replace(/源加载中/, gethostname(yzy[i])).replace(/class/,'id="'+gethost(yzy[i])+'" class');
        jxdz[gethost(yzy[i])] = yzy[i];
    }
    for (var i = 0; i < byy.length; i++) {
        document.getElementById('tab2').innerHTML += byym.replace(/源加载中/, gethostname(byy[i])).replace(/class/,'id="'+gethost(byy[i])+'" class');
        jxdz[gethost(byy[i])] = byy[i];
    }
	
    function ksbf(str){
		active.zegai();
		var box = false;
        if (box = document.getElementsByClassName("layui-tab-item layui-show")[0]) {
            box.removeAttribute('class');
            box.setAttribute('class', 'layui-tab-item');
        }
        if (box = document.getElementsByClassName("layui-this")[0]) {
            box.removeAttribute('class');
        }
		
		if (box = document.getElementsByClassName("laydj")) {
            for(var i=0;i<box.length;i++){box[i].setAttribute('class','layui-btn layui-btn-sm');}
        }
        document.getElementById(str).setAttribute('class',document.getElementById(str).getAttribute('class')+' laydj');
		SetCookie('ccbf', str);
        document.getElementById("iframe").style.height = document.documentElement.clientHeight - document.getElementById("dh").offsetHeight + "px";
        document.getElementById("iframe").src = jxdz[str].split(',')[0] + u;
		}
		
    $('.layui-btn').on('click',
    function() {
        var othis = $(this),
        method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });
	var ccbf=getCookie('ccbf');
	if(ccbf==null){ccbf=gethost(yzy[0]);}
    ksbf(ccbf);}
});

//以下为函数
function GetQueryString(key) {
    var url = window.location.search;
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var result = url.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null
}
function gethost(str) {
    str = str.split(',');
    str = str[0].split('/')[2];
    return str;
}
function gethostname(str) {
    str = str.split(',');
    if (str[1]) {
        return str[1];
    }
    str = str[0].split('/')[2];
    str = str.split('.');
    return str[str.length - 2];
}
function souqi(obj) {
    if (obj.getAttribute('class') && obj.getAttribute('class').indexOf('this') > -1) {
        setTimeout(function() {
            obj.removeAttribute('class');
            var box = document.getElementsByClassName("layui-tab-item layui-show")[0];
            box.removeAttribute('class');
            box.setAttribute('class', 'layui-tab-item');
        },
        100);
    }
}
function SetCookie(name, value) {
	var exp = new Date();
	exp.setTime(exp.getTime() + 6 * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString();
	return true;
};

function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) return unescape(arr[2]);
	else return null;
}
