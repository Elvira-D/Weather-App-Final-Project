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

    celsiusTemperature = response.data.main.temp;
    minCelsiusTemperature = response.data.main.temp_min;
    maxCelsiusTemperature = response.data.main.temp_max;

    temperatureElement.innerHTML = `Current Temperature ${Math.round(celsiusTemperature)}°`;
    cityElement.innerHTML = response.data.name;
    minTemp.innerHTML = `${Math.round(minCelsiusTemperature)}°`;
    maxTemp.innerHTML = `${Math.round(maxCelsiusTemperature)}°`;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = `Humidity ${(response.data.main.humidity)}%`;
    windSpeed.innerHTML = `Wind Speed ${Math.round(response.data.wind.speed)} km/h`;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);

}

function search(city) {
    let apiKey = "4820a880cf32920cd905490b92fa0630";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(displayTemperature)

}

function handleSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#search-city");
    search(cityInput.value);
}

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
    let minFahrenheitTemperature = (minCelsiusTemperature * 9 / 5) + 32;
    let maxFahrenheitTemperature = (maxCelsiusTemperature * 9 / 5) + 32;
    
    let temperatureElement = document.querySelector("#current-temperature");
    let minTemperatureElement = document.querySelector("#min");
    let maxTemperatureElement = document.querySelector("#max");
    
    temperatureElement.innerHTML = `${Math.round(fahrenheitTemperature)}°F`;
    minTemperatureElement.innerHTML = `${Math.round(minFahrenheitTemperature)}°F`;
    maxTemperatureElement.innerHTML = `${Math.round(maxFahrenheitTemperature)}°F`;
           
}

function displayCelsiusTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#current-temperature");
    let minTemperatureElement = document.querySelector("#min");
    let maxTemperatureElement = document.querySelector("#max");

    temperatureElement.innerHTML = `Current Temperature ${Math.round(celsiusTemperature)}°C`;
    minTemperatureElement.innerHTML = `${Math.round(minCelsiusTemperature)}°C`;
    maxTemperatureElement.innerHTML = `${Math.round(maxCelsiusTemperature)}°C`;
}

let celsiusTemperature = null;
let minCelsiusTemperature = null;
let maxCelsiusTemperature = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#F");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature)

let celsiusLink = document.querySelector("#C");
celsiusLink.addEventListener("click", displayCelsiusTemperature)

search("New York");
