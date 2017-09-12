/**
 * Created by Administrator on 2017/9/10.
 */
$(function(){
    //返回上一步事件
    $(".return").click(function () {
        javascript:history.go(-1);
    });

    //设为默认勾选事件
    var selected=false;
    $(".selected").click(function(){
        if(!selected){
            $(this).css("color","white");
            $(this).css("background","orange");
            $(this).css("border","1px solid orange");
            selected=true;
        }
        else
        {
            $(this).css("color","transparent");
            $(this).css("background","transparent");
            $(this).css("border","");
            selected=false;
        }
    });

    //设置鼠标指向样式
    $(".btn_save").mouseover(function () {
        $(this).css("color","black");
    });
    $(".btn_save").mouseout(function () {
        $(this).css("color","");
    });

    //输入信息初始化
    var $data_address={
        user:"",
        phone:"",
        address:"",
        default:false
    };
    //保存事件
    $(".save").click(function () {
        $data_address.user=$(".edit_text")[0].value;
        $data_address.phone=$(".edit_text")[1].value;
        $data_address.address=$(".edit_text")[2].value;
        if(selected===true){
            $data_address.default=true;//给键值中的default添加状态
        }
        else
        {
            $data_address.default=false;
        }
        //console.log(selected,$data_address);
        window.location.href="dressManage.html";//跳转页面
    });


})