const themeSelector = document.getElementById('mode-selector');
const logo = document.getElementById('logo');

function changeTheme() {
    let selection = themeSelector.value;

    if (selection == "dark") {
        document.body.classList.add('dark');
        logo.src = 'byui-logo_white.png';
    }
    else {
        document.body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener( 'change', changeTheme);