<?php
/**
 * Created by PhpStorm.
 * User: 27219
 * Date: 2018/5/5
 * Time: 22:12
 */
mysql_connect('127.0.0.1','root','root');
mysql_query('set names utf8');
mysql_select_db('pantrysbest');
$proName=$_GET['proName'];
$sql="SELECT * from product_detail WHERE pro_id in( SELECT id from product  WHERE pro_name='".$proName."')";
$res=mysql_query($sql);
$rows = array();
while($row=mysql_fetch_assoc($res)){
    $rows[]=$row;
}
$data=json_encode($rows);
echo $data;