import { UpperCaseFirstLetterEachWord } from './utils.js';
import { UsCity, UsCityData } from './data.js';

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
    let city;
    content = document.querySelector('#_listCity');
    content.innerHTML ="";

    const arr = value.trim().split(",");

    switch (arr.length){
        
        case 1 :
            const pop = parseInt(arr[0]);

            city = pop  === 3000000 
                        ? UsCityData.filter(({ population }) => population > pop)
                        : pop === 500000 && UsCityData.filter(({ population }) => population < pop)

        return city.map( ({ city, population }) => content.innerHTML += `<li>${city} : ${population} habitants</li>` );

        case 2 :
            const pop1 = parseInt(arr[0]);
            const pop2 = parseInt(arr[1]);

            city = pop1 === 500000 && pop2 === 1000000
                ? UsCityData.filter(({ population }) => population > pop1 && population < pop2 + 1)
                : ""

             return city.map(({ city, population }) => content.innerHTML += `<li>${city} : ${population} habitants</li>`);
    }   
}
