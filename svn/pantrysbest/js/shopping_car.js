$(function(){
//	var uid="15284126142";
	var uid=sessionStorage.getItem("username");
	$.ajax({
		//请求的方式
		type:'get',
		//请求的url
		//这儿的uid我是写死的 到时后改成登录的就可以了
		url:'php/shopping-car.php',
		data:{"uid":uid},
		//异步(true)还是同步(false)
		async:true,
		dataType:'json',
		success:function(data){
			dataSplicing(data);
		},error:function(data){
			console.log(data);
		}
	})
	function dataSplicing(data){
		var str="";
		for(var i=0;i<data.length;i++)
		{
			str+="<div class='col-lg-12 goodsInfo'>" +
					"<div class='col-lg-3 col-sm-3 col-md-3 col-xs-12 ul_box'><img src='"+data[i].img_src+"'class='img-responsive center-block'/></div>"+
					"<p class='col-lg-2 col-sm-2 col-md-2 hidden-xs big'>"+data[i].img_name+"</p>"+
					"<p class='col-lg-2 col-sm-2 col-md-2 col-xs-4 price'><span>&yen;</span> <span class='product_price'>"+data[i].img_price+"</span> </p>"+
					"<div class='col-lg-3 col-sm-3 col-md-3 col-xs-4 num'> <span class='jian'>－</span> <span class='nm'>"+data[i].img_number+"</span> <span class='jia'>＋</span> </div>"+
					"<div class='col-lg-2 col-sm-2 col-md-2 col-xs-4 del'> <span class='remove'>×</span> </div></div>";
				
		}
		$(".container .row").eq(1).prepend(str);
	}
	/*购物车加减效果*/	
	/*跳转地图*/
	$('.map').click(function(){
		$(location).attr('href', 'BDmap.html');
	})
	
})