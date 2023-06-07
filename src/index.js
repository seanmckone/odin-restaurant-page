import loadNavBar from "./modules/navBar";
import loadHomePage from "./modules/homePage";
import loadMenuPage from "./modules/menuPage";
import loadAboutPage from "./modules/aboutPage";

const content = document.getElementById("content");

content.appendChild(loadNavBar());

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

content.appendChild(loadHomePage());
let article = document.getElementsByTagName("article")[0];
homeButton.style.color = "black";
let currButton = homeButton;

homeButton.addEventListener("click", function () {
  currButton.style.color = "#9C9C9C";
  content.removeChild(article)
  content.appendChild(loadHomePage());
  homeButton.style.color = "black";
  article = document.getElementsByTagName("article")[0];
  currButton = homeButton;
});

menuButton.addEventListener("click", function () {
  currButton.style.color = "#9C9C9C";
  content.removeChild(article)
  content.appendChild(loadMenuPage());
  menuButton.style.color = "black";
  article = document.getElementsByTagName("article")[0];
  currButton = menuButton;
});

aboutButton.addEventListener("click", function () {
  currButton.style.color = "#9C9C9C";
  content.removeChild(article)
  content.appendChild(loadAboutPage());
  aboutButton.style.color = "black";
  article = document.getElementsByTagName("article")[0];
  currButton = aboutButton;
});



// content.appendChild(loadMenuPage());
// content.appendChild(loadAboutPage());
