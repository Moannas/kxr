$(function () {


// 选项卡
//封装
    function tab(a,b) {

        $(a).hover(function () {

            //内容跟着出来
            $(b).eq($(this).index())
                .css('display', 'block')
                .siblings()
                .css('display', 'none');
        });
    }
//调用
    tab('.specification li', '.con');

    //接收地址传过来的id
    var opt = decodeURI(location.search).slice(1);
    var item = strToObj(opt);
    // console.log(item);
    //根据传来的id在数据库查找然后渲染到页面
    $.ajax({
      type:'post',
      url:'../api/xiangqingye.php',
      data:"id="+ item.id,
      success:function(str){
       var arr = JSON.parse(str);
       console.log(arr);
       var res = arr.map(function(item){
           return `   <div class="gleft fl">
           <h2 class="proname">${item.products} 2.5mg*30片</h2>
           <div class="preview">
               <div class="jqzoom">
                   <img class="img" src="${item.img}" alt="">
                   <span class="telipin"></span>
                   <div class="move"></div>
               </div>
               <div class="bing">
                   <img class="b-bing" src="${item.img}"
                       alt="">
               </div>
           </div>
           <div class="items">
               <a class="fl" href="">&lt;</a>
               <p class="mini fl"><img src="${item.img}"
                       alt=""></p>
               <a class="fr" href="">&gt;</a>
           </div>
       </div>
       <div class="gright fr">
           <h2 class="pro-info">${item.info}</h2>
           <ul class="detail">
               <li>通用名称:整蛋白型肠内营养剂(粉剂)</li>
               <li>商品编号:B01007151x</li>
               <li>商品规格:320g</li>
               <li>批准文号:进口药品注册证号H20090007</li>
               <li>生产企业:德国Milupagmbh</li>
           </ul>
           <div class="price">
               <p class="fix">
                   <span class="kaxprice">开心人价: <em>￥${item.price}</em></span>
                   <span class="lisheng">立省: <em>￥${item.discount}</em> </span>
               </p><br />
               <p class="market">
                   <span>市场价: <del>￥${item.marketprice}</del> </span>价格投诉
               </p>
           </div>
           <div class="yhzx fl">
               <span class=" youh fl">优惠专享:</span>
               <p>单盒专享价：106.00元 立省82.00元</p>
               <p>5盒优惠装：510.00元 立省90.00元</p>
           </div>
           <div class="dact">
               <p class="upcf">
                   <img class="fl" src="../images/uploadrx.png" alt="0.0"><span></span>
               </p>
               <p class="callback">
                   <span><input type="text" name="" placeholder="请输入11位手机号"> </span>
                   <em></em>
               </p>
           </div>
           <div class="propoint"><strong>温馨提示：</strong>本产品为处方药，需凭医生处方购买，本网站不销售处方药；开心人网上药店受开心人大药房委托，发布该药品信息。如您有相关需求，请留下您的联系方式，开心人实体店药师将为您提供登记购买信息和药师咨询服务，咨询电话<em>400-999-0999</em>。</div>
       </div>`
       }).join('');
       $('.goodsdesc').html(res);

    //放大镜效果
    console.log($('.jqzoom'));
    $('.jqzoom').mouseover(function () {
        
        $('.move').css('display', 'block');
        $('.bing').css('display', 'block');
    })
    $('.jqzoom').mouseout(function () {
        $('.move').css('display', 'none');
        $('.bing').css('display', 'none');
    })
    $('.jqzoom').mousemove(function (ev) {
        // 获取鼠标当前位置
        var pageX = ev.pageX;
        var pageY = ev.pageY;
        // 获取“缩略图”窗口在整个文档中的偏移位置
        var offsetX = $('.jqzoom').offset().left;
        var offsetY = $('.jqzoom').offset().top;
        // 计算鼠标在缩略图中的相对位置
        var relativeX = pageX - offsetX;
        var relativeY = pageY - offsetY;
        // 考虑到鼠标处于“放大镜”框的中心，我们要根据鼠标位置计算“放大镜”框的位置
        var magOffsetX = $('.move').width() / 2;
        var magOffsetY = $('.move').height() / 2;
        $('.move').css({
            left: relativeX - magOffsetX + 'px',
            top: relativeY - magOffsetY + 'px'
        });
        // 获取“放大镜”框的新位置，后面会用到
        var magX = $('.move').position().left;
        var magY = $('.move').position().top;

        // 处理越界情况

        // 确定边界
        var maxMagX = $('.jqzoom').width() - $('.move').width()
        var maxMagY = $('.jqzoom').height() - $('.move').height()
        // 左边界
        if (magX <= 0) {
            $('.move').css('left', '0px');
        }
        // 右边界
        if (magX >= maxMagX) {
            $('.move').css('left', maxMagX + 'px');
        }
        // 上边界
        if (magY <= 0) {
            $('.move').css('top', '0px');
        }
        // 下边界
        if (magY >= maxMagY) {
            $('.move').css('top', maxMagY + 'px');
        }

        // 其次实现“原图”窗口中的图片随放大镜框的移动而相应移动
        // 按照之前确定的缩放比例移动原图窗口中的图片
        // 图片的移动方向与鼠标的移动方向是相反的
        var originX = magX * 2.5;
        var originY = magY * 2.5;
        $('.bing img').css({
            left: -originX + 'px',
            top: -originY + 'px'
        });

    })

      }

    })














})