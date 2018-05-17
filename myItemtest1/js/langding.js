window.onload=function(){
	function dom(e){
		return document.getElementById(e);
	}
	var phone=dom("phone");
	var pwd=dom("pwd");
	var x;
	var y;
	var z;
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
		}
	}
	//密码
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
	
	//验证码
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
     	var test_value=dom("test").value;//输入的验证码
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
     	} 	
     }

	var userStr='';
	var pwdStr='';
	var xmlhttp;//全局的对象的变量
	if(window.XMLHttpRequest) {//判断浏览器的兼容性
		xmlhttp=new XMLHttpRequest();//new 对象，针对高版本
	}else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
	}
	var langding=dom("langding");
	langding.onclick=function() {
		var username = dom("phone").value;
		var password = dom("pwd").value;
		if (z) { //验证码输入成功以后才执行  通过数据库的方式判断
			xmlhttp.open('GET', 'php/landing.php?username=' + username + '& password=' + password, true);
			xmlhttp.send();
			xmlhttp.onreadystatechange = function () {
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {//响应状态
					var json = xmlhttp.responseText//响应数据
					json = json.split("|");
					if (json[0] == username && json[1] == password) {
						if(userStr==""&&pwdStr==""){
							userStr+=username;
							pwdStr+=password;
						}else{
							userStr+="|"+username;
							pwdStr+="|"+password;
						}
						window.localStorage.setItem("username",userStr);   //将用户名和密码存储在本地存储里面
						window.localStorage.setItem("password",pwdStr);
						location = "index.html";
					} else {
						alert("用户名或密码错误请检查");
					}
				}
			}


		}
	}
}

