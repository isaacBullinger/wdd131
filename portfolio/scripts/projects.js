import { projects } from './projects.mjs';

const container = document.getElementById("projects-container");

projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const image = document.createElement("img");
    image.src = "../imgs/" + project.mainImg;
    image.alt = project.title;

    const title = document.createElement("h2");
    title.textContent = project.title;

    const description = document.createElement("p");
    const words = project.description.split(" ");
    const shortDesc = words.slice(0, 50).join(" ");
    const fullDesc = project.description;

    const descText = document.createElement("span");
    descText.textContent = shortDesc + " ";

    const seeMore = document.createElement("a");
    seeMore.textContent = "see more...";
    seeMore.className = "see-more";
    seeMore.onclick = (e) => {
        e.stopPropagation();
        descText.textContent = fullDesc;
        seeMore.style.display = "none";
    };

    const textContainer = document.createElement("div");
    textContainer.appendChild(title);
    textContainer.appendChild(descText);
    if (words.length > 50) textContainer.appendChild(seeMore);

    card.appendChild(image);
    card.appendChild(textContainer);

    card.onclick = () => openProjectView(index);

    container.appendChild(card);
});

function openProjectView(index) {
    const project = projects[index];
    const main = document.getElementById("main");
    main.innerHTML = "";
    main.className = "project-view";

    const title = document.createElement("h1");
    title.textContent = project.title;

    const mainImg = document.createElement("img");
    mainImg.src = "../imgs/" + project.mainImg;
    mainImg.alt = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    main.appendChild(title);
    main.appendChild(mainImg);
    main.appendChild(description);

    if (project.pictures && project.captions) {
        for (let i = 0; i < project.pictures.length; i++) {
            const img = document.createElement("img");
            img.src = "../imgs/" + project.pictures[i];
            img.alt = project.captions[i] || "Project image";

            const caption = document.createElement("p");
            caption.textContent = project.captions[i] || "";

            main.appendChild(img);
            main.appendChild(caption);
        }
    }
}
