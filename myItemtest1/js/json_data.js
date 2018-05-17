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
              var json=JSON.parse(xmlhttp.responseText)//响应数据
              var str="";
              var str2="";
              //目的地指数国内
              for(var i=0;i<6;i++){
              	str+="<ul class='de_pic mytab'>";
              	for(var j=0;j<4;j++){
              		switch (i){
              			case 0:
              				str+="<li><a href=''><img src="+json.group.one[j].img+"></a><p class='txt'>"+json.group.one[j].word+"</p></li>"
              				break;
              			case 1:
              			   str+="<li><a href=''><img src="+json.group.two[j].img+"></a><p class='txt'>"+json.group.two[j].word+"</p></li>"
              				break;
              			case 2:
              				str+="<li><a href=''><img src="+json.group.three[j].img+"></a><p class='txt'>"+json.group.three[j].word+"</p></li>"
              				break;
              			case 3:
              			   str+="<li><a href=''><img src="+json.group.four[j].img+"></a><p class='txt'>"+json.group.four[j].word+"</p></li>"
              				break;
              			case 4:
              				str+="<li><a href=''><img src="+json.group.five[j].img+"></a><p class='txt'>"+json.group.five[j].word+"</p></li>"
              				break;
              			case 5:
              			   str+="<li><a href=''><img src="+json.group.six[j].img+"></a><p class='txt'>"+json.group.six[j].word+"</p></li>"
              				break;
              			default:
              				break;
              		}
              		
              	}
              	str+="</ul>";
              }
              document.getElementsByClassName("p1")[0].innerHTML=str;
              
              //目的地指数 国外
              for(var a=0;a<5;a++){
              		str2+="<ul class='de_pic mytab1'>";
              	for(var b=0;b<4;b++){
              		switch (a){
              			case 0:
              				str2+="<li><a href=''><img src="+json.group_two.one[b].img+"></a><p class='txt'>"+json.group_two.one[b].word+"</p></li>"
              				break;
              			case 1:
              			   str2+="<li><a href=''><img src="+json.group_two.two[b].img+"></a><p class='txt'>"+json.group_two.two[b].word+"</p></li>"
              				break;
              			case 2:
              				str2+="<li><a href=''><img src="+json.group_two.three[b].img+"></a><p class='txt'>"+json.group_two.three[b].word+"</p></li>"
              				break;
              			case 3:
              			   str2+="<li><a href=''><img src="+json.group_two.four[b].img+"></a><p class='txt'>"+json.group_two.four[b].word+"</p></li>"
              				break;
              			case 4:
              				str2+="<li><a href=''><img src="+json.group_two.five[b].img+"></a><p class='txt'>"+json.group_two.five[b].word+"</p></li>"
              				break;
              			default:
              				break;
              		}
              		
              }
              	str2+="</ul>";
                document.getElementsByClassName("p2")[0].innerHTML=str2;
          }
       
              
    }
 }


