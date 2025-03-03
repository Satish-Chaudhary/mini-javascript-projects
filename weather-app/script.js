const apikey = "d9e83f42466e4347d9ea48c4c7baab00";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp - 273.15) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = (data.wind.speed) + " km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "../weather-app/images/cloud.jpg";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "../weather-app/images/rain.jpg";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "../weather-app/images/clear.jpg";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "../weather-app/images/drizzle.jpg";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "../weather-app/images/mist.jpg";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
// checkweather();

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
