<?php
header("content-type:text/html;charset=utf-8");
include 'conn.php';
$name = isset($_POST['username']) ? $_POST['username'] : 'jackson';
$psw = isset($_POST['password']) ? $_POST['password'] : 'jackson';
$sql = "SELECT * FROM user WHERE username = '$name' AND psw = '$psw' ";
$res = $conn -> query($sql);
// var_dump($res);
if($res ->num_rows){
    echo 1;
}else{
    echo 0;
}
?>