$(function(){
	$(".header").load("header.html");
	$(".footer").load("footer.html");
	
	/*左侧导航栏tab表格切换*/
	var tabli=$(".tab li");
	tabli.each(function(){
		$(this).click(function(){
			$(this).find("a").addClass("addclass");
			$(this).siblings().find("a").removeClass("addclass");
			var index=$(this).index();
			tabChange(index);
		});
	});
	/*顶部导航栏tab表格切换*/
	var tbchange=$(".tbchange");
	tbchange.each(function(){
		$(this).click(function(){
			$(this).addClass("show1").siblings().removeClass("show1");
			var index=$(this).index();
			tabChange(index-1);
		});
	
	});
	
	
	var banner1=$("#bannerPic01");
	var banner2=$("#bannerPic02");
	var banner3=$("#bannerPic03");
	var tabTitle=$("#tabTitle");
	var tabicon=$("#tabicon");
	function tabChange(index){
		if(index==0){
			banner1.attr("src","img/dessert_table/wedding/banner01.jpg");
			banner2.attr("src","img/dessert_table/wedding/banner02.jpg");
			banner3.attr("src","img/dessert_table/wedding/banner03.jpg");
			tabTitle.html("婚礼  甜品台定制");
			tabicon.attr("src","img/dessert_table/wedding/tip01.jpg");
			
		}else if(index==1){
			banner1.attr("src","img/dessert_table/party/banner03.jpg");
			banner2.attr("src","img/dessert_table/party/banner04.jpg");
			banner3.attr("src","img/dessert_table/party/banner05.jpg");
			tabTitle.html("派对  甜品台定制");
			tabicon.attr("src","img/dessert_table/party/tip02.jpg");
		}else{
			banner1.attr("src","img/dessert_table/tea_break/banner07.jpg");
			banner2.attr("src","img/dessert_table/tea_break/banner08.jpg");
			banner3.attr("src","img/dessert_table/tea_break/banner09.jpg");
			tabTitle.html("茶歇  甜品台定制");
			tabicon.attr("src","img/dessert_table/tea_break/tip03.jpg");
		}
	}
	
	
});