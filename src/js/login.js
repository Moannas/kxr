//登录
$(function(){

    $('#btn').click(function(){
        var name = $('#username').val().trim();
        var psw = $('#password').val().trim();
        if(name && psw){
            $.ajax({
                type:'post',
                url:'../api/login.php',
                data:'username=' + name + '&password=' + psw,
                success:function(str){
                  if(str == 1){
                    location.href='shouye.html';
                    cookie.set('name', name,{path: '/kxr'});

                  }else{
                     $('.infs').html('用户名或者密码错误！');
                  }
                }
            })
             

        }else{
            $('.infs').html('请输入用户名或密码!');
        }


    })
    // 点击自动登录，实现免登陆功能
    // 点击下次自动登录时存储账号和密码的cookie
    // 取消自动登录时，清除储存好的账号和密码的cookie
   $('#autologin').click(function(){
    var isok = true;
    if(isok == true){
        $('#autologin').prop('checked','checked');
        var name = $('#username').val().trim();
        var psw = $('#password').val().trim();
        var d = new Date();
        console.log(name,psw);
        d.setDate(d.getDate()+10);
        cookie.set('name',name,{expires : d});
        cookie.set('psw',psw,{expires : d});
    }else if(isok == false){
        $('#autologin').prop('checked','');
        cookie.remove('name');
        cookie.remove('psw');
        $('#username').val('');
        $('#password').val('');
    }
    isok = !isok;

   })
   // 拿到存储好的账号和密码的cookie，直接输入到账号框和密码框，直接跳转到首页
   $('#username').val(cookie.get('name'));
   $('#password').val(cookie.get('psw'));
   if($('.user').val() != '' && $('.psw').val() != ''){
      
       $('.autologin').prop('checked','checked');
       // console.log(12)
       $('#btn').on('click',function(){
           var name = $('#username').val().trim();
           location.href='../index.html';
           cookie.set('name', name,{path: '/kxr'});
       });
   };





})