
// Dynamically generate the about page
function loadAboutPage() {

  const article = document.createElement("article");
  article.classList.add("about-content");


  const chefBuddySection = document.createElement("section");
  chefBuddySection.classList.add("chef-buddy");
  const chefBuddyHeader = document.createElement("h2");
  chefBuddyHeader.textContent = "head chef - buddy";
  const chefBuddyImg = document.createElement("img");
  chefBuddyImg.src = "../images/buddypic.png";
  chefBuddySection.appendChild(chefBuddyHeader);
  chefBuddySection.appendChild(chefBuddyImg);
  article.appendChild(chefBuddySection);

  const chefGirlSection = document.createElement("section");
  chefGirlSection.classList.add("chef-girl");
  const chefGirlHeader = document.createElement("h2");
  chefGirlHeader.textContent = "sous chef - girl";
  const chefGirlImg = document.createElement("img");
  chefGirlImg.src = "../images/girlpic.png";
  chefGirlSection.appendChild(chefGirlHeader);
  chefGirlSection.appendChild(chefGirlImg);
  article.appendChild(chefGirlSection);

  const chefDescriptionSection = document.createElement("section");
  chefDescriptionSection.classList.add("chef-description");
  const chefDescriptionHeader = document.createElement("h2");
  chefDescriptionHeader.textContent = "yes, they are dogs...";
  chefDescriptionSection.appendChild(chefDescriptionHeader);

  const br = document.createElement("br");
  chefDescriptionSection.appendChild(br);
  
  const chefDescriptionHeader2 = document.createElement("h2");
  chefDescriptionHeader2.textContent = "they also have 6 michelin stars";
  chefDescriptionSection.appendChild(chefDescriptionHeader2);
  article.appendChild(chefDescriptionSection);

  return article;

}

export default loadAboutPage;