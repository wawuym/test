$(function(){
	/*点击提交按钮的时候判断*/
	$("#btn").click(function(){
		/*文本框*/
		var a=0,b=0,c=0,e=0,f=0,d=0;
		var txtInput=$("[required]");
			txtInput.each(function(){
				var txt=$(this).val();
				 a=exsitTxt(txt,$(this));
			})
		/*复选框*/
		 d=check();
		
		/*单选框*/
		 b=radio();
		 c=radio1();
		 e=radio2();
		 f=radio3();
		
	})
	
	$(":checkbox").on("click",function(){
		check();
	})
	
	$("[name='radio']").on("click",function(){
		radio();
	})
	$("[name='radio1']").on("click",function(){
		radio1();
	})
	$("[name='radio2']").on("click",function(){
		radio2();
	})
	$("[name='radio3']").on("click",function(){
		radio3();
	})
	
	//失去焦点的时候判断文本框是否为空
	$("[required]").blur(function(){
		var txt=$(this).val();
		exsitTxt(txt,$(this));
	})
	
	/*判断文本框是否为空*/
	function exsitTxt(txt,node){		
			if(txt==""){
				node.parent().find(".input_error").show();
				return false;
			}else{
				node.parent().find(".input_error").hide();
				return true;
			}
	}
	
	/*判断复选框有没有选中*/
	function check(){
		
		var x=0;
		var checked=$(":checkbox");
		checked.each(function(){
			if($(this).is(":checked")){
				x++;
			}
			if(x==0){
				$(".checkbox_error").show();
				console.log(x);
				return false;
			}else{
				$(".checkbox_error").hide();
				return true;
			}
			
		});	
	}
	
	/*判断单选框有没有被选中*/
	function radio(){
		var getradio=$("[name='radio']");
		if(getradio.is(":checked")){
			$(".radio_error").hide();
			return true;
		}else{
			$(".radio_error").show();
			return false;
		}
	}
	
	function radio1(){
		var getradio=$("[name='radio1']");
		if(getradio.is(":checked")){
			$(".radio_error1").hide();
			return true;
		}else{
			$(".radio_error1").show();
			return false;
		}
	}
	
	function radio2(){
		var getradio=$("[name='radio2']");
		if(getradio.is(":checked")){
			$(".radio_error2").hide();
			return true;
		}else{
			$(".radio_error2").show();
			return false;
		}
	}
	function radio3(){
		var getradio=$("[name='radio3']");
		if(getradio.is(":checked")){
			$(".radio_error3").hide();
			return true;
		}else{
			$(".radio_error3").show();
			return false;
		}
	}
	
})