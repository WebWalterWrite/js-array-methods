// Convertir la 1ère lettre de chaque mot en majuscule.
export const UpperCaseFirstLetterEachWord = data => {
  const arr = data.trim().split(" ");
  const working = arr.map(el => el.charAt(0).toUpperCase() + el.slice(1));
  const Word = working.join(" ");

  return Word;
};

/*
Renvoie tableau Html en mappant sur le resultat du Array.

!! Utilisation de Array.join() pour ne pas afficher les virgules car innerHTML stringify le array en chaine de caractères
 et sépare chaque élément par une virgule.
 
*/
export const Tableau = arr => {

    const data = arr.map( ({ city, population }) => `<tr><td>${city}</td><td>${population}</td></tr>`).join("")

    const table = 
    `<table class="_result">
    <caption>* Estimation 2017</caption>
        <thead>
            <tr>
                <td>Ville</td>
                <td>Population*</td>          
            </tr>
        </thead>
        <tbody>
            ${data}
        </tbody>
    </table> `;

  return table;
};


// Persister les produits dans le localStorage.

export const persistStorage = (data, item) => {

    // Créer tableau de products en fonction du localStorage
    let arrayOfProducts = getLocalStorage(item) ? getLocalStorage(item) : [];

    // Récupérer le contenu du storage
    const getStorage = getLocalStorage(item);

    // Si getStorage true, Vérifier si le produit est déjà présent
    const isProduct = getStorage && getStorage.find(({ id }) => id === data.id);

    // Si non présent l'insérer dans le tableau
    !isProduct && arrayOfProducts.push(data);

    // Persister les données 
    setLocalStorage(item,arrayOfProducts);
};


// persister localstorage
const setLocalStorage = (item, array) => localStorage.setItem(item, JSON.stringify(array));

// Récupérer localstorage
export const getLocalStorage = item => JSON.parse(localStorage.getItem(item));

// array.reducer 
export const Reducer = array => array.reduce( (accumulator, currentValue) => accumulator + currentValue);
