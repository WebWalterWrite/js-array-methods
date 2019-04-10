import { AllCities, ClearCities, FindBrand, MostPopulateCities, AddToCart, SumCart, displayStars, clickEvent } from './fn.js';
import { idSelector } from './utils.js';
import { AllClothes, findExemple } from './components.js';

window.addEventListener("DOMContentLoaded", () => {

// identifier elem

  const cities_btn = idSelector("_cities_btn");
  const cities_clear_btn = idSelector("_cities_clear");
  const clothing_contains = idSelector('_clothing')
  const city_btn = idSelector("_city_btn");
  const brand_input = document.querySelector('input[name="brand"]');
  const city_data = document.querySelectorAll('._city_data');
  const cart_total_btn = idSelector('_btn_total_cart');
  const find_code = idSelector('_find_ex');

  cities_btn.addEventListener('click', () => AllCities());
  cities_clear_btn.addEventListener('click', () => ClearCities("_all_cities"));

  city_btn.addEventListener('click', () => FindBrand(brand_input.value));
  
  
  [...city_data].map(el => el.addEventListener('click', () => MostPopulateCities(el.dataset.int)));

// Ecouter click event sur boutton add to cart
  document.body.addEventListener('click', (e) => clickEvent(e));
  
  
  /*
    ARRAY REDUCE
  */
  clothing_contains.innerHTML= AllClothes();
  find_code.innerHTML = findExemple;

  cart_total_btn.addEventListener('click', () => SumCart('cart') );

  localStorage.clear();  // clear local storage


  /*
    ARRAY STARS
  */
  displayStars();   // initialize Stars array

});
