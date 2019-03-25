<?php
header("content-type:text/html;charset=utf-8");
include 'conn.php';
$id = isset($_POST['id']) ? $_POST['id'] : '';
$sql = "DELETE FROM gwc WHERE id = '$id'";
$res = $conn->query($sql);
// var_dump($res);
if($res){
    echo 1;
}else{
    echo 0;
}



?>