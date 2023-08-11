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
  sky = sky.charAt(0).toUpperCase() + sky.slice(1);
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
function forecastDisplay(response) {
  let day1min = Math.round(response.data.daily[1].temperature.minimum);
  let day1max = Math.round(response.data.daily[1].temperature.maximum);
  let day2min = Math.round(response.data.daily[2].temperature.minimum);
  let day2max = Math.round(response.data.daily[2].temperature.maximum);
  let day3min = Math.round(response.data.daily[3].temperature.minimum);
  let day3max = Math.round(response.data.daily[3].temperature.maximum);
  let day4min = Math.round(response.data.daily[4].temperature.minimum);
  let day4max = Math.round(response.data.daily[4].temperature.maximum);
  let day5min = Math.round(response.data.daily[5].temperature.minimum);
  let day5max = Math.round(response.data.daily[5].temperature.maximum);
  let display1min = document.querySelector(".firstMin");
  let display1max = document.querySelector(".firstMax");
  let display2min = document.querySelector(".secondMin");
  let display2max = document.querySelector(".secondMax");
  let display3min = document.querySelector(".thirdMin");
  let display3max = document.querySelector(".thirdMax");
  let display4min = document.querySelector(".fourthMin");
  let display4max = document.querySelector(".fourthMax");
  let display5min = document.querySelector(".fifthMin");
  let display5max = document.querySelector(".fifthMax");
  display1min.textContent = day1min;
  display1max.textContent = day1max;
  display2min.textContent = day2min;
  display2max.textContent = day2max;
  display3min.textContent = day3min;
  display3max.textContent = day3max;
  display4min.textContent = day4min;
  display4max.textContent = day4max;
  display5min.textContent = day5min;
  display5max.textContent = day5max;
  let icon1 = response.data.daily[1].condition.icon_url;
  let img1 = document.querySelector(".firsticon");
  img1.setAttribute("src", icon1);
  let icon2 = response.data.daily[2].condition.icon_url;
  let img2 = document.querySelector(".secondicon");
  img2.setAttribute("src", icon2);
  let icon3 = response.data.daily[3].condition.icon_url;
  let img3 = document.querySelector(".thirdicon");
  img3.setAttribute("src", icon3);
  let icon4 = response.data.daily[4].condition.icon_url;
  let img4 = document.querySelector(".fourthicon");
  img4.setAttribute("src", icon4);
  let icon5 = response.data.daily[5].condition.icon_url;
  let img5 = document.querySelector(".fifthicon");
  img5.setAttribute("src", icon5);
  let day1 = document.querySelector(".day1");
  day1.innerHTML = dayFormat(response.data.daily[1].time);
  let day2 = document.querySelector(".day2");
  day2.innerHTML = dayFormat(response.data.daily[2].time);
  let day3 = document.querySelector(".day3");
  day3.innerHTML = dayFormat(response.data.daily[3].time);
  let day4 = document.querySelector(".day4");
  day4.innerHTML = dayFormat(response.data.daily[4].time);
  let day5 = document.querySelector(".day5");
  day5.innerHTML = dayFormat(response.data.daily[5].time);
}
function dayFormat(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}
function searchCity(city) {
  const apiKey = "fa8883a22oc48e9593f685a01bt40076";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherDisplay);
  axios.get(forecastUrl).then(forecastDisplay);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  searchCity(cityInput.value);
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

let input = document.querySelector("#city-input");
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    handleSubmit(event);
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
searchCity("Addis Ababa");
