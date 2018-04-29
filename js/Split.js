/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-03-23 20:06:48
 * @version $Id$
 */

//分屏显示
var oGcont = document.getElementById('g-cont'),
    oGlnav = document.getElementById('g-l-nav'),
    aGcont = oGcont.children,
    aGlnav = oGlnav.children,
    h = window.innerHeight,//document.documentElement.clientHeight
    len = aGcont.length,//分屏个数
    num = 0,//初始显示分屏
    scrollTime = 0;//存储初识滚动时间
//初始化
oGcont.style.top = -h*num + 'px';
aGlnav[num].className = 'change';
//鼠标滚动
addWheelEvent(document,function(e,d){
    if (new Date() - scrollTime > 500) {
        aGlnav[num].className = '';
        if (d>0) {
            num--;
        }else {
            num++;
        }
        num = Math.min(num,len-1);
        num = Math.max(num,0);
        oGcont.style.top = -h*num + 'px';
        aGlnav[num].className = 'change';
    }
    scrollTime = new Date();
    return false;
})
//点击分屏按钮
click();
function click(){
    for (var i = 0; i < len; i++) {
        ~function(i){
            aGlnav[i].onclick = function(){
                aGlnav[num].className = '';
                num = i;
                oGcont.style.top = -h*num + 'px';
                aGlnav[num].className = 'change';
            }
        }(i)
    }
}
//添加滚轮事件
function addWheelEvent( obj , eFn ){
    document.addEventListener?obj.addEventListener(document.createElement("div").onmousewheel===null?"mousewheel":"DOMMouseScroll",fn,false):obj.attachEvent("onmousewheel",fn);
    function fn(e){
        if ( eFn.call(obj , e = e || window.event , e.wheelDelta/120 || -e.detail/3) === false ){
            e.preventDefault && e.preventDefault();
            return false;
        }
    }
}
