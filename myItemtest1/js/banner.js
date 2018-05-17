	
//轮播图部分
var imgList=document.querySelectorAll(".banner_list ul li");
var list=document.querySelectorAll(".index_list span");
var index=0;
var timer;

function moveImg(list,index){
	for(var i=0;i<list.length;i++){
		if(list[i].className="pic_on"){
			list[i].className="";
		}
	}
	list[index].className="pic_on";
}

function moveIndex(list,index){
	for(var i=0;i<list.length;i++){
		if(list[i].className="list_on"){
			list[i].className="";
			
		}
	}
	list[index].className="list_on";
}


for(var i=0;i<list.length;i++){
	list[i].index=i;
	list[i].onmouseover=function(){
		var clickIndex=this.index;
		index=clickIndex;
		moveImg(imgList,index);
		moveIndex(list,index);
		clearInterval(timer);
	}
	list[i].onmouseleave=function(){  //当鼠标离开的时候继续轮播
		play();
	}
}

var nextMove=function(){
	index+=1;
	if(index>=6){
		index=0;
	}
	moveImg(imgList,index);
	moveIndex(list,index);
};

var play=function(){
	timer=setInterval(function(){
		nextMove();
	},3000);
};
play();

//特色酒店动态效果部分
var myPic=document.querySelectorAll("#hotal_sty li");
for(var i=0;i<myPic.length;i++){
	myPic[i].index=i;
	myPic[i].onmouseover=function(){
		var index=this.index;
		for(var j=0;j<myPic.length;j++){
			myPic[j].style.width="133px";
			myPic[j].style.transition="all 0.5s";
		}
		myPic[index].style.width="400px";
		myPic[index].style.transition="all 0.5s";
	}
	myPic[i].onmouseleave=function(){
		for(var j=0;j<myPic.length;j++){
			if(j==3){
				myPic[j].style.width='168px';
			}else{
				myPic[j].style.width='172px';
			}	
		}
	}

}










