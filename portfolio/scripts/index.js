const title = " Detail-driven development, aligned with your goals!";
const target = document.getElementById("title-text");
let i = 0;

target.textContent = ">"

function type() {
    if (i < title.length) {
        target.textContent += title[i];
        i++;

        let delay = Math.random() * 150;

        setTimeout(type, delay);
    }
}

window.onload = type;