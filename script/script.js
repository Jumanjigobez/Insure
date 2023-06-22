//Function to ease getting of DOM elements
const elem = (x) =>{
    return document.querySelector(x)
}

//Mobile Menu
var mobile_menu = elem(".mobile_menu"),
    menu = elem(".menu_part");

const openMenu = () =>{
    menu.classList.add("active");
    mobile_menu.innerHTML = `<p onclick="closeMenu()"><img src="images/icon-close.svg" alt="Menu Button"></img></p>`;
}

const closeMenu = () =>{
    menu.classList.remove("active");
    mobile_menu.innerHTML = `<p onclick="openMenu()"><img src="images/icon-hamburger.svg" alt="Menu Button"></img></p>`;
}