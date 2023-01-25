const clock = document.querySelector("#clock");
const today = document.querySelector("#today");
const day = document.querySelector("#day");

function onToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 0~11까지만 표시가된다 그래서 + 1 을 따로해준다.
  const days = date.getDate();

  day.innerText = `${year}-${month}-${days}`;
}

function onLiveClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
//오늘 날짜로 자동 업데이트 input 값으로 했을시
//today.value = new Date().toISOString().substring(0, 10);
onToday();
onLiveClock();
setInterval(onLiveClock, 1000);
