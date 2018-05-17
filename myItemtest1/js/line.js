var xmlhttp;
if(window.XMLHttpRequest){
	xmlhttp=new XMLHttpRequest();
}else{
	 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
}
 xmlhttp.open('GET','json/in_country.json',true);//请求的方式 请求的URL  异步(true)或者同步(false)
 xmlhttp.send();//向服务器发送请求

 xmlhttp.onreadystatechange=function(){
 	
 	if(xmlhttp.readyState==4 &&xmlhttp.status==200){//响应状态
              var data=JSON.parse(xmlhttp.responseText).youlun//响应数据
              var str="";

		var sum=data.length;
		var count=6;  //一页显示5条数据
		x=Math.ceil(sum/count);
		var str8="";
		for(var l=1;l<=x;l++){
			str8+="<div class='getLeaf'><span>"+l+"页</span></div>";
		}
		document.getElementById("leaf").innerHTML=str8;
		var getleaf=document.getElementsByClassName("getLeaf");
		for(var k=0;k<getleaf.length;k++){
			getleaf[k].index=k;
					getleaf[k].onclick=function(event){
						event=window.event||event;
						var new_targ=event.target.nodeName.toLocaleLowerCase();
						if(new_targ=="span"){
							var num=event.target.innerHTML;   //获取当前页数
						}
						var num1=count*(parseInt(num)-1);
						var num2=count*parseInt(num);

						if(this.index==(getleaf.length)-1){
							if(sum%count!=0){
								num2=(sum%count)+num1;  //判断最后一页的条数 总条数/页数不能除尽时
							}
						}
						str="";
						document.getElementsByClassName("pro_list")[0].innerHTML="";  //将原有的置为空
						youlun(num1,num2); //点击哪个获取哪个页面的数据
					}
		}

		//邮轮航线拼接  第一页先显示count条
		youlun(0,count);
		function youlun(x,count){
			for(var i=x;i<count;i++){
				str+="<div class='produce_section'><div class='product_left fl'><img src="+data[i].img+"></div><div class='product_item fl'>";
				var info=data[i].info;
				for(var j=0;j<info.length;j++){
					str+="<h4>"+info[j].name+"</h4><p>"+info[j].star_place+"</p><p>"+info[j].star_date+"</p><p>"+info[j].through+"</p>"
				}
				str+="</div><div class='product_info fr'>";
				var price_h=data[i].price;
				for(var m=0;m<price_h.length;m++){
					str+="<div class='price'>"+price_h[m].pri+"</div><input type='button' value="+price_h[m].look+"></div>"
				}
				str+="</div>";
			}
			document.getElementsByClassName("pro_list")[0].innerHTML=str;
		}

             //经理推荐数据拼接
         	 var data2=JSON.parse(xmlhttp.responseText).tuijian
             var str2="";
             for(var j=0;j<data2.length;j++){
             	str2+="<div class='tj'><img src="+data2[j].img+"><p>"+data2[j].miaosu+"</p><span><b>"+data2[j].price+"</b></span></div>"
             }
              document.getElementsByClassName("proRight")[0].innerHTML=str2; 
              
                    

    }        
 }
 
 


