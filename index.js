function myFunction() {
  var element = document.querySelector(".container");
  element.classList.toggle("dark-mode");
}
function weatherDisplay(response) {
  let temprature = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let wind = Math.round(response.data.wind.speed);
  let humiditydisplay = document.querySelector(".hum");
  humiditydisplay.innerHTML = humidity;
  let windDisplay = document.querySelector(".wind");
  windDisplay.innerHTML = wind;
  let display = document.querySelector(".temp");
  display.innerHTML = temprature;
  console.log(response.data);
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  let h1 = document.querySelector("#city");
  h1.innerHTML = city;
  console.log(city);
  const apiKey = "7aed9d314ed9018ce92ea1322bc9125a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherDisplay);
}

let form = document.querySelector("#form");
form.addEventListener("click", search);

let input = document.querySelector("#city-search");
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    search(event);
  }
});
let time = new Date();
let option = { hour: `2-digit`, minute: `numeric`, hour12: true };
let formattedTime = time.toLocaleTimeString(`en-US`, option);
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let date = document.querySelector(".time");
date.innerHTML = `${days[time.getDay()]} ${formattedTime}`;
