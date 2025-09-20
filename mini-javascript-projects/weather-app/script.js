const API_KEY = "d9e83f42466e4347d9ea48c4c7baab00";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const WEATHER_ICONS = {
  Clouds: "images/clouds.jpg",
  Rain: "images/rain.jpg",
  Clear: "images/clear.jpg",
  Drizzle: "images/drizzle.jpg",
  Mist: "images/mist.jpg",
  Snow: "images/snow.jpg",
  Default: "images/default.jpg"
};


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cityDisplay = document.querySelector(".city");
const tempDisplay = document.querySelector(".temp");
const humidityDisplay = document.querySelector(".humidity");
const windDisplay = document.querySelector(".wind");
const weatherDisplay = document.querySelector(".weather");
const errorDisplay = document.querySelector(".error");


function showError() {
  errorDisplay.style.display = "block";
  weatherDisplay.style.display = "none";
}


function updateWeatherUI(data) {
  cityDisplay.textContent = data.name;
  tempDisplay.textContent = `${Math.round(data.main.temp)}°c`;
  humidityDisplay.textContent = `${data.main.humidity}%`;
  windDisplay.textContent = `${data.wind.speed} km/h`;

  const mainWeather = data.weather[0].main;
  weatherIcon.src = WEATHER_ICONS[mainWeather] || WEATHER_ICONS.Default;

  weatherDisplay.style.display = "block";
  errorDisplay.style.display = "none";
}

async function checkWeather(city) {
  try {
    const response = await fetch(`${API_URL}${encodeURIComponent(city)}&appid=${API_KEY}`);

    if (!response.ok) {

      console.error(`Error: ${response.status} ${response.statusText}`);
      showError();
      return;
    }

    const data = await response.json();
    updateWeatherUI(data);
  } catch (error) {

    console.error("Fetch error:", error);
    showError();
  }
}


function handleSearch() {
  const city = searchBox.value.trim();
  if (city) {
    checkWeather(city);
  }
}

searchBtn.addEventListener("click", handleSearch);


searchBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
