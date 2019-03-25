<?php
header("content-type:text/html;charset=utf-8");
include 'conn.php';
$name = isset($_POST['username']) ? $_POST['username'] : '';
// echo $name;
$sql = "SELECT * FROM user WHERE username = '$name'";

$res = $conn -> query($sql);
// var_dump($res);
if($res ->num_rows){
    echo 0;
}else{
    echo 1;
}




?>