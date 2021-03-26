import "./gallery-items.js"

const galleryContainerRef = document.querySelector('div.lightbox');
const imageRef = document.querySelector('img.lightbox__image');
const btnRef = document.querySelector('button[data-action="close-lightbox"]');
const galleryRef = document.querySelector('.js-gallery');
const overlayRef = document.querySelector('div.lightbox__overlay')

galleryRef.addEventListener('click', onModalOpen);

btnRef.addEventListener('click', onModalClose);
overlayRef.addEventListener('click', onModalClose);
document.addEventListener('keydown', onModalCloseByESC)

function onModalOpen(event) {
    event.preventDefault();
    if (event.target.classList.contains('gallery__image')) {
        
    galleryContainerRef.classList.add('is-open');
    imageRef.src = event.target.dataset.source;
    imageRef.alt = event.target.alt;
    
    }
}

function onModalClose() {
    galleryContainerRef.classList.remove('is-open');
    imageRef.src = "";
    imageRef.alt = "";
}

function onModalCloseByESC(event) {
    if (event.key !== 'Escape') {
        return
    }
    onModalClose();
}   