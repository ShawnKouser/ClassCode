function highlight(name) {
    document.getElementById("1stPeriod").style.backgroundColor = "White";
    document.getElementById("2ndPeriod").style.backgroundColor = "White";
    document.getElementById("3rdPeriod").style.backgroundColor = "White";
    document.getElementById("4thPeriod").style.backgroundColor = "White";
    document.getElementById(name).style.backgroundColor = "Yellow";
}

function displaySchedule() {
   

    //document.getElementById("1stPeriod").style.backgroundColor = "Yellow";
    //time
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    
    
    
    var time = ((h * 100) + m);

    console.log(time);
    if ( (time > 745)  && (time < 915) ) {
        highlight("1stPeriod");
    } else if ( (time > 920)  && (time < 1052) ) {
        highlight("2ndPeriod");
    } else if ( (time > 1137)  && (time < 1307) ) {
        highlight("3rdPeriod");
    } else if ( (time > 920)  && (time < 1052) ) {
        highlight("4thPeriod");
    }

    setInterval(displaySchedule, 1000);
}

displaySchedule();