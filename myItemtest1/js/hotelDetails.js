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

//    �ӱ��ش洢�л�ȡ��ƷID;
    var proID;
    var proID=window.localStorage.getItem('id');
    if(proID!=""){
        var xmlhttp;//ȫ�ֵĶ���ı���
        if(window.XMLHttpRequest) {//�ж�������ļ�����
            xmlhttp=new XMLHttpRequest();//new ������Ը߰汾
        }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");//IE6,IE5
        }
        xmlhttp.open('GET','php/hotel.php?proID='+proID,true);//����ķ�ʽ �����URL  �첽(true)����ͬ��(false)
        xmlhttp.send();//���������������
        xmlhttp.onreadystatechange=function () {//��Ӧ�¼�
            if(xmlhttp.readyState==4 &&xmlhttp.status==200){//��Ӧ״̬
                var json=xmlhttp.responseText;
                dom("hotelName").innerHTML=json;

            }
        }
    }




}

