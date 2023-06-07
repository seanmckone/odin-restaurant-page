function loadMenuPage() {

  // Dynamically generate the home page
  const article = document.createElement("article");
  article.classList.add("menu-content");

  const menuIndicator = document.createElement("div");
  menuIndicator.classList.add("menu-indicator");
  const indicatorText = document.createElement("h2");
  indicatorText.textContent = "our menu varies weekly";
  menuIndicator.appendChild(indicatorText);

  article.appendChild(menuIndicator);

  const menuList = document.createElement("div");

  menuList.classList.add("menu-list");
  const menuText1 = document.createElement("h2");
  menuText1.textContent = "chicken + duck kebab";
  menuList.appendChild(menuText1);

  const menuText2 = document.createElement("h2");
  menuText2.textContent = "turkey + honey gravy";
  menuList.appendChild(menuText2);

  const menuText3 = document.createElement("h2");
  menuText3.textContent = "a5 wagyu 3oz";
  menuList.appendChild(menuText3);

  const menuText4 = document.createElement("h2");
  menuText4.textContent = "sweet potato souffle";
  menuList.appendChild(menuText4);

  const menuText5 = document.createElement("h2");
  menuText5.textContent = "golf ball cake";
  menuList.appendChild(menuText5);

  article.appendChild(menuList);

  return article;
}

export default loadMenuPage;