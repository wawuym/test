$(function(){
	var z=0;
	//判断文本框输入的值是否为空
	function exsitTxt(txt,node){		
			if(txt==""){
				node.next().find(".error").show();
				return false;
			}else{
				code();
			}
	}
	
	//手机验证
	function reg(m){
		var reg=/^1[4|3|5|7|8|9]\d{9}$/;
		return reg.test(m);
	}
	
	function passWord(m){
		var reg=/^[A-Za-z0-9_]{8,16}$/;
		return reg.test(m);
	}
	
	$("#phone").blur(function(){
		var txt=$(this).val();
		if(txt==""){
				$(this).next().find("span").html("请输入手机号码").show();
				return false;
		}else{
			var result=reg(txt);
			if(!result){
				$(this).next().find("span").html("手机号码输入有误").show();
				return false;
			}else{
				$(this).next().find("span").hide();

			}	
		}
		
	})
	
	//判断密码
	$("#password").blur(function(){
		var txt=$("#password").val();
		if(txt==""){
				$(this).next().find("span").html("请输入密码").show();
				return false;
		}else{
			var result=passWord(txt);
			if(!result){
				$(this).next().find("span").html("密码必须是8位到16位以上的英文或者数字").show();
				return false;
			}else{
				$(this).next().find("span").hide();
			}
		}
		
	})
	
	
	//验证码
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
		$("#codeRadom").html(code);
	}
	createCode();
	
	$("#codeRadom").click(function(){
		createCode();
	})
	//判断验证码是否正确
	function code(){
		var pass=$("#code").val();
		var pass01=$("#codeRadom").html();
		if(pass==""){
			$(this).next().find("span").html("请输入验证码").show();
			z=0;
			return false;
		}else{
			pass=pass.toUpperCase();
			pass01=pass01.toUpperCase();
			if(pass==pass01){
				$(this).next().find("span").hide();
				z=1;
			}else{
				$(this).next().find("span").html("验证码输入有误").show();
				z=0;
				createCode();

			}
		}
	}

	$("#code").blur(function(){
		code();
	})
	
	//判断复选框的状态
	var agreement=$("#agreement");
	var bool=false;
	if(agreement.find("input").is(":checked")){
		bool=true;
	}
	agreement.change(function(){
		if(agreement.find("input").is(":checked")){
			bool=true;
		}else{
			bool=false;
		}
	});

	$(".userSubmit").click(function(){
		$(".txtInput").each(function(){
			var txt=$(this).val();
			exsitTxt(txt,$(this));	
		})
		if(z){
			if(bool){
				var username=$("#phone").val();
				var pwd=$("#password").val();
				$.ajax({
					type:"get",
					url:'php/login.php?username='+username+'& pwd='+pwd,
					async:true,
					success:function(res){
						var userName_formDate=res.split("|")[0];
						var userPwd_formDate=res.split("|")[1];
						if(userName_formDate==username&&userPwd_formDate==pwd){
							window.sessionStorage.setItem("username",username);   //将用户名和密码存储在本地存储里面
							window.sessionStorage.setItem("password",pwd);
							var car=window.sessionStorage.getItem("car");//判断是不是购物车的页面跳转过来的
							if(car=="1"){
								window.sessionStorage.setItem("car","0");
								location="product_more.html";								
							}else{
								location="index.html";
							}
							
						}else{
							alert("登陆失败请检查用户名和密码")
						}
					},error:function(res){

					}
				});
			}else{
				alert("请同意购物协议");
			}
		}else{
			alert("登陆失败请检查");
		}
	})
})