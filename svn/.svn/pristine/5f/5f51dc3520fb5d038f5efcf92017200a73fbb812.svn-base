<?php
/**
 * Created by PhpStorm.
 * User: 27219
 * Date: 2018/5/6
 * Time: 10:48
 */
mysql_connect('127.0.0.1','root','root');
mysql_query('set names utf8');
mysql_select_db('pantrysbest');
$username=$_GET['username'];
$password=$_GET['pwd'];
$sql="SELECT * from user WHERE username='".$username."'";
$res=mysql_query($sql);
$arr=mysql_fetch_array($res);
if(!$arr){
    echo 'error';
}else{
    echo $arr['username']."|".$arr['pwd'];
}
