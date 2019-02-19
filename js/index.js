import { OneCity, AllCities, ClearCities, MostPopulateCities } from './fn.js';

document.addEventListener("DOMContentLoaded", () => {

// identifier elem
  const cities_btn = document.querySelector("#_cities_btn");
  const cities_clear_btn = document.querySelector("#_cities_clear");

  const city_btn = document.querySelector("#_city_btn");
  const city_input = document.querySelector('input[name="city"]');
  const city_data = document.querySelectorAll('._city_data');

  cities_btn.addEventListener('click', () => AllCities());
  cities_clear_btn.addEventListener('click', () => ClearCities());

  city_btn.addEventListener('click', () => OneCity(city_input.value));
  
  [...city_data].map(el => el.addEventListener('click', () => MostPopulateCities(el.dataset.int)))
  
});
