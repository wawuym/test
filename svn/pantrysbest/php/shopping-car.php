<?php
//�������ݿ�ip,�û���������
mysql_connect('127.0.0.1','root','root');
//�������
mysql_query('set names utf8');
//�������ݿ������
mysql_select_db('pantrysbest');
$id=$_GET['uid'];
//дsql
$sql='SELECT * FROM shopping WHERE user_id='.$id.'';
//ִ��sql���
$res=mysql_query($sql);
//��������
$rows = array();
//����ÿһ�����ݸ�ֵ$row����
while($row=mysql_fetch_assoc($res)){
    //��ÿһ�����ݷ�������
    $rows[]=$row;
}
//����ת���ɶ���
$data=json_encode($rows);
echo $data;