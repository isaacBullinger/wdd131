fetch("pages/components/header.html")
    .then(response => response.text())
    .then(
        html => document.getElementById("header").innerHTML = html

        
    );

fetch("pages/components/footer.html").then(response => response.text()).then(html => document.getElementById("footer").innerHTML = html);