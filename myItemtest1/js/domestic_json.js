
var xmlhttp;
var data2;
if(window.XMLHttpRequest){
	xmlhttp=new XMLHttpRequest();
}else{
	 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
}
 xmlhttp.open('GET','json/in_country.json',true);//请求的方式 请求的URL  异步(true)或者同步(false)
 xmlhttp.send();//向服务器发送请求
 xmlhttp.onreadystatechange=function(){
 	if(xmlhttp.readyState==4 &&xmlhttp.status==200){//响应状态
              var data=JSON.parse(xmlhttp.responseText).hot_area;//响应数据
              var str="";

              //国内酒店---热门度假区  数据拼接
             for(var i = 0 ;i<data.length;i++){
             	str+= '<div class ="divJs" id ="divData'+i+'"><h4 class="title_style">'+data[i].title+"</h4>"+' <p class="sc">'+data[i].maosu+'</p>'+'<ul>';
             	var img = data[i].image;
             	for(var j = 0;j<img.length;j++){
             	str+= 	'<li><a href=""><img src="'+img[j].img+'"/><span class="txt">'+img[j].word+
             	'</span></a><span class="price">'+img[j].price+'</span></li>';
             	}
             	str+='</ul></div>';
             }
          document.getElementById("my").innerHTML=str;
		data2=JSON.parse(xmlhttp.responseText).discout_hotal;

    }
 }

//选项卡显示与隐藏
window.onload=function(){
   	//热门区域
	var li_1=document.querySelectorAll(".area_list ul li");
	var ul_1=document.getElementsByClassName("divJs");
	
	li_1[0].style.background="orangered";
	li_1[0].style.color="white";
	ul_1[0].style.display="block";
	
	for(var i=0;i<li_1.length;i++){
		li_1[i].index=i;
		li_1[i].onmousemove=function(){
			for(var j=0;j<li_1.length;j++){
				ul_1[j].style.display="none";
				li_1[j].style.background="";
				li_1[j].style.color="black";
			}
			ul_1[this.index].style.display="block";
			li_1[this.index].style.background="orangered";
			li_1[this.index].style.color="white";
		}
	}
	
	
	
	//特价酒店
	//拼接特加酒店的第一个UL
//	var str3="";
	var str2="";
	var deals_ul=document.getElementById("deals_ul");
	str2+="<ul class='de_pic deals_style'>";
			var img2=data2[0].image;
		  	for(var k=0;k<data2.length;k++){
		  		  str2+="<li><a href=''><img src="+img2[k].img+"><span class='txt'>"+img2[k].name+"</span></a><span class='price'>"+img2[k].price+"</span></li>";
		  	}
			str2+="</ul>";
		deals_ul.innerHTML=str2;
		 
	var li_2=document.querySelectorAll(".discout_hotal_list li");
	var ul_2=document.getElementsByClassName("deals_style");
	 
	li_2[0].style.color="orangered";	
	for(var z=0;z<li_2.length;z++){
		li_2[z].x=z;
		li_2[z].onclick=function(){
			for(var m=0;m<li_2.length;m++){
				li_2[m].style.color="";
			}
			li_2[this.x].style.color="orangered";
			
			deals_ul.innerHTML="";
			
			var str3="";
			 str3+="<ul class='de_pic deals_style'>";
			var img3=data2[this.x].image;    //点击哪个拼接哪个
			//console.log(img3[0].img);
		  	for(var l=0;l<data2.length;l++){
		  		  str3+="<li><a href=''><img src="+img3[l].img+"><span class='txt'>"+img3[l].name+"</span></a><span class='price'>"+img3[l].price+"</span></li>";
		  	}
			str3+="</ul>"
		 	deals_ul.innerHTML=str3;
		}
		
	}

	   //主题推荐部分 菜单栏的特效
	   var picSrc="jingpin";
	   var zhuTi_jsStyle=document.querySelectorAll(".zhuTi_jsStyle li");
	   for(var i=0;i<zhuTi_jsStyle.length;i++){
		   zhuTi_jsStyle[i].index=i;
		   zhuTi_jsStyle[i].onclick=function(){
			   for(var j=0;j<zhuTi_jsStyle.length;j++){
				   zhuTi_jsStyle[j].firstChild.style.display="block";
				   zhuTi_jsStyle[j].children[1].style.display="none";
			   }
				var index=this.index;
			 	 zhuTi_jsStyle[index].firstChild.style.display="none";
				zhuTi_jsStyle[index].children[1].style.display="block";
			   switch (index){   //根据点击的不同的索引拼接不同的数据
				   case 0:
					   picSrc="jingpin";
					   getImgTab(picSrc);
					   break;
				   case 1:
					   picSrc="jiudiankong";
					   getImgTab(picSrc);
					   break;
				   case 2:
					   picSrc="oldculture";
					   getImgTab(picSrc);
					   break;
				   case 3:
					   picSrc="goodsight";
					   getImgTab(picSrc);
					   break;
				   case 4:
					   picSrc="happythem";
					   getImgTab(picSrc);
					   break;
			   }
			   //console.log(picSrc);
		   }
	   }
//从数据库里面取数据 拼接到主题推荐部分
	   function getImgTab(x){

		   var jpXml;//定义对象的变量
		   if(window.XMLHttpRequest) {//判断浏览器的兼容性
			   jpXml=new XMLHttpRequest();//new 对象，针对高版本
		   }else{
			   jpXml=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
		   }
		   jpXml.open('GET','php/'+x+'.php',true);//请求的方式 请求的URL  异步(true)或者同步(false)
		   jpXml.send();//向服务器发送请求
		   jpXml.onreadystatechange=function () {//响应事件
			   if(jpXml.readyState==4 &&jpXml.status==200){//响应状态
				   var json=JSON.parse(jpXml.responseText)//响应数据
				   //console.log(json);
				   var str="";
				   document.getElementsByClassName("dealsJs")[0].innerHTML='';//拼接之前先把原有的数据清空
				   str+="<ul class='de_pic'>";
				   for(var i=0;i<json.length;i++){
					   str+="<li><a href='javascript:void(0)' id='alink'><img src="+json[i].src+"><span class='txt'>"+json[i].name+
						   "</span></a><span class='proID'>"+json[i].Id+"</span><span class='price'>"+json[i].price+"</span></li>";
				   }
				   str+="</ul>";
				   document.getElementsByClassName("dealsJs")[0].innerHTML=str;

					var id1=document.getElementsByClassName("proID");//获取动态生成的图片的ID
				  	var myLi=document.querySelectorAll(".dealsJs li");
				   getlink(id1,myLi);

			   }
		   }
	   }
	   getImgTab(picSrc);

	   function getlink(idl,myLi){
		   for(var i=0;i<myLi.length;i++){
			   myLi[i].index=i;
			   myLi[i].onclick=function(){
				  var mm=idl[this.index].innerHTML;
				   window.localStorage.setItem('id',mm);//将每个商品的id存入本地存储
				   location = "hotelDetails.html"; //并跳转页面
			   }
		   }
	   }


}

 	


