// Convertir la 1ère lettre de chaque mot en majuscule.
export const UpperCaseFirstLetterEachWord = data => {

    const arr = data.trim().split(" ");
    const working = arr.map(el => el.charAt(0).toUpperCase() + el.slice(1));
    const Word = working.join(" ");
    
    return Word;

};
