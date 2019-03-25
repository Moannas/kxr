//搜索框的的值清空
$(function () {
    $('#keyWord').focus(function () {
        $('#keyWord').attr('value', '');
    })
    $('#keyWord').blur(function () {
        $('#keyWord').attr('value', '请输入汇仁肾宝片或hrsbp');
    })

    //轮播图封装
    // yuan代表图片jiao代表焦点，yiru代表图片外面的盒子
    function lunbotu(yuan, jiao, yiru) {
        var num = 0;
        var timer = setInterval(function () {
            autoplay('next')
        }, 3000); //定时器
        function autoplay(str) { //判断
            if (str == 'next') {
                num++;
                num = num >= $(yuan).size() ? 0 : num;
                $(jiao).eq(num).css('background', '#d91519').siblings().css('background', '#ccc');

            } else {
                num--;
                num = num <= 0 ? $(yuan).size() : num;
            }
            animate(num);

        }
        $(jiao).on('click', function () {
            $(this).css('background', '#d91519').siblings().css('background', '#ccc');
            num = $(this).index();
            animate(num);
        });
        //改变透明度达到轮播效果
        function animate(index) {
            $(yuan).eq(index).animate({
                'opacity': 1,
                'zIndex': 1
            }, 300).siblings().animate({
                'opacity': 0,
                'zIndex': 0
            }, 300);
        }
        //鼠标移入移入时停止
        $(yiru).hover(function () {
            clearInterval(timer)
        }, function () {
            timer = setInterval(function () {
                autoplay('next')
            }, 2000)
        });
    }
    lunbotu('.imglist li', '.light span', '.imglist'); //第一个轮播图
    lunbotu('.imgra li', '.lights span', '.imgra'); //第二个轮播图


    //main里面的选项卡功能-选项卡封装
    //a代表按钮
    function tab(a, b) {

        $(a).hover(function () {

            //内容跟着出来
            $(b).eq($(this).index())
                .css('display', 'block')
                .siblings()
                .css('display', 'none');
        });
    }
    tab('.mr-tabbox li', '.con');
    tab('.tabb li', ' .cot');

    //返回顶部
    $("#go_top").hide();

    $(function () {
        //检测屏幕高度  
        var height = $(window).height();
        //scroll() 方法为滚动事件  
        $(window).scroll(function () {
            if ($(window).scrollTop() > height) {
                $(".totop").fadeIn(300);
            } else {
                $(".totop").fadeOut(300);
            }
        });
        $(".totop").click(function () {

            $('body,html').animate({
                scrollTop: 0
            }, 100);
            return false;
        });
    });

    //数据渲染
    $.ajax({
        type:'post',
        url:'api/shouye.php',
        data:'',
        success:function(str){

         var arr = JSON.parse(str);
        //  console.log(arr);
         var res = arr.map(function(item){
             return ` 
                 <li data-id="${item.id}">
                     <img class="list-pic" src="${item.img}" alt="">
                     <a class="products" href="">${item.products}</a>
                     <p class="info">${item.info}</p>
                     <p class="price"><em>￥</em><span>${item.price}</span></p>
                 </li>
                 `
         }).join('');
         $('.floor1 .productlist').html(res);
        }
    });
//首页第二个数据渲染
    $.ajax({
        type:'post',
        url:'api/shouye2.php',
        data:'',
        success:function(str){
            console.log(str)

         var arr = JSON.parse(str);
        //  console.log(arr);
         var res = arr.map(function(item){
             return ` 
               <li data-id="${item.id}">
                <img class="list-pic" src="${item.img}" alt="">
                <a class="products" href="">${item.products}</a>
                <p class="info">${item.info}</p>
                <p class="price"><em>￥</em><span>${item.price}</span></p>
               </li>
             `
         }).join('');
         $('.floor2 .productlist').html(res);
        }
    });
//吸顶菜单

$(window).scroll(function(){
    var top =  $(window).scrollTop();
    if(top > 100){
        $('#header').attr('class','now');
    }
    if(top == 0){
        $('header').attr('class','');
    }
  });   

  //把登录页传到cookie的用户名渲染到首页
  $('.dlname').html('你好' + ' ' + cookie.get('name') + ' ' + '欢迎加入开心人！');
 //倒计时
 getTime();
 setInterval(getTime, 1000);


 function getTime() {
     var date = new Date();
     var oldTime = new Date("2019.03.29 02:22:00");
     var now = parseInt((oldTime - date) / 1000);
     var day = Math.floor((now /24) % 24);
     $('#day').html(toDb(day));
     var hour = Math.floor(now / 3600) % 24;
     $('#hour').html(toDb(hour));
     var minutes = Math.floor(now / 60) % 60;
     $('#min').html(toDb(minutes));
     var seconds = Math.floor(now % 60);
     $('#sec').html(toDb(seconds));

 }

//商品点击的时候传id到详情页
$('.productlist').on('click','li',function(){
    console.log('aaa');
    var id = $(this).attr('data-id');
    location.href = 'html/xiangqingye.html?id=' + id;
})





















})


