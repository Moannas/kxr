<?php
header("content-type:text/html;charset=utf-8");
include 'conn.php';
/* 
点击加入购物车，先查询购物车表，然后更新购物车表
  post:
    id:商品id
    num：商品数量
    加入购物车，数据插入到购物车表
*/
$num = isset($_GET['num']) ? $_GET['num'] : '1';
$id = isset($_GET['id']) ? $_GET['id'] : '';
// echo $id;
$sql = "SELECT nums FROM gwc WHERE id='$id'";
$res = $conn -> query($sql);
$res2 = null;
if($res->num_rows>0){
    //有数据
    $data = $res->fetch_all(MYSQLI_ASSOC);
    $gnum = $data[0]['nums'];
    $num = $num + $gnum;
    $sql2 = "UPDATE gwc SET nums=$num WHERE id=$id";
    $res2 = $conn->query($sql2);
}else{
    //没有数据
    $sql3 = "SELECT * FROM  sygoodslist WHERE id='$id'";
    $res3 = $conn->query($sql3);
    if($res3->num_rows>0){
        $data3=$res3->fetch_all(MYSQLI_ASSOC);
        $gname = $data3[0]['products'];
        $gprice = $data3[0]['price'];
        $gnumber = $data3[0]['number'];
        $weight = '320';
        $sql4="INSERT INTO gwc(id,name,price,num,weight,nums) VALUES ('$id','$gname','$gprice','$gnumber','$weight','$num')";
        $res2=$conn->query($sql4);
        
    }
   
}

if($res2){
    echo 1;
}else{
    echo 0;
}


?>