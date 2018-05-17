<?php
/**
 * Created by PhpStorm.
 * User: 27219
 * Date: 2018/5/7
 * Time: 1:34
 */
mysql_connect('127.0.0.1','root','root');
mysql_query('set names utf8');
mysql_select_db('pantrysbest');
$proID=$_GET['proID'];
$sql="SELECT * from  tag WHERE pro_more_id in( SELECT id from pro_more_list  WHERE pro_more_id='".$proID."')";
$res=mysql_query($sql);
$rows = array();
while($row=mysql_fetch_assoc($res)){
    $rows[]=$row;
}
$data=json_encode($rows);
echo $data;