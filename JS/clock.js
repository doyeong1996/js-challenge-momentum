const clock = document.querySelector("#clock");
const today = document.querySelector("#today");

function onLiveClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
//오늘 날짜로 자동 업데이트
today.value = new Date().toISOString().substring(0, 10);
onLiveClock();
setInterval(onLiveClock, 1000);
