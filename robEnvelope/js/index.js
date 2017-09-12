/**
 * Created by Administrator on 2017/9/12.
 */
$(function(){
    $(".rob_clickBtn").click(function(){
        //点击打开红包后修改样式
        $("#rob_item").css({"background":"url('img/redpaper-open.png')",
            "background-size":"cover",
            "transition": "all 1s cubic-bezier(.37,.67,.83,.87)"});

        $(".rob_clickBtn,.rob_bigMoney").css("z-index","-2");
        //设置延时出现打开后的红包
        setTimeout(function(){
            $(".rob_opened").css("z-index","555");
        },1000);
    })
})