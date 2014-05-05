var sum = 0;
$(function () {
    $("#scroll_left").on("click", click_left);
    $("#scroll_right").on("click", click_right);
});

$(window).load(function () {
    
    $("a").each(function () {
        //console.log(index + ": " + $(this).text());
        sum = sum + $(this).width();
    });

    $("div.container_img").width(sum);
    console.log(sum);


    });

function click_left() {
    console.log("Нажата влево");
    $(".container_img").animate({ "margin-left": "+=100px" }, "slow");
};

function click_right() {
    console.log("Нажата вправо");
    $(".container_img").animate({ "margin-left": "-=100px" }, "slow");
};