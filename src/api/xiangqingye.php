<?php
header("content-type:text/html;charset=utf-8");
include 'conn.php';
$id = isset($_POST['id']) ? $_POST['id'] : '';
// echo $id;
$sql = "SELECT * FROM sygoodslist WHERE id = '$id'";
$res = $conn -> query($sql);
$arr = $res ->fetch_all(MYSQLI_ASSOC);
// var_dump($arr);
echo json_encode($arr,JSON_UNESCAPED_UNICODE);



?>