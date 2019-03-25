//搜索框点击的时候值清空
$(function () {
    $('#keyWord').focus(function () {
        $('#keyWord').attr('value', '');
    })
    $('#keyWord').blur(function () {
        $('#keyWord').attr('value', '请输入汇仁肾宝片或hrsbp');
    })
//二级菜单的显示
    $('#item1 .title').hover(function(){
        $('#item1 .title').addClass('title-active');
        $('#item1 .fast-show').css('display','block');
        $('#item1').siblings().find('.fast-show').hide();
    },function(){
        $('#item1 .title').removeClass('title-active');
    })

    $('#item2 .title').hover(function(){
        $('#item2').siblings().find('.fast-show').hide();
        $('#item2 .title').addClass('title-active');
        $('#item2 .fast-show').css('display','block');
    },function(){
        $('#item2 .title').removeClass('title-active');
    })

    $('#item3 .title').hover(function(){
        $('#item3').siblings().find('.fast-show').hide();
        $('#item3 .title').addClass('title-active');
        $('#item3 .fast-show').css('display','block');
    },function(){
        $('#item3 .title').removeClass('title-active');
    })

    $('#item4 .title').hover(function(){
        $('#item4').siblings().find('.fast-show').hide();
        $('#item4 .title').addClass('title-active');
        $('#item4 .fast-show').css('display','block');
    },function(){
        $('#item4 .title').removeClass('title-active');
    })

    $('#item5 .title').hover(function(){
        $('#item5').siblings().find('.fast-show').hide();
        $('#item5 .title').addClass('title-active');
        $('#item5 .fast-show').css('display','block');
    },function(){
        $('#item5 .title').removeClass('title-active');
    })

    $('#item6 .title').hover(function(){
        $('#item6').siblings().find('.fast-show').hide();
        $('#item6 .title').addClass('title-active');
        $('#item6 .fast-show').css('display','block');
    },function(){
        $('#item6 .title').removeClass('title-active');
    })

    $('#item7 .title').hover(function(){
        $('#item7').siblings().find('.fast-show').hide();
        $('#item7 .title').addClass('title-active');
        $('#item7 .fast-show').css('display','block');
    },function(){
        $('#item7 .title').removeClass('title-active'); 
    })

        // 回到顶部
        //scroll() 方法为滚动事件  
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".totop").css('display','block');
            } else {
                $(".totop").css('display','none');
            }
        });
        $(".totop").click(function () {

            $('body,html').animate({
                scrollTop: 0
            }, 100);
            return false;
        });
    



    


















})


