const hourE1 = document.querySelector(".hour");
const minuteE1 = document.querySelector(".minute");
const secondE1 = document.querySelector(".seconds");

function updateClock(){
  const currentDate = new Date();
  setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const seconds = currentDate.getSeconds();
  const minute = currentDate.getMinutes();
  const hourDeg = (hour / 12) * 360;
  hourE1.style.transform = `rotate(${hourDeg}deg)`;
  const secondsDeg = (seconds / 60) * 360;
  secondE1.style.transform = `rotate(${secondsDeg}deg)`;
  const minuteDeg = (minute / 60) * 360;
  minuteE1.style.transform = `rotate(${minuteDeg}deg)`;
}


updateClock();