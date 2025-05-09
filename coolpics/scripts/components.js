// Load header and footer for each page.
document.getElementById("header").innerHTML = 
    fetch("pages/components/header.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("header").innerHTML = html
        });

document.getElementById("footer").innerHTML = 
    fetch("pages/components/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footer").innerHTML = html
        });

// For loop that dynamically generates the photos.
const numPhotos = 9;
let photoGallery = document.getElementById("gallery");

fetch("pages/components/figure.html")
    .then(response => response.text())
    .then(html => {
        let content = "";

        for (let i = 0; i < numPhotos; i++) {
            content += html;
        }
        photoGallery.innerHTML = content;
    });