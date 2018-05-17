$(function(){
	var x=0,y=0,z=0,m=0;		
	//判断文本框输入的值是否为空
	function exsitTxt(txt,node){		
			if(txt==""){
				node.next().find(".error").show();
				return false;
			}else{
				node.next().find(".error").hide();
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
				x=0;
				return false;
		}else{
			var result=reg(txt);
			if(!result){
				$(this).next().find("span").html("手机号码输入有误").show();
				x=0;
				return false;
			}else{
				$(this).next().find("span").hide();
				x=1;
			}	
		}
		
	})
	
	//判断密码
	$("#password").blur(function(){
		var txt=$("#password").val();
		var txt02=$("#passordAgin").val();
		if(txt02!=""){
			if(txt!=txt02){
				$(this).next().find("span").html("二次密码不一致").show();
				y=0;
			}else{
				var result=passWord(txt);
				if(!result){
					$(this).next().find("span").html("密码格式不对").show();
					
					return false;
				}else{
					$(this).next().find("span").hide();
					$(".psworss").hide();
					y=1;
					z=1;
				}	
			}
		}else{
			if(txt==""){
				$(this).next().find("span").html("请输入密码").show();
				y=0;
				return false;
		}else{
			var result=passWord(txt);
			if(!result){
				$(this).next().find("span").html("密码必须是8位到16位以上的英文或者数字").show();
				y=0;
				return false;
			}else{
				$(this).next().find("span").hide();
				y=1;
			}
		}
		}	
	})
	
	
	$("#passordAgin").blur(function(){
		var txt=$("#password").val();
		var txt02=$("#passordAgin").val();
		if(txt02==""){
				$(this).next().find("span").html("请再次输入密码").show();
				z=0;
				return false;
		}else{
			if(txt==txt02){
				$(this).next().find("span").hide();
				$(".pswor").hide();
				z=1;
				y=1;
				return true;
			}else{
				$(this).next().find("span").html("二次密码不一致").show();
				z=0;
			}
		}	
	});
	
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
	$("#code").blur(function(){
		var pass=$("#code").val();
		var pass01=$("#codeRadom").html();
		
		if(pass==""){
				$(this).next().find("span").html("请输入验证码").show();
				m=0;
				return false;
		}else{
			pass=pass.toUpperCase();
			pass01=pass01.toUpperCase();
			if(pass==pass01){
				$(this).next().find("span").hide();
				m=1;
			}else{
				$(this).next().find("span").html("验证码输入有误").show();
				createCode();
				m=0;
			}
		}	
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
		if(x&&y&&z&&m){	
			if(bool){
				var username=$("#phone").val();
				var pwd=$("#password").val();
				/*ajax*/
				/*先判断用户名是否被注册*/
				$.ajax({
					type:"get",
					url:'php/regsiterAgin.php?username='+username,
					async:true,
					success:function(res){
						if(res==username){
							alert("该用户已被注册");
						}else{
							/*注册用户*/
							$.ajax({
								type:"get",
								url:'php/register.php?username='+username+'& pwd='+pwd,
								async:true,
								success:function(res){
									if(res=="success"){
										window.sessionStorage.setItem("username",username);   //将用户名和密码存储在本地存储里面
										window.sessionStorage.setItem("password",pwd);
										location="index.html";
									}
								},error:function(res){
									alert("注册失败");
								}
							});
						}
					},error:function(){

					}
				});
			}else{
				alert("请同意购物协议");
			}	
		}else{
			alert("注册失败");
		}
	})
	
	
})