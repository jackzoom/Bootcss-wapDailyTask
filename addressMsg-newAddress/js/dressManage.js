/**
 * Created by Administrator on 2017/9/10.
 */
$(function(){
    $("#new_address").click(function () {
        window.location.href="newAddress.html";
    });
    //鼠标指向编辑、删除按钮的事件
    $(".btn_edit").mouseover(function(){
        $(this).css("color","black");
        $(this).css("background","#ccc");
    });
    $(".btn_edit").mouseout(function(){
        $(this).css("color","");
        $(this).css("background","");
    });

    //设为默认checkbox事件
    $(".checkbox").click(function () {
        var a=$(".checkbox").index(this);//获取用户点击事件的索引
        for(var i=0;i<$(".checkbox").length;i++){
            $(".checkbox").eq(i).css("color","");
            $(".checkbox").eq(i).css("border","");
            $(".checkbox").eq(i).css("background","");
            $(".list_item").eq(i).css("color","");
        }

        if($(".checkbox").eq(a).css("color")!="RGBA(0,0,0,0)"){
            $(this).css("color","white");
            $(this).css("border","orange");
            $(this).css("background","orange");
            $(".list_item").eq(a).css("color","orange");
        }//通过点击事件的span索引，给选中的列表修改样式
    });

    //鼠标指向地址列表样式
    $(".list_item").mouseover(function () {
        $(this).css("background","white");
    });
    $(".list_item").mouseout(function () {
        $(this).css("background","");
    })

    

})