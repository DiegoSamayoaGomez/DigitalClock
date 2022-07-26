function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var anio = date.getFullYear();
    var month = date.getMonth() +1;
    var day = date.getDate() ;

    var period = "";
    if (hour >= 12) {
        period = "PM";
    } else {
        period = "AM"
    }

    //Convert HOUR to 12-hour format
    if (hour == 0) {
        hour = 12;


    } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }

    //Update hour
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    anio = update(anio);
    month = update(month);
    day = update(day);

    /*document.getElementById("hour").innerText = hour + " : " + minute + " : "
        + second + " " + period;
*/


    document.getElementById("hour").innerText = hour;
    document.getElementById("minute").innerText = minute;
    document.getElementById("second").innerText = second;
    document.getElementById("AM-PM").innerText = period;
    document.getElementById("date").innerText =  day + " " + month + " " + anio;
    


    setTimeout(Time, 1000);

}

// Function to update time elements if they are less than 10
// Append 0 before time elements if they are less than 10
function update(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
Time();

