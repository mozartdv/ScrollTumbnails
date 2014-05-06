var sum = 0;
var dWidth = 0;
var dWidthTemp = 0;
$(function () {
    //$("#scroll_left").on("click", click_left);
    //$("#scroll_right").on("click", click_right);
});

$(window).load(function () {
    
    $("a").each(function () {
        //console.log(index + ": " + $(this).text());
        sum = sum + $(this).width();
    });

    $("div.container_img").width(sum);
    console.log(sum);
    dWidth = sum - $("div.container_scroll").width();
    dWidthTemp = dWidth;
    console.log(dWidth);

    if (dWidth>0) {
        $("#scroll_left").on("click", click_left);
        $("#scroll_right").on("click", click_right);
    }
    });

function click_left() {
    console.log("Нажата влево");
    //$(".container_img").animate({ "margin-left": "+=100px" }, "slow");
    if (dWidthTemp <= (dWidth - 100)) {
        $(".container_img").animate({ "margin-left": "+=100px" }, "slow");
        dWidthTemp = dWidthTemp + 100;
    }
    else {
        if (dWidthTemp != dWidth) {
            $(".container_img").animate({ "margin-left": "+=" + (dWidth - dWidthTemp) + "px" }, "slow");
            dWidthTemp = dWidth;
        }
        
    }
};

function click_right() {
    console.log("Нажата вправо");
    if (dWidthTemp>=100) {
        //$(".container_img").animate({ "margin-left": "-=100px" }, "slow");
        $(".container_img").animate({ "margin-left": "-=" + 100 + "px" }, "slow");
        dWidthTemp = dWidthTemp - 100;
    }
    else {
        if (dWidthTemp>0) {
            $(".container_img").animate({ "margin-left": "-=" + dWidthTemp + "px" }, "slow");
            dWidthTemp = 0;
        }
    }
    
};