// window.onload = function() {
//     setInterval()
// }

// function updateTime() {
//     const hourEL = document.querySelector("hour");
//     const minuteEL = document.querySelector("minute");
//     const secondEL = document.querySelector("second");
//     let d = new Date();
//     let hours = d.getHours();
//     let minutes = d.getMinutes();
//     let seconds = d.getSeconds();
//     if (hours >= 0 && hours <= 9) hours = "0" + hours;
//     if (minutes >= 0 && minutes <= 9) minutes = "0" + minutes;
//     if (seconds >= 0 && seconds <= 9) seconds = "0" + seconds;     
//     hourEL.innerHTML = hours;
//     minuteEL.innerHTML = minute;
//     secondEL.innerHTML = second;
    
//     const dateEl = document.querySelector("#date");
//     let date = d.getDate();
//     if (date >= 0 && date <= 9) date = "0" + date;
//     let month = d.getmonth();
//     if (month >= 0 && month <= 9) month = "0" + month;
//     let year = d.getyear();
//     if (year >= 0 && year <= 9) year = "0" + year;
//     dateEl.innerHTML = `${date}/${month}/${year}`;


//     const dayEL = document.querySelector("#day");
//     let daynumber = d.getDay(), day = "";
//     switch (daynumber) {
//         case 0: day = "Sunday"; break;
//         case 1: day = "Monday"; break;
//         case 2: day = "Tuesday"; break;
//         case 3: day = "Wednesday"; break;
//         case 4: day = "Thrusday"; break;
//         case 5: day = "Friday"; break;
//         case 6: day = "Saturday"; break;
//     }
//     dayEL.innerHTML = day;
// }


// function Time() {
//     // Creating object of the Date class
//     var date = new Date();
//     // Get current hour
//     var hour = date.getHours();
//     // Get current minute
//     var minute = date.getMinutes();
//     // Get current second
//     var second = date.getSeconds();
//     // Variable to store AM / PM
//     var period = "";
//     // Assigning AM / PM according to the current hour
//     if (hour >= 12) {
//     period = "PM";
//     } else {
//     period = "AM";
//     }
//     // Converting the hour in 12-hour format
//     if (hour == 0) {
//     hour = 12;
//     } else {
//     if (hour > 12) {
//     hour = hour - 12;
//     }
//     }
//     // Updating hour, minute, and second
//     // if they are less than 10
//     hour = update(hour);
//     minute = update(minute);
//     second = update(second);
//     // Adding time elements to the div
//     document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
//     // Set Timer to 1 sec (1000 ms)
//     setTimeout(Time, 1000);
//    }
//     // Function to update time elements if they are less than 10
//     // Append 0 before time elements if they are less than 10
//    function update(t) {
//     if (t < 10) {
//     return "0" + t;
//     }
//     else {
//     return t;
//     }
//    }
//    Time();


