/* */
import { updateCitiesList } from "./main.js";

export function createCard() {
  /* card-left */
  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const temp = document.createElement('div');
  temp.classList.add('temp');

  const minMax = createMinMax();
  const windHumidity = createWindHumidity();

  cardInfo.append(temp, minMax, windHumidity);

  /* card-right */
  const weatherIcon = document.createElement('div');
  weatherIcon.classList.add('weather-icon');

  const mainDescription = document.createElement('div');
  mainDescription.classList.add('main-description');

  const cardWeatherIcon = document.createElement('div');
  cardWeatherIcon.classList.add('card-weather-icon');

  cardWeatherIcon.append(weatherIcon, mainDescription);

  /* city location */
  const cityLocation = createCityLocation();

  /* wrap */
  const card = document.createElement('div');
  card.classList.add('card');

  const weather = document.createElement('div');
  weather.classList.add('weather');

  weather.append(cardInfo, cardWeatherIcon);
  card.append(weather, cityLocation);

  card.appendChild(addRemoveButton());
  return card;
}

function createCityLocation() {
  const cityLocation = document.createElement('div');
  cityLocation.classList.add('location');

  const cityName = document.createElement('div');
  cityName.classList.add('city-name');

  const stationName = document.createElement('div');
  stationName.classList.add('station-name');

  const stateName = document.createElement('div');
  stateName.classList.add('state-name');

  const countryName = document.createElement('div');
  countryName.classList.add('country-name');

  const cityId = document.createElement('div');
  cityId.classList.add('city-id');
  cityId.style.visibility = 'hidden';

  cityLocation.append(cityName, stationName, stateName, countryName, cityId);

  return cityLocation;
}

function createMinMax() {
  /* Max temp */
  const tempMax = document.createElement('div');
  tempMax.classList.add('temp-max');

  const maxIcon = createSmallIcon('max-temp');

  const maxTemp = document.createElement('div');
  maxTemp.classList.add('max-temp');

  maxTemp.append(tempMax, maxIcon);

  /* Min temp */
  const tempMin = document.createElement('div');
  tempMin.classList.add('temp-min');

  const minIcon = createSmallIcon('min-temp');

  const minTemp = document.createElement('div');
  minTemp.classList.add('min-temp');
  minTemp.append(tempMin, minIcon);

  /* wrap */
  const minMax = document.createElement('div');
  minMax.classList.add('min-max');
  minMax.append(maxTemp, minTemp);
  return minMax;
}

function createWindHumidity() {
  /* wind */
  const windContainer = document.createElement('div');
  windContainer.classList.add('wind-container');

  const wind = document.createElement('div');
  wind.classList.add('wind');

  const windIcon = createSmallIcon('wind');

  windContainer.append(wind, windIcon);

  /* humidity */
  const humidityContainer = document.createElement('div');
  humidityContainer.classList.add('humidity-container');

  const humidityIcon = createSmallIcon('humidity');

  const humidityNumber = document.createElement('div');
  humidityNumber.classList.add('humidity');
  humidityContainer.append(humidityNumber, humidityIcon);

  /* wrap */
  const windHumidity = document.createElement('div');
  windHumidity.classList.add('wind-humidity');

  windHumidity.append(windContainer, humidityContainer);
  return windHumidity;
}

function createSmallIcon(name) {
  const minIcon = document.createElement('img');
  minIcon.src = `./icons/${name}.svg`;
  minIcon.alt = name;
  minIcon.width = '32';
  minIcon.height = '32';
  return minIcon;
}

function addRemoveButton() {
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');

  const removeIcon = document.createElement('img');
  removeIcon.src = './icons/delete.svg';
  removeButton.appendChild(removeIcon);
  removeButton.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.remove();
    updateCitiesList();
  });

  return removeButton;
}
