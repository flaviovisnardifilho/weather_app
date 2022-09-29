const icons = {
  '01': 'clear-sky.svg',
  '02': 'few-clouds.svg',
  '03': 'scattered-clouds.svg',
  '04': 'broken-clouds.svg',
  '09': 'shower-rain.svg',
  10: 'rain.svg',
  11: 'thunderstorm.svg',
  13: 'snow.svg',
  50: 'mist.svg',
};

export function updateCard(weatherResponse, card, cityInformation) {
  const temp = card.querySelector('.temp');
  temp.textContent = `${Math.round(weatherResponse.main.temp)}º`;

  const temp_min = card.querySelector('.temp-min');
  temp_min.textContent = `${Math.round(weatherResponse.main.temp_min)}º`;

  const temp_max = card.querySelector('.temp-max');
  temp_max.textContent = `${Math.round(weatherResponse.main.temp_max)}º`;

  const wind = card.querySelector('.wind');
  wind.textContent = `${weatherResponse.wind.speed}`;

  const humidity = card.querySelector('.humidity');
  humidity.textContent = `${weatherResponse.main.humidity}`;

  const cityName = card.querySelector('.city-name');
  cityName.textContent = cityInformation.name;

  const stationName = card.querySelector('.station-name');
  stationName.textContent = cityInformation.station;

  const stateName = card.querySelector('.state-name');
  stateName.textContent = cityInformation.state;

  const countryName = card.querySelector('.country-name');
  countryName.textContent = cityInformation.country;

  const cityId = card.querySelector('.city-id');
  cityId.textContent = cityInformation.id;

  const icon = card.querySelector('.weather-icon');
  icon.appendChild(updateIcon(weatherResponse.weather[0].icon));

  const mainDescription = card.querySelector('.main-description');
  mainDescription.textContent = weatherResponse.weather[0].main;
}

function updateIcon(icon_id) {
  const icon = document.createElement('img');

  // icon.src = `http://openweathermap.org/img/wn/${icon_id}@2x.png`;
  icon.src = `./icons/${icons[icon_id.slice(0, 2)]}`;
  icon.width = '104';
  return icon;
}
