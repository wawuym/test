<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/4/11
 * Time: 14:30
 */

mysql_connect('127.0.0.1','root','root');
mysql_query('set names utf8');
mysql_select_db('myitem');
$username=$_GET['username'];
$password=$_GET['password'];
$sql="INSERT INTO user (username,`password`) VALUES ('".$username."','".$password."')";
mysql_query($sql);
if(mysql_affected_rows()>0){
    echo 'success';
}else{
    echo 'filed';
}