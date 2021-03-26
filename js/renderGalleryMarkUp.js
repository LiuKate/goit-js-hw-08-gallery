import galleryItems from "./gallery-items.js"

function renderGalleryMarkUp (items) {
  return items.map(item => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt='${item.description}'
    />
  </a>
</li>`
    }).join('')

}

const galleryMarkUp = renderGalleryMarkUp(galleryItems);
const galleryRef = document.querySelector('.js-gallery');

galleryRef.insertAdjacentHTML('afterbegin', galleryMarkUp);