<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/4/12
 * Time: 14:55
 */
mysql_connect('127.0.0.1','root','root');
mysql_query('set names utf8');
mysql_select_db('myitem');
$sql='SELECT * from imgtab WHERE imgi in( SELECT id from theme  WHERE menu="名山胜景")';
$res=mysql_query($sql);
$rows = array();
while($row=mysql_fetch_assoc($res)){
    $rows[]=$row;
}
$data=json_encode($rows);
echo $data;