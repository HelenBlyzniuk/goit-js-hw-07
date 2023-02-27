import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

console.log(galleryItemCreate(galleryItems));

function galleryItemCreate (array) {
    const card = array.map((option) => {
       return `<img src = "${option.preview}" alt = "${option.decsription}" data-src = "${option.original}" > </img > `;
    })
    .join('');
    console.log(card[0]);
}



// console.log(galleryItems);

