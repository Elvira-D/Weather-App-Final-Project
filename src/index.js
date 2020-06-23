var today = new Date();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let day = days[today.getDay()];
var minutes = today.getMinutes();
if (minutes < 10) {
    minutes = "0" + minutes;
}
var date = day + " " + today.getHours() + ":" + minutes;
let time = document.querySelector("#date");
time.innerHTML = date;



function displayTemperature(response) {
    
    let temperatureElement = document.querySelector("#current-temperature");
    let cityElement = document.querySelector("#city");
    let minTemp = document.querySelector("#min");
    let maxTemp = document.querySelector("#max");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeed = document.querySelector("#wind-speed");
    let iconElement = document.querySelector("#icon");
    temperatureElement.innerHTML = `Current Temperature ${Math.round(response.data.main.temp)}°`;
    cityElement.innerHTML = response.data.name;
    minTemp.innerHTML = Math.round(response.data.main.temp_min);
    maxTemp.innerHTML = Math.round(response.data.main.temp_max);
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = `Humidity ${(response.data.main.humidity)}%`;
    windSpeed.innerHTML = `Wind Speed ${Math.round(response.data.wind.speed)} km/h`;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);

}

function handleSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#search-city");
    console.log(cityInput.value);
}

let apiKey = "4820a880cf32920cd905490b92fa0630";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature)

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
