
// Dynamically generate the navbar
function loadNavBar() {

  const nav = document.createElement("nav");

  const navUl = document.createElement("ul");

  const homeButton = document.createElement("li");
  homeButton.id = "home-button";
  homeButton.textContent = "Home";
  navUl.appendChild(homeButton);

  const menuButton = document.createElement("li");
  menuButton.id = "menu-button";
  menuButton.textContent = "Menu";
  navUl.appendChild(menuButton);

  const aboutButton = document.createElement("li");
  aboutButton.id = "about-button";
  aboutButton.textContent = "About";
  navUl.appendChild(aboutButton);

  const hr = document.createElement("hr");

  nav.appendChild(navUl);
  nav.appendChild(hr);

  return nav;

}

export default loadNavBar;