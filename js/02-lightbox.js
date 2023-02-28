import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryListEl = document.querySelector(".gallery");

galleryListEl.addEventListener('click', onGalleryListElClick);

function createGalleryElement(array) {
    
   return array.map(({ preview, original, description }) => {
        const item = document.createElement('a');
        
        item.href = original;
        item.classList.add('gallery__item');
        const image = document.createElement("img");
        image.src = preview;
        image.classList.add('gallery__image');
        image.alt =description;
        item.append(image);
        
       return item;
    })
   
}

const galleryElements = createGalleryElement(galleryItems);
galleryListEl.append(...galleryElements);


function onGalleryListElClick(e) {
  
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        return
    };
    

    console.log(e.target);
}


// console.log(createGalleryElement(galleryItems));