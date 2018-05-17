$(function(){
	var li=$(".topbar li");
	li.mouseover(function(){
		$(this).addClass("show1").siblings().removeClass("show1");
	})
	$(".registerBtn").click(function(){
		location="register.html";
	})
	
	
})