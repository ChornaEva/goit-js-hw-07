import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryNode = document.querySelector('.gallery');

const newGallery = galleryItems.map(element =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`).join('');

gallaryNode.insertAdjacentHTML('beforeend', newGallery);

const openLargeImage =  (event) => {
  event.preventDefault();

  const largeImage = event.target.dataset.source;
  const modalWindow = basicLightbox.create(`<img width="1400" height="900" src="${largeImage}">`);
  modalWindow.show();

  document.addEventListener("keydown", event => {
    if (event.key === 'Escape') {
      modalWindow.close();
      document.removeEventListener("keydown", openLargeImage);
    }
  })
}

gallaryNode.addEventListener('click', openLargeImage);
