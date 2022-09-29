// Free API
const API_key = '0b231bbaab2376d2d5f11d0298c4d182';
let units = 'metric';

// TODO: Change this function to return a new Promise
export async function getLocation(cityName = 'Jundiaí,br') {
  // new Promise((resolve, reject) => {
  // });
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_key}`,
    { mode: 'cors' }
  ).then((response) => response.json());
  // console.log(response);
  return response;
}

export async function getWeather(latitude, longitude) {
  try {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_key}`,
      { mode: 'cors' }
    ).then((weather) => weather.json());
    return weather;
  } catch (err) {
    console.log(err);
  }
}

export async function getWeatherByCityID(cityID) {
  try {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=${units}&appid=${API_key}`,
      { mode: 'cors' }
    ).then((weather) => weather.json());
    return weather;
  } catch (err) {
    console.log(err);
  }
}
