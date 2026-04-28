function currentTime() {

    let theTime = new Date();

    let hours = theTime.getHours();

    let minutes = theTime.getMinutes();

    let seconds = theTime.getSeconds();

    let theDay = theTime.getDay();
    const daysoftheweek = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

    let AMPM = "AM";
    if (hours >= 12) {
        AMPM = "PM"
    }

    if (hours > 12) {
        hours = hours % 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    //display in html page

    document.getElementById("day").innerHTML = daysoftheweek[theDay];

    document.getElementById("hour").innerHTML = hours;

    document.getElementById("min").innerHTML = minutes;

    document.getElementById("sec").innerHTML = seconds;

    document.getElementById("ampm").innerHTML = AMPM;

    let evenSeconds = seconds % 2;

    if (evenSeconds === 0) {
        document.getElementById("colon1").style.color = "green";
        document.getElementById("colon2").style.color = "green";
    }
    else {
        document.getElementById("colon1").style.color = "blue";
        document.getElementById("colon2").style.color = "blue";
    }

}

//set an Interval for time

setInterval(() => {
    currentTime();
}, 1000);