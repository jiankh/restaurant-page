import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home"
import Menu from "./Menu"
import About from "./About"
import Footer from "./Footer"

Header();
Nav();
Home();
Footer();


const homeButton = document.querySelector(".home-btn");
const menuButton = document.querySelector(".menu-btn");
const aboutButton = document.querySelector(".about-btn");
const orderButton = document.querySelector(".order-now");

const content = document.querySelector("#content")


homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    Home();
});

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    Menu();
});

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    About();
});

orderButton.addEventListener("click", () => {
    content.innerHTML = "";
    Menu();
});