<?php
header("content-type:text/html;charset=utf-8");
include 'conn.php';
$sql = "DELETE FROM gwc";
$res = $conn->query($sql);

if($res){
    echo 1;
}else{
    echo 0;
}

?>