<?php
/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/5/4
 * Time: 17:52
 */

//链接数据库配置
mysql_connect('127.0.0.1','root','root');
mysql_query('set names utf8');
mysql_select_db('pantrysbest');
$username=$_GET['username'];
$password=$_GET['pwd'];
$sql="INSERT INTO user (username,`pwd`) VALUES ('".$username."','".$password."')";
mysql_query($sql);
if(mysql_affected_rows()>0){
    echo 'success';
}else{
    echo 'failed';
}