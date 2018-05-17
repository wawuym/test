<?php
/**
 * Created by PhpStorm.
 * User: 27219
 * Date: 2018/4/13
 * Time: 10:14
 */


mysql_connect('127.0.0.1','root','root');
mysql_query('set names utf8');
mysql_select_db('myitem');
$proID=$_GET['proID'];
echo $proID;
$sql="SELECT * from t_hotel_details WHERE id in( SELECT id from t_hotel  WHERE menu_id='".$proID."')";
$res=mysql_query($sql);
/*$rows=array();
while($row=mysql_fetch_assoc($res)){
    $rows[]=$row;
}
$data=json_encode($rows);
echo $data;*/
$arr=mysql_fetch_array($res);
if(!$arr){
    echo 'error';
}else{
    echo $arr['s_image'];
}