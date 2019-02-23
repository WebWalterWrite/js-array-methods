import { UpperCaseFirstLetterEachWord, Tableau, persistStorage, getLocalStorage, Reducer } from './utils.js';
import { UsCity, UsCityData, Clothings } from './data.js';

let content;
// Afficher une ville précise
export const OneCity = (city) => {

    // Traiter le texte saisi
    const value = UpperCaseFirstLetterEachWord(city.toLowerCase());

    content = document.querySelector("#_oneCity");

    const result = UsCity.find(el => el === value);

    content.innerHTML = result ? `La ville de ${result} est dans le Array` : `${city || '... vide'} n'est pas dans le Array`;
};

// Afficher liste de toutes les villes

export const AllCities = () => {
        content = document.querySelector("#_allCity");
        content.innerHTML = "";
        UsCity.map(el => (content.innerHTML += `<li>${el}</li>`));
    };

// Effacer la liste des villes
export const ClearCities = () => {
    content = document.querySelector("#_allCity");
    content.innerHTML = "";
};



// Afficher liste des villes selon la population
export const MostPopulateCities = (value) => {
   
    let city; // conteneur villes

    const table = document.querySelector('#_arrpop'); // Element Html conteneur
   
    const arr = value.trim().split(','); // convert to array

    table.classList.add('_show_arrpop');

    switch (arr.length){
        case 1 :
            const pop = parseInt(arr[0]);

            city = pop  === 3000000 
                        ? UsCityData.filter(({ population }) => population > pop)
                        : pop === 500000 && UsCityData.filter(({ population }) => population < pop);
        break;

        case 2 :
            const pop1 = parseInt(arr[0]);
            const pop2 = parseInt(arr[1]);

            city = pop1 === 500000 && pop2 === 1000000
                ? UsCityData.filter(({ population }) => population > pop1 && population < pop2 +1)
                : pop1 === 1000000 && 3000000 && UsCityData
                .filter( ({population}) => population > pop1 && population < pop2 +1)
        break;

        default: Tableau();
    }
  
    return table.innerHTML=Tableau(city);
};


// afficher la liste de vêtements.
export const AllClothes = () => (

     Clothings.map( ({product, price, name, id})=>(
    `
<div>
    <div class="_product">
        <p>${name}</p>
        <div>
            <span class="_emoji" role="img" aria-label=${name}>${product}</span>
        </div>
        <p>${price} J$</p>
    </div>
    <button data-id=${id} class="_add_cart">add to cart</button>
</div>   
        `
     )).join('')
);


// ajouter au panier

export const AddToCart = (idProduct, nameStore) => {

// recupérer le produit
    const product = Clothings.find( p => p.id === parseInt(idProduct));
    
// stocker dans le localstorage du navigateur
    persistStorage(product, nameStore);

// récupérer le contenu du local storage
    const totalCart = getLocalStorage(nameStore);

    content = document.querySelector('#_cart_content');
    const cartCount = document.querySelector('#_cart_count');

    const cart = totalCart.map(({product, name}) => `<span class="_emoji" role="img" aria-label=${name}>${product}</span>`).join('+');

    content.innerHTML= cart;
    cartCount.textContent= totalCart.length;
}

// Calculer le panier

export const SumCart = (item) => {

    const price = getLocalStorage(item).map(({ price }) => price);

    content = document.querySelectorAll('._cart_total div')[0];

    content.textContent = `${Reducer(price).toFixed(2)} j$`;
}


