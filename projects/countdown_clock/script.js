
//function to update counter every 1 second - have used named function to call it immediately THEN start interval afterwards.
function startCountdown() {
    var countdownDate = new Date("April 5, 2063 18:00:00").getTime(); //date and time we want to countdown to
    var today = new Date().getTime();
    var distance = countdownDate - today;

    //time calculations for days, hours, minutes and seconds left until countdown date   
    var milliSecDays = 1000 * 60 * 60 * 24;
    var milliSecHours = 1000 * 60 * 60;
    var milliSecMins = 1000 * 60;
    
    var days = Math.floor(distance / milliSecDays);
    var hours = Math.floor((distance % milliSecDays) / milliSecHours);
    var minutes = Math.floor((distance % milliSecHours) / milliSecMins);
    var seconds = Math.floor((distance % milliSecMins) / 1000);

    //results are displayed as output to specific elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    //starts the interval for counting down after first function call - this prevents a delay so countdown start immediately.
    setInterval(startCountdown, 1000);
 
    //when countdown is over time is cleared and message is displayed
    if (distance < 0) {
        clearInterval(startCountdown);

        document.querySelectorAll(".text-display").forEach((element) => {
        element.innerHTML = "0";
        document.getElementById("endtext").innerHTML = "The countdown is over! Zefram Cochrane is the first human to travel at warp speed and make first contact with the Vulcans!";
        });

    };
 
}
