import { createCard } from './create-card.js';
import { updateCard } from './update-display.js';
import { getLocation, getWeather, getWeatherByCityID } from './weather-api.js';

const searchCityInput = document.querySelector('#city-name');
searchCityInput.addEventListener('change', (e) => addCity(e.target.value));

async function addCard(cityName) {
  try {
    const location = await getLocation(cityName);
    for (let loc of location) {
      const [latitude, longitude] = [loc.lat, loc.lon];
      const weather = await getWeather(latitude, longitude);

      const cityInformation = {
        id: weather.id,
        name: loc.name,
        station: weather.name,
        state: loc.state,
        country: loc.country,
      };

      const container = document.querySelector('#card-container');
      container.appendChild(createCard());

      const lastCard = container.lastChild;

      updateCard(weather, lastCard, cityInformation);
    }
    updateCitiesList();
  } catch (err) {
    console.log(err);
  }
}

function addCity(cityName) {
  addCard(cityName);
  searchCityInput.value = '';
}

export function updateCitiesList() {
  const location = document.querySelectorAll('.location');
  let cards = {};

  for (let loc of location) {
    const cityLocation = [];
    for (let child of loc.childNodes) {
      cityLocation.push(child.textContent);
    }
    const id = cityLocation.pop();

    let card = {
      [id]: {
        name: cityLocation[0],
        station: cityLocation[1],
        state: cityLocation[2],
        country: cityLocation[3],
      },
    };
    Object.assign(cards, card);
  }
  // console.log(cards)
  localStorage.setItem('citiesList', JSON.stringify(cards));
}

async function init() {
  const citiesSaved = JSON.parse(localStorage.getItem('citiesList'));
  
  if (!citiesSaved){ return}

  const cities = Object.entries(citiesSaved)
  if (cities.length === 0) return

  for (let city of cities) {
    const cityInformation = {};
    cityInformation.id = city.shift();
    Object.assign(cityInformation, city[0]);

    const weather = await getWeatherByCityID(cityInformation.id);
    const container = document.querySelector('#card-container');
    container.appendChild(createCard());
    const lastCard = container.lastChild;

    updateCard(weather, lastCard, cityInformation);
  }
}

// localStorage.clear()
// console.log(localStorage)
init();
