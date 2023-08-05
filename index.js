function myFunction() {
  //This is a function for the darkmode
  var element = document.querySelector(".container");
  element.classList.toggle("dark-mode");
}

function weatherDisplay(response) {
  celsiusTemperature = Math.round(response.data.temperature.current);
  let humidity = Math.round(response.data.temperature.humidity);
  let wind = Math.round(response.data.wind.speed);
  let icon = response.data.condition.icon_url;
  let img = document.querySelector(".icon");
  img.setAttribute("src", icon);
  let city = response.data.city;
  let country = response.data.country;
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${city}, ${country}`;
  let sky = response.data.condition.description;
  let skyCondition = document.querySelector(".sky");
  skyCondition.innerHTML = sky;
  let humiditydisplay = document.querySelector(".hum");
  humiditydisplay.innerHTML = humidity;
  let windDisplay = document.querySelector(".wind");
  windDisplay.innerHTML = wind;
  let display = document.querySelector(".temp");
  display.innerHTML = celsiusTemperature;
  console.log(response.data);
  temp = response.data.current;
}
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search").value;
  console.log(city);
  const apiKey = "fa8883a22oc48e9593f685a01bt40076";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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

let celsiusTemperature = null;

function displayF() {
  let fTemp = Math.round((celsiusTemperature * 9) / 5 + 32);
  let temperatureElement = document.querySelector(".temp");
  temperatureElement.textContent = fTemp;
}
function displayC() {
  let temperatureElement = document.querySelector(".temp");
  temperatureElement.innerHTML = celsiusTemperature;
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayF);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", displayC);
