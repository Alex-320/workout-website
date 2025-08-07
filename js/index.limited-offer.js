const savedTime = JSON.parse(localStorage.getItem("countdownTime"));

let countS = savedTime ? savedTime.seconds : 5;
let countM = savedTime ? savedTime.minutes : 1;
let countH = savedTime ? savedTime.hours : 1;
let countD = savedTime ? savedTime.days : 493;

const counterS = document.getElementById("seconds");
const counterM = document.getElementById("minutes");
const counterH = document.getElementById("hours");
const counterD = document.getElementById("days");

function updateCounter() {
  countS--;

  if (countS < 0) {
    countS = 59;
    countM--;
  }

  if (countM < 0) {
    countM = 59;
    countH--;
  }

  if (countH < 0) {
    countH = 23;
    countD--;
  }

  counterS.textContent = countS;
  counterM.textContent = countM;
  counterH.textContent = countH;
  counterD.textContent = countD;

  localStorage.setItem(
    "countdownTime",
    JSON.stringify({
      days: countD,
      hours: countH,
      minutes: countM,
      seconds: countS,
    })
  );
}

setInterval(updateCounter, 1000);
