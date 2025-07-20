const pathPrefix = location.pathname.includes("/pages/") ? "../" : "";
fetch(`${pathPrefix}pages/components/header.html`)
  .then(res => res.text())
  .then(html => document.getElementById("header").innerHTML = html);

fetch(`${pathPrefix}pages/components/footer.html`)
  .then(res => res.text())
  .then(html => document.getElementById("footer").innerHTML = html);

fetch("/portfolio/pages/components/header.html")
    .then(response => response.text())
    .then(
        html => document.getElementById("header").innerHTML = html

        
    );

fetch("/portfolio/pages/components/footer.html").then(response => response.text()).then(html => document.getElementById("footer").innerHTML = html);