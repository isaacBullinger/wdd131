const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

function handleClick(event) {
    const clickedImage = event.target.closest('img');

    const small = clickedImage.getAttribute('src');
    const full = small.split('-')[0] + '-full.jpeg';

    modalImage.src = full;
    modalImage.alt = clickedImage.alt;
    modal.showModal();
}

function closeModal(target) {
    if (event.target === target) {
        modal.close();
    }
}

gallery.addEventListener('click', handleClick);

closeButton.addEventListener('click', (event) => {
    closeModal(closeButton);
});

modal.addEventListener('click', (event) => {
    closeModal(modal);
});