import loadNavBar from "./modules/navBar";
import loadHomePage from "./modules/homePage";
import loadMenuPage from "./modules/menuPage";

const content = document.getElementById("content");

content.appendChild(loadNavBar());
// content.appendChild(loadHomePage());
content.appendChild(loadMenuPage());
