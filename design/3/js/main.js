$(document).ready(function() {

    start(true);

    function start(isFirstLoad) {
        var hourRotate = "+0.0016666666deg";
        var minuteRotate = "+=0.1deg";
        var secondRotate = "+=6deg";

        if (isFirstLoad) {
            var dateNow = new Date();
            var hourNow = dateNow.getHours();
            var minuteNow = dateNow.getMinutes();
            var secondNow = dateNow.getSeconds();

            hourRotate = dateNow.getHours() / 60 * 360 + "deg";
            minuteRotate = dateNow.getMinutes() / 60 * 360 + "deg";
            secondRotate = dateNow.getSeconds() / 60 * 360 + "deg";
        } else {
            $(".hour-hand").show();
            $(".minute-hand").show();
            $(".second-hand").show();
        }

        $(".hour-hand").transit({
            x: "-50%",
            y: "-50%",
            rotate: hourRotate
        });

        $(".minute-hand").transit({
            x: "-50%",
            y: "-50%",
            rotate: minuteRotate
        });

        $(".second-hand").transit({
            x: "-50%",
            y: "-50%",
            rotate: secondRotate
        }, 1000, function() { start(false); } );
    }
});