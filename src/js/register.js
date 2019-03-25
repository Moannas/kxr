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
    
// 随机验证码
function yan() {
    var str = '';
    var i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B',
        'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (var t = 0; t < 4; t++) {
        var str = str + i[Math.floor(Math.random() * i.length)];
    }
    // console.log(str);
    return str;
}
$('.hyz').click(function(){
    $('.yzm').html(yan());
})
//注册
//验证用户名
var isok1 = false;
$('#username').blur(function(){
    var name = $('#username').val().trim();
    // console.log(name);
    if(name){
        if(checkReg.name(name)){
            $.ajax({
                type:'post',
                url:'../api/register.php',
                data:'username=' + name,
                success:function(str){
                //    console.log(str);
                if(str == 1){
                    $('.infs').eq(0).html('该用户名可以注册');
                    $('.infs').eq(0).css('color','green');
                    isok1 = true;
                }else{
                    $('.infs').eq(0).html('该用户名太受欢迎了');
                    $('.infs').eq(0).css('color','red');
                     isok1 = false;
                }
                }
            });

        }else{
            $('.infs').eq(0).html('正则不通过');
            $('.infs').eq(0).css('color','red');
        }

    }else{
        alert('请输入用户名！');
    }
})
//验证正则密码
var isok2 = false;
$('#password').blur(function(){
    var psw = $('#password').val().trim();
    // console.log(psw);
    if(psw){
        if(checkReg.psweasy(psw)){
            $('.infs').eq(1).html('格式正确');
            $('.infs').eq(1).css('color','green');
            isok2 = true;
        }else{
            $('.infs').eq(1).html('正则不通过');
            $('.infs').eq(1).css('color','red');
            isok2 = false;
        }

    }else{
        alert('请输入密码！');
    }    
})
//验证确认密码
var isok3 = false;
$('#qpassword').blur(function(){
    var qpsw = $('#qpassword').val().trim();
    var psw = $('#password').val().trim();
    if(qpsw){
        if(checkReg.pwwagain(qpsw,psw)){
            $('.infs').eq(2).html('确认密码');
            $('.infs').eq(2).css('color','green');
            isok3 = true;
        }else{
            $('.infs').eq(2).html('请两次输入的密码一致');
            $('.infs').eq(2).css('color','red');
            isok3 = false;
        }

    }else{
        alert('请输入密码！');
    }    
})
//验证电子邮箱
var isok4 = false;
$('#email').blur(function(){
    var email = $('#email').val().trim();
    if(email){
        if(checkReg.email(email)){
            $('.infs').eq(3).html('邮箱格式正确');
            $('.infs').eq(3).css('color','green');
            isok4 = true;
        }else{
            $('.infs').eq(3).html('请输入正确的邮箱格式');
            $('.infs').eq(3).css('color','red');
            isok4 = false;
        }

    }else{
        alert('请输入邮箱！');
    }    
})
//验证验证码
var isok5 = false;
$('#validatecode').blur(function(){
    var code = $('#validatecode').val().trim();
    var codes = $('.yzm').html().toLowerCase().trim();
    if(email){
        if(checkReg.pwwagain(code,codes)){
            $('.infs').eq(4).html('验证码正确');
            $('.infs').eq(4).css('color','green');
            isok5 = true;
        }else{
            $('.infs').eq(4).html('验证码不正确');
            $('.infs').eq(4).css('color','red');
            isok5 = false;
        }

    }else{
        alert('请输入邮箱！');
    }    
})
//提交到数据库
$('#btn').click(function(){
     if(isok1 && isok2 && isok3 && isok4 && isok5){
        var name = $('#username').val().trim();
        var psw = $('#password').val().trim();
        var email = $('#email').val().trim();
        $.ajax({
            type:'post',
            url:'../api/insertsql.php',
            data:'username=' + name + '&password=' + psw + '&email=' + email,
            success: function(str){
            //    console.log(str);
            if(str == 1){
                alert('注册成功！');
                window.open('login.html'); 

            }else{
                alert('注册失败！')
            }


            }
        });
    
     }else{
         alert('请重新注册！')
     }



})



    


















})


