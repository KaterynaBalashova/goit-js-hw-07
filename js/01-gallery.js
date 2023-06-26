import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

    
const container = document.querySelector('.gallery');
container.addEventListener('click', handlerClick);


let markup = galleryItems.map(
    ({ preview, original, description }) =>
       `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join('');

container.insertAdjacentHTML('beforeend', markup);

function handlerClick(event) {
  event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    };
    console.log(event.target);

  const instance = basicLightbox.create((`
    <img
      class="gallery__image"
      width="1400" height="900"
      src="${event.target.dataset.source}"
      data-source="${event.target.dataset.source}"
      alt="${event.target.description}"
    // />
`),

    {
      onShow: (instance) => {
        document.addEventListener('keydown', handlerKeyEscape);
      },
      onClose: (instance) => {
        document.removeEventListener('keydown', handlerKeyEscape);
      }
    });
  
  instance.show();

  function handlerKeyEscape(event) {
  if (event.code === 'Escape') {
    instance.close();
    };
};
};




