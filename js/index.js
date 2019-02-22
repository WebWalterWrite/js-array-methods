import { OneCity, AllCities, ClearCities, MostPopulateCities, AllClothes } from './fn.js';

window.addEventListener("DOMContentLoaded", () => {

// identifier elem
  const cities_btn = document.querySelector("#_cities_btn");
  const cities_clear_btn = document.querySelector("#_cities_clear");
  const clothing_contains = document.querySelector('#_clothing')
  const city_btn = document.querySelector("#_city_btn");
  const city_input = document.querySelector('input[name="city"]');
  const city_data = document.querySelectorAll('._city_data');

  cities_btn.addEventListener('click', () => AllCities());
  cities_clear_btn.addEventListener('click', () => ClearCities());

  city_btn.addEventListener('click', () => OneCity(city_input.value));
  
  [...city_data].map(el => el.addEventListener('click', () => MostPopulateCities(el.dataset.int)));

  document.body.addEventListener('click', (el) => el.target.dataset.id && console.log(el.target))
  
  // Array reduce
  clothing_contains.innerHTML= AllClothes();


  


});
