/**
 * Created by 27219 on 2018/5/7.
 */

$(function(){
    var data1;
    var data2;
    var proID=window.localStorage.getItem('id');
    $.ajax({
        type:"get",
        url:'php/product_moreDate3.php?proID='+proID,
        async:true,
        dataType:'json',
        success:function(res){
            window.sessionStorage.setItem("data1",JSON.stringify(res));
        },error:function(res){
        }
    });
    $.ajax({
        type:"get",
        url:'php/product_moreDate.php?proID='+proID,
        async:true,
        dataType:'json',
        success:function(res){
            window.sessionStorage.setItem("data2",JSON.stringify(res));

        },error:function(res){
        }
    });
    $.ajax({
        type:"get",
        url:'php/product_moreDate2.php?proID='+proID,
        async:true,
        dataType:'json',
        success:function(res){
            
            window.sessionStorage.setItem("data3",JSON.stringify(res));
            var data1=window.sessionStorage.getItem("data1");
            var data2=window.sessionStorage.getItem("data2");
            var data3=window.sessionStorage.getItem("data3");
            data1=JSON.parse(data1);
            data2=JSON.parse(data2);
            data3=JSON.parse(data3);
          content(data1,data2,data3);
        },error:function(res){
        }
    });

  //拼接
    function content(data1,data2,data3){
        var strBuffer=[];
        var str1="";
        var str="";
        str="";
        str+='<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 " ><img class="img-responsive product_first" src='+data1[0].img_src+".jpg"+' style="width: 100%;"></div>'+
            '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12" id="myContent">';
        for(var j=0;j<data1.length;j++){
            str+= '<img class="img-responsive product_pho product_op" src='+data1[j].img_src+'.jpg>';
        }
        str+="</div>";
        $("#main").prepend(str);
        for(var i=0;i<data2.length;i++){

            str1+= '<div class="row"><div class="col-lg-7 col-md-7"><h2 class="col-lg-12 col-sm-12 col-md-12 col-xs-12 name">'+data2[i].name+'</h2>'+
                '<h3 class="col-lg-12 col-sm-12 col-md-12 col-xs-12 price"><span>&yen;</span><span class="pri">'+data2[i].price+'</span></h3>'+
                '<p class="col-lg-12 col-sm-12 col-md-12 col-xs-12">'+data2[i].script+'</p>'+
                '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 product_pq">';
            for(var x=0;x<data3.length;x++){
                str1+='<a href="#">'+data3[x].tag_script+'</a>';
            }
           str1+='<div class="container col-lg-12 col-sm-12 col-md-12 col-xs-12 padding_0"><div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 hr"></div></div>'+
                '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 padding_0"><span>您当前选择的城市是：</span><span style="color:red ">上海</span></div>'+
                '<div class="container col-lg-12 col-sm-12 col-md-12 col-xs-12 padding_0"><div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 hr"></div></div>'+
                '<p class="col-lg-12 col-sm-12 col-md-12 col-xs-12 product_p padding_0">口味亮点</p>'+
                '<p class="col-lg-12 col-sm-12 col-md-12 col-xs-12 product_p padding_0">'+data2[i].star+'</p></div></div>'+
                   '<div class="col-lg-5 col-md-5"><div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 product_big"><span class=""><b>6寸</b></span></div>'+
                   '<span class="col-lg-12 col-sm-12 col-md-12 col-xs-12 mail">&yen;<span class="product_price">180</span><span class="jian"><b>-</b></span>'+
                   '<input class="num" value="1" type="number"><span class="jia"><b>+</b></span>'+
                   '<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 product_happy padding_0"><span class="now"><b>立即购买</b></span><span class="shopping_car">'+
                   '<b><i class="iconfont">&#xe600;</i>加入购物车</b></span></div>';

        }
        $("#myContent").append(str1);
        var x=$("h3").html();
        x=x.split("¥")[1];
        $(".product_price").html(x);
        $(".product_happy").on("click",".shopping_car",function(){
            var goodsPrice=$(".product_price").html();
            var goodsName=$(".name").html();
            var goodsNum=$(".num").val();
            var goodsSrc=$(".product_op").attr("src");
            
            
            var username=sessionStorage.getItem("username");
            if(username==null){
            	alert("还没有登陆，请登陆");
            	var car=window.sessionStorage.setItem("car","1");
            	location="login.html";
            }else{
            	var car=window.sessionStorage.setItem("car","0");
            	 $.ajax({
               
                type:'get',
                
                url:'php/shopping.php',
                
                async:true,
                data:{"goodsName":goodsName,"goodsSrc":goodsSrc,"goodsPrice":goodsPrice,"goodsNum":goodsNum,"username":username},
                success:function(res){
                    alert(res);
                },error:function(res){
                    console.log(res);
                }
            })
            	
            }
         
        })
        
    
    }
    
   
		
})