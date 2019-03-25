$(function(){
    //获取存到cookie的用户名渲染到页面
    $('#users').html(cookie.get('name'));
//从数据库查询数据渲染到购物车   
    $.ajax({
      type:'post',
      url:'../api/gwc.php',
      data:'',
      success:function(str){
    //    console.log(str);
    var arr = JSON.parse(str);
    // console.log(arr);
    var res = arr.map(function(item){
      return  `<tr data-id="${item.id}" class="tr">
      <td class="first-th">${item.num}</td>
      <td><a>${item.name} ${item.weight}g</a><span class="redColor">(特例品)</span></td>
      <td class="priceSigns" width="90">￥${item.price}</td>
      <td width="90"><span class="minus-ico"></span>
          <input class="number" type="text" value="${item.nums}" id="num_28846"><span
              class="plus-ico" ></span></td>
      <td class="priceSign" width="90">￥${item.price}</td>
      <td width="90"><a data-id="${item.id}" class="del-cancle">删除</a></td>
      </tr>`
    }).join('');

    $('.tbo').html(res);
      }

    });
//数量的加和减
$('.tbo').on('click','.plus-ico',function(){
    // console.log($(this));
     num = $(this).prev().val()*1;//取值
    num++;
    if(num >= 50){
        num = 50;
    }
    $(this).prev().val(num);
    goodtotal($(this));
    allnum()
})
$('.tbo').on('click','.minus-ico',function(){
    // console.log($(this));
     num = $(this).next().val()*1;//取值
    num--;
    if(num <= 1){
        num = 1;
    }
    $(this).next().val(num);
    goodtotal($(this));
    allnum()
})
//小计的改变，价格也跟着改变
var totalprice = 0;
function goodtotal(now){
    num  = now.parent().find('input').val()*1;//数量
    var price = now.parent().prev().html().slice(1)*1;//获取价格，减掉单位
    totalprice = (num * price).toFixed(2)*1;//保留两位小数
    // console.log(num,price,totalprice);
    now.parent().next().html('￥ ' + totalprice);
}
//4.全选不选
$('#allchecked input').on('click',function() {
    if($(this).prop('checked')){
        allnum();
    }else{
        $('.num-red').html('0');
        $('#showptsp').html('￥' + '00.00');
        $('#showprototal').html('￥' + '00.00');
    }
    
});



//总价和总数量的更新

function allnum(){
    var num = 0;
    var priceall = 0;
    var lengths = $('.plus-ico').size();
    // console.log(lengths);
    for(var i = 0;i < lengths;i++){
        num += $('.number').eq(i).val()*1;
        // console.log(num);
        priceall += $('.priceSign').eq(i).html().slice(1)*1;
        // console.log(priceall);
        // console.log($('.priceSign').eq(i).html());
    }
    $('.num-red').html(num);
    $('#showptsp').html('￥' + priceall.toFixed(2));
    $('#showprototal').html('￥' + priceall.toFixed(2));
}
allnum()
//点击删除
$('.tbo').on('click','.del-cancle',function(){
    // console.log($(this));
    var id = $(this).attr('data-id');
    // console.log(id);
    //根据id从数据库删除数据
    $.ajax({
       type:"post",
       url:"../api/delete.php",
       data:"id=" + id,
       success: function(str){
        //  console.log(str);
         
         if(str == 1){
            confirm('您确认要删除吗');
             location.href='gwc.html';
         }
       }

    })

})

//点击清空购物车的时候删除购物车表中的数据

$('.qingk').click(function(){

    $.ajax({
        type: 'post',
        url:'../api/cleargwc.php',
        data:'',
        success:function(str){
        //  console.log(str);
         if(str == 1){
            confirm('您确认要删除吗');
             location.href='gwc.html';
         }
        }
    })
})



})



















