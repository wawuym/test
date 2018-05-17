$(function(){
	/*触碰改变其src效果*/
$("#main").on("mousemove",".product_pho",function(){
	var x=$(this).attr('src');
		$('.product_first').attr('src',x);
		$('.product_pho').removeClass('product_op');
		$(this).addClass('product_op');
})


	/*监听事件*/
	$('#main').on('input propertychange',function(){
		var y=$('.pri').html();
		var num=$('.num').val();
		if (num<=0) {
			num=0;
			$('.num').val(num);
			$('.product_price .pri').html(0);
		} else{
			var sum=num*parseInt(y);
			$('.product_price .pri').html(sum);
		}
	})
	
	
	
	
	
	
	/*购物车加减效果*/
	$("#main").on("click",".jian",function(){
		var y=$('.pri').html();
		var x=$('.num').val();
		if (x<=0) {
			x=0;
			$('.num').val(x);
			var z=x*parseInt(y);
			$('.product_price .pri').html(z);
		} else{
			x--;
			var z=x*parseInt(y);
			$('.num').val(x);
			$('.product_price .pri').html(z);
		}
	})
	
		

$("#main").on("click",".jia",function(){
	    var y=$('.pri').html();
		var x=$('.num').val();
		x++;
		var z=x*parseInt(y);
		$('.num').val(x);
		$('.product_price .pri').html(z);
})
$("#main").on("click",".now",function(){
	var username=sessionStorage.getItem("username");
	if(username==null){
		alert("还没有登录，请登录");
		var car=window.sessionStorage.setItem("car","1");
		location="login.html";
	}else{
		location="shopping_car.html";
	}
})

})