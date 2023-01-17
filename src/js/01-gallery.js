import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');

console.log(galleryItems);

const fotoEl = galleryItems
  .map(item => {
    return `<a class="gallery__link" href="${item.original}" >
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', fotoEl);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
});
