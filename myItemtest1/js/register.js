
window.onload=function(){
	//获取对象
	function dom(e){
		return document.getElementById(e);
	}
	
	var phone=dom("phone");//注册的手机号
	var pwd=dom("pwd");//第一次输入的密码
	var pwd_two=dom("pwd_two");//第二次输入的密码
	var x=0;
	var y=0;
	var z=0;
	//手机
	phone.onfocus=function(){
		var str=phone.value;
		if(str=="您的手机"){
			phone.value="";
		}	
	}
	phone.onblur=function(){
		var str=phone.value;
		if(str==""){
			phone.value="您的手机";
			return 0;
		}else{
			 x=reg(str);   //失去焦点的时候获取手机号判断输入的手机号是否有效
			if(x){
//				local_storage();
			}else{
				alert("手机号不合法 请检查");

			}
		}
	}
	
	///密码
	pwd.onfocus=function(){
		var str=pwd.placeholder;
		if(str=="请填写密码"){
			pwd.placeholder="";
		}
	}
	pwd.onblur=function(){
		var str=pwd.placeholder;
		var pwd_v=pwd.value;
		if(pwd_v==""){
			pwd.placeholder="请填写密码";
		}
	}
	pwd_two.onfocus=function(){
		var str=pwd_two.placeholder;
		if(str=="确认密码"){
			pwd_two.placeholder="";
		}	
	}
	pwd_two.onblur=function(){
		var str=pwd_two.placeholder;
		var pwd_vv=pwd_two.value;
		if(pwd_vv==""){
			pwd_two.placeholder="确认密码";
		}
	}

	//验证手机号码的函数
	function reg(m){
		var reg=/^1[4|3|5|7|8|9]\d{9}$/  //验证手机号码
		return reg.test(m);
	}

	function confirm(){  //获取第一次密码输入框的值是否和第二次密码输入框的值一致
		var pwd_v=pwd.value;
		var pwd_vv=pwd_two.value;
		if(pwd_v==''||pwd_vv==''){
			alert("请输入密码");
			return false;
		}
		if(pwd_v==pwd_vv){
			return true;
		}else{
			alert("两次输入的密码不一致");
			return false;
		}
	}
	
	
	
	
	//验证码
	//一开始获取焦点的时候将预置的value置为空
	var test=dom("test");
	test.onfocus=function(){
		var test_value=test.value;
		if(test_value=="请输入验证码"){
			test.value="";
		}
		
	}
	test.onblur=function(){
		var test_value=test.value;
		if(test_value==""){
			test.value="请输入验证码";

		}

	}
	
	//随机生成验证码
	function createCode(){
		var code='';
		var codeLength=4;
		var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 
       'S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r', 
       's','t','u','v','w','x','y','z');//随机数 
    	for(var i=0;i<codeLength;i++){
    	var index=Math.floor(Math.random()*62);
    	code+=random[index];
    	}
		dom("getTest").value=code;
	}
	
	//点击更换验码
	var change_test=dom("change_test");
	change_test.onclick=function(){
		createCode();
		var change_test_value=dom("getTest").value;
		if(change_test_value==""){
			dom("change_test").value="点击获取验证码";
		}else{
			dom("change_test").value="看不清楚？换一张";
		}
	}
	//输入验证码的框失去焦点的时候判断验证码是否输入正确
	test.onblur=function(){
     	var test_value=dom("test").value;//输入验证码
     	var getTest_value=dom("getTest").value; //生成的验证码
     	var reg=/^[A-Za-z0-9]{4}$/i;
     	var m=reg.test(test_value);  //判断输入的验证码是不是A-Za-z0-9而且为4位数
     	
     	test_value=test_value.toLowerCase();//将输入的验证码转换成小写
     	getTest_value=getTest_value.toLowerCase();

     	if((test_value==getTest_value)&&m){
     			dom("result").innerHTML="正确";
     			dom("result").style.color="green";
     			z=1;
     	}else{
     			dom("result").innerHTML="错误";
     			dom("result").style.color="red";
     			createCode();
     			z=0;
			alert("请验证码输入有误");
     	} 	
     }
    
    //当手机密码和验证码都正确的时候 将数据存入数据库和本地存储
	var myxml;//全局的对象的变量
	var myJson;
	var userStr='';
	var pwdStr='';
	var register=dom("register");
	if(window.XMLHttpRequest) {//判断浏览器的兼容性
		myxml=new XMLHttpRequest();//new 对象，针对高版本
	}else{
		myxml=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
	}
		var json;
		var xmlhttp;//全局的对象的变量
		if(window.XMLHttpRequest) {//判断浏览器的兼容性
			xmlhttp=new XMLHttpRequest();//new 对象，针对高版本
		}else{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
		}
		register.onclick=function(){

			var str=phone.value;
			var test_value=dom("test").value;
			if(str=="您的手机"){
				alert("请输入手机号");
				return false;
			}
			y=confirm();//点击注册的时候先判断两次输入的密码是否一致
			if(!y){
				return false;
			}else if(test_value=='请输入验证码'){
				alert("请输入验证码");
				return false;
			}
			if(x&&y&&z){  //当手机号码 验证码 和密码都输入正确以后 在将数据存入数据库
				var username=dom("phone").value;
				var password=dom("pwd_two").value;
				
				myxml.open('GET','php/register_user.php?username='+username,true);
				myxml.send();
				myxml.onreadystatechange=function(){
					if(myxml.readyState==4 &&myxml.status==200){//响应状态
						myJson=myxml.responseText//响应数据    将查询出来的结果返回给myJson
						if(myJson==username){
							alert("该用户名已被注册");
							return false;
						}else{
							xmlhttp.open('GET','php/register.php?username='+username+'& password='+password,true);
							xmlhttp.send();
							xmlhttp.onreadystatechange=function(){
								if(xmlhttp.readyState==4 &&xmlhttp.status==200){//响应状态
									json=xmlhttp.responseText//响应数据
									if(json=='success'){
										//alert("注册成功");
										location = "langding.html";
									}else{
										alert("注册失败");
									}
								}
							}
						}
					}
				}
			}

		}

}
