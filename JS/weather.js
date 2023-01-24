const weather = document.querySelector("#weather");

const API_KEY = "f9f325bfc90237bef059dbbbf4c050d2";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      const liveCity = document.querySelector("#weather span:first-child");
      const liveWeather = document.querySelector("#weather span:nth-child(2)");
      const liveTemp = document.querySelector("#weather span:last-child");
      liveCity.innerText = `${date.name} /`;
      liveWeather.innerText = `${date.weather[0].main} /`;
      liveTemp.innerText = `${date.main.temp} `;
    });
}

function onGeoError() {
  alert("사용자의 위치를 알 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
