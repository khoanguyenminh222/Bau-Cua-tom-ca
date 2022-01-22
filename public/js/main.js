

$(document).ready(function() {
    $(".result").css("display","none");
    $("#btnOpen").css("display","none");
    $("#btnNext").css("display","none");

    $("#btnOpen").click(function(){
        $("#btnOpen").css("display","none");
        $(".result").css("display","flex");
        $(".shake").css("display","none");
        $("#btnNext").css("display","block");
    })

    $("#btnShake").click(function(){
        $(".itemShake").css("animation","shake 0.5s");
        $(".itemShake").css("animation-iteration-count","infinite");


        var r1,r2,r3;
        for(i=0;i<100;i++){
            r1 = Math.floor(Math.random() * 6);
            r2 = Math.floor(Math.random() * 6);
            r3 = Math.floor(Math.random() * 6);
        }
        $("img")[0].src=`/images/${r1}.png`;
        $("img")[1].src=`/images/${r2}.png`;
        $("img")[2].src=`/images/${r3}.png`;
        $("#btnOpen").css("display","block");
        console.log(r1);
        $("#btnShake").css("display","none");
        
    })

    $("#btnNext").click(function(){
        $(".result").css("display","none");
        $("#btnOpen").css("display","none");
        $(".shake").css("display","flex");
        $("#btnNext").css("display","none");
        $("#btnShake").css("display","block");
    })
});
