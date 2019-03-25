<?php
header("content-type:text/html;charset=utf-8");
include 'conn.php';
$sql = "SELECT * FROM sygoodslist";
$res = $conn -> query ($sql);
// var_dump($res);
$arr = $res ->fetch_all(MYSQLI_ASSOC);
// var_dump($arr);
echo json_encode($arr,JSON_UNESCAPED_UNICODE);













?>
