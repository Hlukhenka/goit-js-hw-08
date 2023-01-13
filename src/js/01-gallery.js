import { galleryItems } from './gallery-items';

console.log(galleryItems);

const fotoEl = galleryItems
  .map((item) => {
    return `<a class="gallery__link" href="${item.original}" >
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
  })
  .join("");

  gallery.insertAdjacentHTML("afterbegin", fotoEl);

  