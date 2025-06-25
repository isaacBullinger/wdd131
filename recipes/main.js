import recipes from "./recipes.mjs";

function generateRandom(number) {
    return Math.floor(Math.random()*number);
}

function getRandomEntry(array) {
    const listLength = array.length;
    let number = generateRandom(listLength);

    return array[number];
}

function tagsTemplate(tags) {
    if (!Array.isArray(tags)) return '';

    let html = '';
    tags.forEach(tag => {
        html += `<li>${tag}</li>`;
    });

    return html;
}

function ratingTemplate(rating) {
    let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
    >`;

    for (let i = 1; i <= 5; i++) {
        if (i < rating) {
            html += `
                <span aria-hidden="true" class="icon-star">⭐</span>
            `;
        } else {
            html += `
                <span aria-hidden="true" class="icon-star-empty">☆</span>
            `;
        }
    }

    html += `</span`;

    return html;
}

function recipeTemplate(recipe) {
    return `
        <figure class="recipe-card">
            <img src="${recipe.image}">
            <figcaption class="right-info">
                <ul class="type">
                    ${tagsTemplate(recipe.tags)}
                </ul>

                <h2>
                    <a href="#">${recipe.name.toUpperCase()}</a>
                </h2>

                <p class="stars">
                    ${ratingTemplate(recipe.rating)}
                </p>

                <div class="description">
                    <p>${recipe.description}</p>
                </div>
            </figcaption>
        </figure>`;
}

function renderRecipes(recipes) {
    const recipeContainer = document.querySelector(".recipe-container");

    const html = recipes.map(recipe => recipeTemplate(recipe)).join('');
    recipeContainer.innerHTML = html;
}

function init() {
    const recipe = getRandomEntry(recipes);

    renderRecipes([recipe]);
}

function filter(query) {
	const filtered = recipes.filter(recipe =>
		recipe.name?.toLowerCase().includes(query) ||
		recipe.description?.toLowerCase().includes(query) ||
		(recipe.tags || []).some(tag => tag.toLowerCase().includes(query)) ||
		(recipe.recipeIngredient || []).some(ing => ing.toLowerCase().includes(query))
	);

	const sorted = filtered.sort(sortFunction);
	return sorted;
}

function sortFunction(recipe1, recipe2) {
	return recipe1.name.localeCompare(recipe2.name);
}

function searchHandler(event) {
	event.preventDefault();

	const query = document.getElementById('search-input').value.trim().toLowerCase();
	const filteredRecipes = filter(query);

    console.log(filteredRecipes);

	renderRecipes(filteredRecipes);
}

init();

document.querySelector('.search-button').addEventListener('click', searchHandler);

document.getElementById('search-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchHandler(event);
    }
});