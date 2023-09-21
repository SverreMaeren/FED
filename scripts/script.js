var hamburgerMenuButton = document.querySelector("nav ul :nth-of-type(4) button");

hamburgerMenuButton.onclick = hamburgerMenuButtonKlik;

function hamburgerMenuButtonKlik() {
    if (hamburgerMenuButton.ariaExpanded == "false") {
        hamburgerMenuButton.ariaExpanded = "true"
    }
    else {
        hamburgerMenuButton.ariaExpanded = "false"
    }
}