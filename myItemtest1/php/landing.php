<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/4/11
 * Time: 17:19
 */
mysql_connect('127.0.0.1','root','root');
mysql_query('set names utf8');
mysql_select_db('myitem');
$username=$_GET['username'];
$password=$_GET['password'];
$sql="SELECT * from user WHERE username='".$username."'";
$res=mysql_query($sql);
$arr=mysql_fetch_array($res);
if(!$arr){
    echo 'error';
}else{
    echo $arr['username']."|".$arr['password'];
}