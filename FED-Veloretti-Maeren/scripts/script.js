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




// Heb ik van mats gekregen. //
var BurgerButton = document.querySelector("body nav:first-of-type ul li:nth-of-type(4)");
var BurgerOpen = document.querySelector("body nav:nth-of-type(2)");

BurgerButton.addEventListener("click", () => {
BurgerOpen.classList.toggle("MenuOpen");
console.log("click");
});




var laserKatButton = document.querySelector("main > button:nth-of-type(3)")

laserKatButton.onclick = laserKatButtonKlik;

var laserKatButtonVisible = false;

function laserKatButtonKlik() {
    var image = document.querySelector("main > img:nth-of-type(3)");

    if (laserKatButtonVisible) {
        image.style.display = "none";
    }
    else {
        image.style.display = "block";
    }   
    laserKatButtonVisible = !laserKatButtonVisible;
}