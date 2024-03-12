import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.min.js';
import 'simplelightbox/dist/simple-lightbox.min.css';



const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup();
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image lazyload"
        src="${preview}"
        data-src="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}


new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
document.addEventListener("click", createGalleryMarkup);

console.log(galleryItems);
