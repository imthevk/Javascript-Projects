const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function rotateArrows(handType, handDeg) {
  handType.style.transform = `rotate(${handDeg}deg)`;
}
function setClockTime() {
  const now = new Date();
  const getSeconds = now.getSeconds();
  const getMinutes = now.getMinutes();
  const getHours = now.getHours();

  const hoursDegree = (getHours / 12) * 360;
  const minutesDegree = (getMinutes / 60) * 360;
  const secondsDegree = (getSeconds / 60) * 360;
  rotateArrows(hour, hoursDegree);
  rotateArrows(minute, minutesDegree);
  rotateArrows(second, secondsDegree);
}
setInterval(setClockTime, 1000);
