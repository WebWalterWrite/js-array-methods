import { Clothings } from './data.js';

export const findExemple = `

const Sneakers = [
&nbsp; {

&nbsp;&nbsp; brand: 'Nike',
&nbsp;&nbsp; data: [
&nbsp;&nbsp;&nbsp;&nbsp; { picture: "nike1", name: "EPIC REACT FLYKNIT 2", price: 90},
&nbsp;&nbsp;&nbsp;&nbsp; { picture: "nike2", name: "AIR SKYLON II", price: 70},
&nbsp;&nbsp;&nbsp;&nbsp; { picture: "nike2", name: "AIR MAX 1", price: 135}
&nbsp;&nbsp; ]
&nbsp; },
&nbsp; {

&nbsp;&nbsp; brand: 'Addidas',
&nbsp;&nbsp; data: [
&nbsp;&nbsp;&nbsp;&nbsp; { picture: "addidas1", name: "STAN SMITH TREFOIL", price: 100},
&nbsp;&nbsp;&nbsp;&nbsp; { picture: "addidas2", name: "HANDBALL SPZL", price: 100 },
&nbsp;&nbsp;&nbsp;&nbsp; { picture: "addidas3", name: "STAN SMITH", price: 70 }
&nbsp;&nbsp; ]
&nbsp; },
&nbsp; {
    
&nbsp;&nbsp; brand: 'Reebok',
&nbsp;&nbsp; data: [
&nbsp;&nbsp;&nbsp;&nbsp; { picture: "reebok1", name:'RAPIDE', price: 80 },
&nbsp;&nbsp;&nbsp;&nbsp; { picture: "reebok2", name:'AZTREK',price: 90 },
&nbsp;&nbsp;&nbsp;&nbsp; { picture: "reebok3", name:'CLASSIC LEATHER', price: 80 }
&nbsp; ]
&nbsp; }
];
`;

export const DisplaySneaker = data => data.map( ({name, picture, price}) =>(

    `
      <div class="_box_shoes">
        <div class="_shoes_img">
            <img src="../assets/${picture}.png" alt="shoes" width="200" height="200"/>
        </div>
        <div class="_shoes_desc">
            <p>${name}</p>
            <p>${price}€</p>
        </div>
      </div>  
    `
));


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
