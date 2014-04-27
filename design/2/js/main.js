$(".button-collapse").click(function() {
    var $listholder = $(".list-holder");
    var $holders = $(".holder");
    var offsetY = 40;
    for (var i = 0; i < $holders.length; i++) {
        var $holder = $($holders[i]);

        if ($holder.hasClass("collapsed")) {
            $holder.transit({
                y: "0px",
                scale: "1, 1",
                skewX: "0deg"
            }).removeClass("collapsed");
        }
        else {
            var sign = (i % 2 == 0 ? "-" : "");
            offsetY += -80;

            $holder.transit({
                y: offsetY + "px",
                scale: "1, 0.2",
                skewX: sign + "30deg"
            }).addClass("collapsed");
        }
    }

    var listHolderHeight = $holders.length * ($($holders[0]).hasClass("collapsed") ? 20 : 100);
    $listholder.transit({"height" : listHolderHeight + "px"});
})