//banner

$(function(){
    var oHeader = $('#header'),
        oHBox = oHeader.find('.h-box'),
        aTab = oHBox.find('.h-ban .h-tab .tab'),
        length = aTab.length,
        num = 0,
        clickTimer = 0,
        timer;//时间管理器
    //初始化样式
    aTab.eq(num).addClass('active');

    //按钮点击事件
    aTab.click(function(){
        if (new Date() - clickTimer > 500) {
            oHBox.toggleClass('active');
            $(this).addClass('active').siblings().removeClass('active');
            clickTimer = new Date;
        }
    });
    //自动路边
    function autoPlay(){
        num++;
        num%=length;
        oHBox.toggleClass('active');
        aTab.eq(num).addClass('active').siblings().removeClass('active');
    }
    oHeader.hover(function(){
        clearInterval(timer);
    }, function(){
        timer = setInterval(autoPlay,2500) ;
    }).trigger('mouseleave');
});

//金牌讲师 Gold medal lecturer
$(function(){
    var oTwrap = $('.t-wrap'),
        aTbox = $('.t-box'),
        oUl = $('.t-box ul'),//获取移动Ul
        aLi = $('.t-box li'),//获取所有移动li
        aBtn = $('.btn .b-btn'),//获取点击按钮
        width = $('.t-box li').outerWidth(true),//获取每次移动li宽度
        length = aLi.length,
        clickTimer = 0,//存储上一次点击时间
        timer;//时间管理器
    //初始化盒子宽,高
    oUl.css({width:aLi.length*width});
    aTbox.css({height:aLi.height()});
    //点击按钮
    aBtn.click(function(){
        if (new Date() - clickTimer > 500) {
            if ($(this).index()) {
                same(-width);
            }else {
                oUl.stop().animate({
                    'marginLeft' : width+'px'
                },300,function(){
                    $(this).css('marginLeft', '0px').prepend($(this).children().last());
                })
            };
            clickTimer = new Date;
        }
    })
    //公式提取
    function same(symbol){
        oUl.stop().animate({
            'marginLeft' : symbol+'px'
        },300,function(){
            $(this).css('marginLeft', '0px').append($(this).children().first());
        })
    }
    //自动路边
    function autoPlay(){
        same(-width);
    }
    oTwrap.hover(function(){
        clearInterval(timer);
    }, function(){
        timer = setInterval(autoPlay,2000) ;
    }).trigger('mouseleave');
})
