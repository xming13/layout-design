$(document).ready(function() {

    start(true);

    $(".clock-front").click(function() {
        $(this).transit({ rotateY: "180deg" });
        $(".clock-back").transit({ rotateY: "0deg" });
    });
    $(".clock-back").click(function() {
        $(this).transit({ rotateY: "180deg" });
        $(".clock-front").transit({ rotateY: "0deg" });
    });

    function start(isFirstLoad) {
        var hourRotate = "+=0.0016666666deg";
        var minuteRotate = "+=0.1deg";
        var secondRotate = "+=6deg";

        if (isFirstLoad) {
            var dateNow = new Date();
            hourRotate = dateNow.getHours() * 30 + dateNow.getMinutes() / 2  + dateNow.getSeconds() / 120 + "deg";
            minuteRotate = dateNow.getMinutes() * 6 + 0.1 * dateNow.getSeconds() + "deg";
            secondRotate = dateNow.getSeconds() * 6 + "deg";
        } else {
            $(".hour-hand, .minute-hand, .second-hand").show();
        }

        $(".hour-hand").transit({
            x: "-50%",
            y: "-50%",
            rotate: hourRotate
        }, 1000);

        $(".minute-hand").transit({
            x: "-50%",
            y: "-50%",
            rotate: minuteRotate
        }, 1000);

        $(".second-hand").transit({
            x: "-50%",
            y: "-50%",
            rotate: secondRotate
        }, 1000, function() { start(false); } );
    }
});