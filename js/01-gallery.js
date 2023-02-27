import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const card = (galleryItemCreate(galleryItems));
console.log(card);

galleryContainer.insertAdjacentHTML("beforeend", card);
console.log(galleryContainer);

function galleryItemCreate (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
           `<div class="gallery__item">
               <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
                </div>`})
    .join('');
    
}


// console.log(galleryItems);

