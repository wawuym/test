window.onload=function(){
//	alert("你好");
	var li=document.querySelectorAll(".p_list li");
	var ul=document.querySelectorAll(".p1 ul");
	
	var li_1=document.querySelectorAll(".pp_list li");
	var ul_1=document.querySelectorAll(".p2 .de_pic");
	
	my_table(li,ul);  	//目的地指数 国内
	my_table(li_1,ul_1);  //目的地指数 海外

function my_table(li_list,tab_ul){
	//设置第一个选项 的默认样式
	li_list[0].style.color="white";
	li_list[0].style.backgroundColor="#FF5555";
	li_list[0].style.borderRadius="50px";

	tab_ul[0].style.display="block";
	
	for(var i=0;i<li_list.length;i++){
		li_list[i].index=i;
		li_list[i].onclick=function(){
			for(var j=0;j<tab_ul.length;j++){
				tab_ul[j].style.display="none";
				li_list[j].style.color="";
				li_list[j].style.backgroundColor="";
				li_list[j].style.borderRadius="";
			}
			tab_ul[this.index].style.display="block";
			li_list[this.index].style.color="white";
			li_list[this.index].style.backgroundColor="#FF5555";
			li_list[this.index].style.borderRadius="50px";
			
		 }
	 }	
 }

//旅游指南的轮播图切换效果
var left_tab=document.getElementById("left_tab");
var left_li=left_tab.getElementsByTagName("li");
var imgList=document.getElementById("imgList");
var leftPic=imgList.getElementsByTagName("img");
var green=document.getElementsByClassName("green");

left_li[0].className="tab_on";
green[0].style.display="block";

for(var i=0;i<left_li.length;i++){
	left_li[i].index=i;
	left_li[i].onmouseover=function(){
		var index=this.index;
		for(var j=0;j<left_li.length;j++){
			left_li[j].className="";
			leftPic[j].style.display="none";
			green[j].style.display="none";
		}
		left_li[index].className="tab_on";
		leftPic[index].style.display="block";
		green[index].style.display="block";
	}
  }
//关键字
	var keyWord=document.getElementById("keyWord");
	keyWord.onfocus=function(){
		var key=keyWord.value
		if(key=="商圈/位置/酒店名"){
			keyWord.value="";
		}	
	}
	keyWord.onblur=function(){
		var key=keyWord.value
		if(key==""){
			keyWord.value="商圈/位置/酒店名";
		}
	}
//目的地
var fina=document.getElementById("fina");
var hot=document.getElementById("hot");
var hop_place=document.getElementsByClassName("hop_place")[0];
	fina.onfocus=function(){
		hot.style.height="216px";
	}
	fina.onblur=function(){
		hot.style.height="0px";
	}
	//事件委托
	hop_place.onclick=function(event){
		event=event||window.event;
		var new_targ=event.target.nodeName.toLocaleLowerCase();
		if(new_targ=="dd"){
			fina.value=event.target.innerHTML;
		}
	}


	
}



