/**
 * Created by admin on 2018/4/12.
 */
window.onload=function(){
    function dom(e){
        return document.getElementById(e);
    }
    var img_list=dom('pic_list').getElementsByTagName("li");
    for(var i=0;i<img_list.length;i++){
        img_list[i].index=i;
        img_list[i].onmouseover=function(){
            img_list[this.index].style.transform="translateY(-10px)";
            img_list[this.index].style.transition="all 0.3s ease-in-out";
            img_list[this.index].style.boxShadow="0 5px 8px #ccc";
        }
        img_list[i].onmouseleave=function(){
            img_list[this.index].style.transform="translateY(0px)";

        }
    }

//    从本地存储中获取商品ID;
    var proID;
    var proID=window.localStorage.getItem('id');
    if(proID!=""){
        var xmlhttp;//全局的对象的变量
        if(window.XMLHttpRequest) {//判断浏览器的兼容性
            xmlhttp=new XMLHttpRequest();//new 对象，针对高版本
        }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
        }
        xmlhttp.open('GET','php/hotel.php?proID='+proID,true);//请求的方式 请求的URL  异步(true)或者同步(false)
        xmlhttp.send();//向服务器发送请求
        xmlhttp.onreadystatechange=function () {//响应事件
            if(xmlhttp.readyState==4 &&xmlhttp.status==200){//响应状态
                var json=xmlhttp.responseText;
                dom("hotelName").innerHTML=json;

            }
        }
    }




}

