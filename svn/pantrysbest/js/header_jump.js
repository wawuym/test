$(function(){
	var list=$(".product_list li");
	list.each(function(){
		$(this).click(function(){
			var proName=$(this).find("a").html();
			window.sessionStorage.setItem("proName",proName);
			location="products.html";
			
		})		
	})
	
	
})
