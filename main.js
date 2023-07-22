const clock = document.getElementById("time");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const date = new Date();

function addZero(time) {
  return time < 10 ? "0" + time : time;
}

let secondsNow = addZero(date.getSeconds());;
let hoursNow = addZero(date.getHours());
let minutesNow = addZero(date.getMinutes());

function showTime() {
  setInterval(() => {

    const date = new Date();
    secondsNow = addZero(date.getSeconds());

    if (minutesNow == "00") {
      hoursNow = addZero(date.getHours());
      hours.innerHTML = `${hoursNow}:`;
    }

    if (secondsNow == "00") {
      minutesNow = addZero(date.getMinutes());
      minutes.innerHTML = `${minutesNow}:`;
    }
    seconds.innerHTML = `${secondsNow}`;
  }, 1000);
  hours.innerHTML = `${hoursNow}:`;
  minutes.innerHTML = `${minutesNow}:`;
}

showTime();