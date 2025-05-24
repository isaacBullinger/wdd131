// Load header for each page.
fetch("pages/components/header.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("header").innerHTML = html

        const menuButton = document.querySelector('.menu-button');
        const menu = document.querySelector('.menu');

        function handleResize() {
            if (window.innerWidth > 1000) {
                menu.classList.remove('hide');
            } else {
                menu.classList.add('hide');
            }
        }

        menuButton.addEventListener('click', function() {
            menu.classList.toggle('hide');
        });

        window.addEventListener('resize', handleResize);
    });

// For loop that dynamically generates the photos.
const numPhotos = 9;
let photoGallery = document.getElementById("gallery");

let content = "";

for (let i = 0; i < numPhotos; i++) {
    content += `
        <figure>
            <img src="imgs/norris-sm.jpeg" id="image-${i}" alt="picture">
        </figure>
    `;
}
photoGallery.innerHTML = content;

// Load footer for each page.
fetch("pages/components/footer.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html
    });