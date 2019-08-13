function timer() {
    var end = new Date('08/21/2019 00:01 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;

        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);


        document.getElementById('days').innerHTML = (days < 10) ? '0' + (days).toString() : days;
        document.getElementById('hours').innerHTML =  (hours < 10) ? '0' + (hours).toString() : hours;
        document.getElementById('minutes').innerHTML = (minutes < 10) ? '0' + (minutes).toString(): minutes;
        document.getElementById('seconds').innerHTML = (seconds < 10) ? '0' + (seconds).toString(): seconds;
    }

    timer = setInterval(showRemaining, 1000);
}

function loading(evento) {
    $("#loading").fadeOut();
    $("#loading").fadeOut("slow");
    $("#loading").fadeOut(3000, function () {
        document.getElementById("loading").style.display="none";
    });
    //
}