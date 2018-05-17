<?php
mysql_connect('127.0.0.1','root','root');//连接数据配置
mysql_query('set names utf8');//设置编码规则
mysql_select_db('pantrysbest');//连接数据库
$goodsName=$_GET['goodsName'];//获取HTML
$goodsSrc=$_GET['goodsSrc'];
$goodsPrice=$_GET['goodsPrice'];//获取HTML
$goodsNum=$_GET['goodsNum'];
$uid=$_GET['username'];
$sql="INSERT INTO shopping (img_name,img_price,img_number,img_src,user_id) VALUES ('".$goodsName."','".$goodsPrice."','".$goodsNum."','".$goodsSrc."','".$uid."')";
mysql_query($sql);
if(mysql_affected_rows()>0){
    echo '成功';
}else{
    echo '失败';
}