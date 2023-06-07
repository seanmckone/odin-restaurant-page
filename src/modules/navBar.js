
// Dynamically generate the navbar
function loadNavBar() {

  const nav = document.createElement("nav");

  const navUl = document.createElement("ul");

  const homeButton = document.createElement("li");
  homeButton.classList.add("home-button");
  const homeLink = document.createElement("a");
  homeLink.href = "";
  homeLink.textContent = "Home";
  homeButton.appendChild(homeLink);
  navUl.appendChild(homeButton);

  const menuButton = document.createElement("li");
  menuButton.classList.add("menu-button");
  const menuLink = document.createElement("a");
  menuLink.href = "";
  menuLink.textContent = "Menu";
  menuButton.appendChild(menuLink);
  navUl.appendChild(menuButton);

  const aboutButton = document.createElement("li");
  aboutButton.classList.add("about-button");
  const aboutLink = document.createElement("a");
  aboutLink.href = "";
  aboutLink.textContent = "About";
  aboutButton.appendChild(aboutLink);
  navUl.appendChild(aboutButton);

  const hr = document.createElement("hr");

  nav.appendChild(navUl);
  nav.appendChild(hr);

  return nav;

}

export default loadNavBar;