$(".container").click(function(){
    $(this).animate({height: "343px", overflow: "visible"}, 300);
    $(this).siblings().animate({height: "100px", overflow: "visible"}, 300);
})
