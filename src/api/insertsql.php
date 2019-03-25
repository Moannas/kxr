<?php
header("content-type:text/html;charset=utf-8");
include 'conn.php';
$name = isset($_POST['username']) ? $_POST['username'] : '';
$psw = isset($_POST['password']) ? $_POST['password'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$sql = "INSERT INTO user (username,psw,email) VALUES('$name','$psw','$email')";
$res = $conn -> query($sql);
// var_dump($res);
if($res){
    echo true;
}else{
    echo false;
}






?>