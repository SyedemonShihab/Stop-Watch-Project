var minute = 0;
var second = 0;
var counter = 0;

var timer = false;
function start() {
  timer = true;
  switchWatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  minute = 0;
  second = 0;
  counter = 0;
  document.getElementById("minute").innerHTML = "00";
  document.getElementById("second").innerHTML = "00";
  document.getElementById("mili-second").innerHTML = "00";
}
function switchWatch() {
  if (timer == true) {
    counter = counter + 1;

    if (counter == 99) {
      second = second + 1;
      counter = 0;
    }
    if (second == 59) {
      minute = minute + 1;
      second = 0;
    }
    if (second == 5) {
      document.body.style.background = "#f3f3f3 ";
    }
    if (second == 10) {
      document.body.style.background = "#A3C7D6 ";
    }
    if (second == 15) {
      document.body.style.background = "#7858A6 ";
    }
    if (second == 20) {
      document.body.style.background = "#647E68 ";
    }
    if (second == 25) {
      document.body.style.background = "#F73D93 ";
    }
    if (second == 30) {
      document.body.style.background = "#AF0171 ";
    }
    if (second == 35) {
      document.body.style.background = "#C74B50 ";
    }
    if (second == 40) {
      document.body.style.background = "#0F3460 ";
    }
    if (second == 45) {
      document.body.style.background = "#D89216 ";
    }
    if (second == 50) {
      document.body.style.background = "#A5C9CA ";
    }
    if (second == 58) {
      document.body.style.background = "#1597BB ";
    }

    let minuteString = minute;
    let secondString = second;
    let counterString = counter;
    if (minute < 10) {
      minuteString = "0" + minuteString;
    }
    if (second < 10) {
      secondString = "0" + secondString;
    }
    if (counter < 10) {
      counterString = "0" + counterString;
    }

    document.getElementById("minute").innerHTML = minuteString;
    document.getElementById("second").innerHTML = secondString;
    document.getElementById("mili-second").innerHTML = counterString;
    setTimeout("switchWatch()", 9);
  }
}
