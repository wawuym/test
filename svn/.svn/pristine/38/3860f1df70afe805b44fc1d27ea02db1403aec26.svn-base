$(function(){	
	var width=$(window).width();
	if(width>=768){
				$('.lo-re').css('display','block');
				$('.ul-box').css('display','block');
				$('.header-rgt-box').css('display','none');
				$('.header_btn').css('display','none');
				$('.ul3').css('display','none');
			}else{
				$('.lo-re').css('display','none');
				$('.ul-box').css('display','none');
				$('.header-rgt-box').css('display','block');
				$('.header_btn').css('display','block');
				$('.ul3').css('display','block');
			}
			if (width<1200&&width>=992) {
				$('.ul-box li a').css('padding-left','8px');
				$('.ul-box li a').css('padding-right','8px');
				$('.ul2-box li a').css('padding-left','8px');
				$('.ul2-box li a').css('padding-right','8px');
			} else if(width>=1200){
				$('.ul-box li a').css('padding-left','10px');
				$('.ul-box li a').css('padding-right','10px');
				$('.ul2-box li a').css('padding-left','10px');
				$('.ul2-box li a').css('padding-right','10px');
			} else{
				$('.ul-box li a').css('padding-left','0px');
				$('.ul-box li a').css('padding-right','0px');
				$('.ul2-box li a').css('padding-left','3px');
				$('.ul2-box li a').css('padding-right','3px');
			}
			if(width<388){
				$('.header_p').parent().css('font-size','9px')
			}else{
				$('.header_p').parent().css('font-size','')
			}
	    $(window).on('resize',function(){
	    	var x=$(window).width();
			if(x>=768){
				$('.lo-re').css('display','block');
				$('.ul-box').css('display','block');
				$('.header-rgt-box').css('display','none');
				$('.header_btn').css('display','none');
				$('.ul3').css('display','none');
				var h=$('.down_list').height();
				if (h>=223) {
			    		$('.down_list').animate({
				    		height: '0px'
				    	});
		    		}
			}else{
				$('.lo-re').css('display','none');
				$('.ul-box').css('display','none');
				$('.header-rgt-box').css('display','block');
				$('.header_btn').css('display','block');
				$('.ul3').css('display','block');
			}
			if (x<1200&&x>=992) {
				$('.ul-box li a').css('padding-left','8px');
				$('.ul-box li a').css('padding-right','8px');
				$('.ul2-box li a').css('padding-left','8px');
				$('.ul2-box li a').css('padding-right','8px');
			} else if(x>=1200){
				$('.ul-box li a').css('padding-left','10px');
				$('.ul-box li a').css('padding-right','10px');
				$('.ul2-box li a').css('padding-left','10px');
				$('.ul2-box li a').css('padding-right','10px');
			} else{
				$('.ul-box li a').css('padding-left','0px');
				$('.ul-box li a').css('padding-right','0px');
				$('.ul2-box li a').css('padding-left','3px');
				$('.ul2-box li a').css('padding-right','3px');
			}
			if(x<388){
				$('.header_p').parent().css('font-size','9px')
			}else{
				$('.header_p').parent().css('font-size','')
			}
	    })
	    $('.header_btn').on('click',function(){
	    	$('.header_btn a').css('color','white')
	    	var h=$('.down_list').height();
	    	if (h>=223) {
		    		$('.down_list').animate({
			    		height: '0px'
			    	});
	    	} else{
	    		$('.down_list').animate({
			    		height: '223px'
			    });
	    	}
	    })
	    $('.header-rgt-box a').on('click',function(){
	    	$('.header-rgt-box a').css('color','white')
	    })
	    $('.ul-box-a').click(function(){
	    	$(this).css('background-color','#390C20');
	    	$(this).css('height','50px')
	    })
	    
	   var username=sessionStorage.getItem("username");
	  
	   	if(username==null){
	   		$(".show").next().removeClass("hide");
	   		$(".show").html("<a href='login.html'>登陆</a>");
	   		$(".show").css("padding-top","0px");
	   	}else{
	   		$(".hide").hide();
	   		$(".show").html(username);
	   		$(".show").css("color","white");
	   		$(".show").css("padding-top","15px");
	   		$(".show").css("background","none");
	   	}
	   	
	   	$('.where').click(function(){
	   		x=$(this).html();
	   		$('.pppp').html(x);
	   	})
})