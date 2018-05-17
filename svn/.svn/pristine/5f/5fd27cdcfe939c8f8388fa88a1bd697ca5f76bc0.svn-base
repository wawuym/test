$(function(){
	//根据头部点击过来的连接拼接数据
	var proName=window.sessionStorage.getItem("proName");
	//首页到二级页面跳转
	if(proName!=null){
		$.ajax({
				type:"get",
				url:'php/products.php?proName='+proName,
				async:true,
				dataType:'json',
				success:function(res){
					productPj(res);					
				},error:function(res){
				}
			});
			
		
		$(".tag-name:contains("+proName+")").addClass("active");
		$(".tag-name:contains("+proName+")").parent().siblings().find(".tag-name").removeClass("active");
	
		
	}else{
	
		$.ajax({
				type:"get",
				url:'php/products.php?proName=太芒啦',
				async:true,
				dataType:'json',
				success:function(res){
					productPj(res);
				},error:function(res){
				}
			});
	}
	
	
	//显示更多
	$(".tag-name:gt(9)").hide();
	$(".up").hide();
	$(".more").click(function(){
		$(".tag-name:gt(9)").show();
		$(this).toggle();
		$(".up").toggle()
	});
	$(".up").click(function(){
		$(".tag-name:gt(9)").hide();
		$(this).toggle();
		$(".more").toggle();
	})
	
	//购物车颜色改变	
	$("#content").on("mouseover",".car",function(){
		$(this).prop("src","img/tag/showcar.png");		
	})
	$("#content").on("mouseleave",".car",function(){
		$(this).prop("src","img/tag/cart.png");		
	})
	
	//蛋糕名称点击改变颜色 并传值到数据库中取数据
	$(".tag-name").each(function(){
		$(this).click(function(){
			$(this).addClass("active");
			$(this).parent().siblings().find(".tag-name").removeClass("active");
			var name=$(this).html();
			//ajax传值
			$.ajax({
				type:"get",
				url:'php/products.php?proName='+name,
				async:true,
				dataType:'json',
				success:function(res){
					productPj(res);
				},error:function(res){
				}
			});

		});
	});
	//数据拼接
	function productPj(res){
		var str="";
		for(var i=0;i<res.length;i++){
			str+='<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6 marBottom"><a class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_0 product_info">'+
					'<img src='+res[i].img_src+' class="img-responsive img-thumbnail"><span class="id" id='+res[i].id+'>'+res[i].id+'</span></a><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding_0 set_height">'+
					'<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 padding_0"><h5>'+res[i].name+'</h5><small>￥'+res[i].price+'</small></div>'+
					'<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 padding_0"><img class="car" src='+res[i].car_src+'></div></div></div>';
		}
		$("#content").html(str);

		/*给特定的蛋糕添加上 new 标签*/
		var node=$("h5:contains('芒果空气感蛋糕')").parent().parent().prev();
		tag(node);
		var node=$("h5:contains('迷你纸杯')").parent().parent().prev();
		tag(node);
		var node=$("h5:contains('纯脆提拉米苏')").parent().parent().prev();
		tag(node);
		var node=$("h5:contains('黑')").parent().parent().prev();
		tag(node);

		/*给特定的蛋糕添加上hot的标签*/
		var node=$("h5:contains('草莓')").parent().parent().prev();
		tagHot(node);
		var node=$("h5:contains('伯爵茶')").parent().parent().prev();
		tagHot(node);

		/*给特定的蛋糕添加上已售罄的标签*/
		var node=$("h5:contains('红')").parent().parent().prev();
		tagSellout(node);
		var node=$("h5:contains('抹茶纸杯蛋糕')").parent().parent().prev();
		tagSellout(node);
		var node=$("h5:contains('淡奶香蕉派')").parent().parent().prev();
		tagSellout(node);


	}
	function tag(node){
		var newTag='<img src="img/tag/new.png" class="new">';
		node.append(newTag);
	}
	function tagHot(node){
		var newTag='<img src="img/tag/hot.png" class="new">';
		node.append(newTag);
	}
	function tagSellout(node){
		var newTag='<img src="img/tag/sellOut.png" class="new">';
		node.css("opacity","0.5");
		node.append(newTag);
	}

	//将产品的ID存储在在本地存储中 并跳转页面
	$("#content").on("click",".product_info",function(){
		var getId=$(this).find(".id").html();
		window.localStorage.setItem("id",getId);
		location="product_more.html";
	})
	
	//点击名称的时候同样实现跳转
	$("#content").on("click","h5",function(){
		jump($(this));
		
	})
	$("#content").on("click","small",function(){
		jump($(this));
	})
	function jump(node){
		var get_id=node.parent().parent().prev().find(".id").html();
		window.localStorage.setItem("id",get_id);
		location="product_more.html";	
	}
	
	
});