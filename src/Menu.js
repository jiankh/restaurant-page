import {pastryData} from './itemData'
import Card from "./Card"

function Menu() {
    const content = document.querySelector("#content");
    const menu = document.createElement("div");
    menu.classList = "menu-container";

    //Banner and Title 
    const banner = document.createElement("div")
    banner.classList.add("banner-container")
    const menuText = document.createElement("h1")
    menuText.textContent = "Menu"
    banner.appendChild(menuText)

    const cardContainer = document.createElement('div'); 
    cardContainer.classList.add('card-container');


    pastryData.forEach((item) => {
        const cardHTML = Card(item.title, item.img, item.description, item.price);
        const cardElement = document.createElement("div");
        cardElement.innerHTML = cardHTML;
        cardContainer.appendChild(cardElement);
    });

    content.appendChild(banner)
    content.appendChild(cardContainer)
    
}

export default Menu