// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      ` <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onGalleryItemClick);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
function onGalleryItemClick(e) {
  e.preventDefault();
  const clickedImage = e.target;
  if (!clickedImage.classList.contains("gallery__image")) {
    return;
    lightbox.open()
  }
}