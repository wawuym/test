/**
 * Created by 27219 on 2018/4/13.
 */
//�ӱ��ش洢��ȡ�û���������

    var localUser=window.localStorage.getItem('username');
    var user=document.getElementById("user");
    if(localUser==null){
        user.style.display="none";
    }else{
        user.style.display="inline-block";
        user.style.width="80px";
        localUser=localUser.split("|");
        document.getElementById("user").innerHTML="welcome"+localUser[localUser.length-1];
    }

