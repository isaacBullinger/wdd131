const container = document.getElementById("projects-container");

projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const image = document.createElement("img");
    image.src = project.mainImg;
    image.alt = project.title;

    const title = document.createElement("h2");
    title.textContent = project.title;

    const description = document.createElement("p");
    const words = project.description.split(" ");
    const shortDesc = words.slice(0, 50).join(" ");
    const fullDesc = project.description;

    const descText = document.createElement("span");
    descText.textContent = shortDesc + " ";

    const seeMore = document.createElement("button");
    seeMore.textContent = "See more";
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
