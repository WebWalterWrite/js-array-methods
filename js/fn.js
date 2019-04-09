import { UpperCaseFirstLetterEachWord, Tableau, persistStorage, getLocalStorage, Reducer, idSelector } from './utils.js';
import { UsCity, UsCityData, Clothings, Sneakers } from './data.js';

let content;
/**
 * @description - Afficher le nom d'une ville présente dans une liste
 * @param {string} city - Contient la valeur du champ
 * @returns {string} - retourne un message d'erreur ou le nom de la ville
 */

export const FindBrand = brand => {
    
    content = document.querySelector("#_oneCity");

    if(brand === "") return content.innerHTML='<p class="_error">Vous n\'avez rien saisi</p>';
    
    // Traiter le texte saisi
    const value = UpperCaseFirstLetterEachWord(brand.toLowerCase());

    const result = Sneakers.find(el => el.brand === value);

    content.innerHTML = result ? `La marque ${value} est dans le Array` : `${value} n'est pas dans le Array`;
};


/**
 * @description - Retourne une liste de villes
 */
export const AllCities = () => {
        content = idSelector("_all_cities");

        content.innerHTML = "";
        
        const fillContent = el => content.innerHTML += `<li>${el}</li>`;

        UsCity.map(fillContent);
    };

// Effacer la liste des villes
export const ClearCities = () => {
    content = idSelector("_all_cities");
    content.innerHTML = "";
};



/**
 *  @des -  Afficher liste des villes selon la population
 *  @param {string} - contient la valeur du dataset html
 * */
export const MostPopulateCities = value => {
   
    let city; // conteneur villes

    const table = idSelector('_arrpop'); // Element Html conteneur
   
    const arr = value.trim().split(','); // convert to array

    table.classList.add('_show_arrpop'); // ajout effet de fondu.

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


/**
 * @desc - Retourne des éléments HTML.
 */

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


/**
 * @desc - 
 * @param {*} idProduct 
 * @param {*} nameStore 
 */

export const AddToCart = (idProduct, nameStore) => {

// recupérer le produit
    const product = Clothings.find( p => p.id === parseInt(idProduct));
    
// stocker dans le localstorage du navigateur
    persistStorage(product, nameStore);

// récupérer le contenu du local storage
    const totalCart = getLocalStorage(nameStore);

    content = idSelector('_cart_content');
    const cartCount = idSelector('_cart_count');

    const cart = totalCart.map(({product, name}) => `<span class="_emoji" role="img" aria-label=${name}>${product}</span>`).join('+');

    content.innerHTML= cart;
    cartCount.textContent= totalCart.length;
}

/**
 * @desc - Calcul le montant des artciles sotckés dans le local storage.
 * @param {string} item - Le nom du local storage.
 * @returns {string} - retourne la somme totale
 */

export const SumCart = item => {

    const price = getLocalStorage(item).map(({ price }) => price);

    content = document.querySelectorAll('._cart_total div')[0];

    content.textContent = `${Reducer(price).toFixed(2)} j$`;
}


/**
 * @desc - Affiche le nombre d'étoiles par défault 5 || le nombre d'étoiles sélectionnées
 * @param {integer} i - la position de l'étoile
 */ 

export const displayStars = ( i = 0 ) => {

    let stars = '<span><i class="far fa-star fa-3x"></i></span>'; // étoile vide
    
    const arrStars = [...Array(5)].fill(stars);

    content = idSelector('_stars_ctn');
    
    i === 0 
        ? (content.innerHTML = arrStars.join('')) 
        : content.innerHTML = fillStars(i, arrStars) ;

    initStars();

}

// 

/**
 * @desc Afficher les étoiles selon la notation.
 * @param {number} i - index du tableau, signifiant la position de l'étoile
 * @param { array } arrStars - Contient le tableau précedent.
 */
export const fillStars = ( i, array ) => {

    let fullStars = '<span><i class="fas fa-star fa-3x"></i></span>';

    return array.fill(fullStars,0, i ).join('');

}


/**
 * @description - initialiser les events sur les étoiles.
 */

const initStars = () => {
    
    const stars = document.querySelectorAll('.fa-star');

    [...stars].map((el, i) => el.addEventListener('click', () => displayStars(i + 1)));
};


// click event 
export const clickEvent = e => {

    const { target: { dataset } } = e;

    if(dataset.id)

    return AddToCart(dataset.id, 'cart');

}