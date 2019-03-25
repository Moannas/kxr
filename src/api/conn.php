<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'kxrdb';
    //判断是否连接成功
    $conn = new mysqli( $servername,$username,$password,$dbname);
    if($conn->connect_error){
        die('出错原因是：'.$conn->connect_error);
    }
    //echo '连接成功';
    // mysqli_set_charset($conn,'utf8');

?>

