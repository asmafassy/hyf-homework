console.log(5);
const apiKey = "9acc2b1dec2dfc8eea84bfc08d4a1160";

// 1- create input and a button
//2- create a div to get the info
//3- use the button for add event
// >> add event >> collect input value
//4- fetch function inside the add event
//5- use promises

const input = document.querySelector("#input-name");
const btn = document.querySelector("#submit");
const display = document.querySelector(".weather");

input.addEventListener("keyup", function (event) {
  event.preventDefault();
  console.log(event.key);
  if (event.key === "Enter") {
    btn.click();
  }
});

function getSpeedInKmPh(speed) {
  return Math.round(speed * ((60 * 60) / 1000));
}
function getTimeForLocation(timezone, utcTime) {
  let localTime = new Date((timezone + utcTime) * 1000);
  console.log(localTime.toString());
  const twoDigits = (val) => {
    return ("0" + val).slice(-2);
  };
  const hours = twoDigits(localTime.getUTCHours());
  const minutes = twoDigits(localTime.getUTCMinutes());
  return `${hours}:${minutes}`;
}

function getWeatherBg(weather) {
    console.log(weather)
  switch (weather.toLowerCase()) {
    case "thunderstorm":
      return "./images/thunderstorm.jpg";
    case "drizzle":
      return "./images/drizzle.jpg";
    case "rain":
      return "./images/rain.jpg";
    case "snow":
      return "./images/snow.jpg";
    case "hurricane":
      return "./images/hurricane.jpg";
    case "clouds":
        return "./images/clouds.jpg";  
    case "clear":
        return "./images/clear.jpg";      
    default:
      return "./images/tornado.jpg";
  }
}

function getWeatherData() {
  const inputValue = input.value;
  console.log(inputValue);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=9acc2b1dec2dfc8eea84bfc08d4a1160&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      if(data.cod === '404'){
        display.innerHTML = `<p> ${data.message}</p>`;
      }
      let sunRise = getTimeForLocation(data.timezone, data.sys.sunrise);
      let sunSet = getTimeForLocation(data.timezone, data.sys.sunset);
      display.innerHTML = `<h1>Weather in ${data.name}</h1>
            <img src= "http://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@2x.png"
            class="main-weather-img"
            alt="${data.weather[0].description}"/>
            <h2>${Math.round(data.main.temp)}°C</h2>
            
            <div>Wind Speed : ${getSpeedInKmPh(data.wind.speed)} km/h</div>
            <div>Description : ${data.weather[0].description}</div>
            <div>Sunrise:${sunRise}</div>
            <div>Sunset:${sunSet}</div>
            <h2>Map:</h2>
            <iframe src="https://maps.google.com/maps?q=${data.coord.lat},${
        data.coord.lon
      }&t=&z=15&ie=UTF8&iwloc=&output=embed"/>`;
      document.body.style.backgroundImage = `url(${getWeatherBg(data.weather[0].main)})`;
    });
}
