<?php
/**
 * Created by PhpStorm.
 * User: 27219
 * Date: 2018/4/11
 * Time: 22:56
 */
mysql_connect('127.0.0.1','root','root');//连接数据库配置
mysql_query('set names utf8');//设置字符编码
mysql_select_db('myitem');//连接数据库
$username=$_GET['username'];//获取username
$sql="SELECT * from user WHERE username='".$username."'";
$res=mysql_query($sql);//ִ执行sql
$arr=mysql_fetch_array($res);//返回一条数据结果
if(!$arr){
    echo 'error';
}else{
    echo $arr['username'];
}