<?php
//连接数据库ip,用户名，密码
mysql_connect('127.0.0.1','root','root');
//编码规则
mysql_query('set names utf8');
//连接数据库的名字
mysql_select_db('pantrysbest');
$id=$_GET['uid'];
//写sql
$sql='SELECT * FROM shopping WHERE user_id='.$id.'';
//执行sql语句
$res=mysql_query($sql);
//定义数组
$rows = array();
//遍历每一条数据赋值$row接收
while($row=mysql_fetch_assoc($res)){
    //将每一条数据放入数组
    $rows[]=$row;
}
//将其转换成对象
$data=json_encode($rows);
echo $data;