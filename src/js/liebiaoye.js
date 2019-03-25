$(function () {

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
    lunbotu('.imglist li', '.light span', '.imglist'); //轮播图


    //列表页数据渲染
    $.ajax({
        type: 'post',
        url: '../api/liebiaoye.php',
        data: '',
        success: function (str) {
            var arr = JSON.parse(str);
            console.log(arr]);
            var res = arr.map(function (item) {
                return `
         <li class="goods" data-id="${item.id}">
         <img class="img" src="${item.img}" alt="">
         <p class="products">${item.products}</p>
         <p class="info">${item.info}</p>
         <p class="xx">
              <span class="kxj fl">大药房价:</span>
              <span class="dollor fl">￥</span>
              <span class="price fl">${item.price}</span> 
         </p>
         <p class="cart"></p>
         <p class="collect "></p>
         </li>
         `
            }).join('');
            //懒加载
            window.onscroll = function () {
                var top = window.scrollY;
                
                if (top >= window.innerHeight) {
                    $('.list').html(res);
                    // console.log($('.number').html());
                    //点击加入购物车，.number数量加一
                    $('.cart').click(function (ev) {
                        var id = $(ev.currentTarget).parent().attr('data-id');
                       
                        var a = $('.number').html();
                        a++;
                        // console.log(a);
                        $('.number').html(a);
                         //点击加入购物车的时候根据id插入到购物车表  
                        
                       
                        $.ajax({
                                type:'get',
                                url:'../api/gwcinsertsql.php',
                                data:'id=' + id,
                                success: function(str){
                                console.log(id); 
                                console.log(str);
                                if(str == 1){
                                    confirm('加入购物车成功！');
                                }else{
                                    confirm('加入购物车失败！');
                                }
                                }
                            });
                    
                    });
                    //点击图片时传id到详情页
                    
                    $('.img').click(function (ev) {
                      
                        var id = $(ev.currentTarget).parent().attr('data-id');
                        //跳转到详情页并把id带过去
                        location.href = 'xiangqingye.html?id=' + id;
                                          
                    })

                }


            }

        }
    });





























})