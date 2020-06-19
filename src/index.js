function displayTemperature(response) {
let temperatureElement = document.querySelector("#current-temperature");
let cityElement = document.querySelector("#city");
    temperatureElement.innerHTML = `Current Temperature ${Math.round(response.data.main.temp)}°`;
cityElement.innerHTML = response.data.name; 
}

let apiKey = "4820a880cf32920cd905490b92fa0630";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature)