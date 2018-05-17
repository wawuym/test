$(function(){
	$(".img_id").hide();
	$(".pro").each(function(){	
		$(this).click(function(){
			var x=$(this).find("img");
			var title=x.attr("title");
			console.log(title);
			if(title=="企业试吃"){
				location="foretaste.html";
			}else{
				window.sessionStorage.setItem("proName",title);
				location="products.html";
			}
			
		})
		
	})
	$(".portfolio-content-wrap").each(function(){
		$(this).click(function(){
		var getId=	$(this).prev().find("span").html();
		window.localStorage.setItem("id",getId);
		location="product_more.html";
			
		})
		
	$(".blog-wrap").click(function(){
		var getId=$(this).find(".img_id").html();
		window.localStorage.setItem("id",getId);
		location="product_more.html";
	})
		
		
	})
	
	$(".post-header").each(function(){
		$(this).click(function(){
			var getId=$(this).parent().find(".img_id").html();
			window.localStorage.setItem("id",getId);
			location="product_more.html";
			
		})
		
	})
	
	
	
		
})
