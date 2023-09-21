import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home"
import Menu from "./Menu"

Header();
Nav();
Home()

const homeButton = document.querySelector(".home-btn");
const menuButton = document.querySelector(".menu-btn");
const aboutButton = document.querySelector(".about-btn");
const orderButton = document.querySelector(".order-now-btn");

const content = document.querySelector("#content")



homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    Home();
});


menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    Menu();
});