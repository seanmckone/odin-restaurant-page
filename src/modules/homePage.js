
// Dynamically generate the home page
function loadHomePage() {

  const article = document.createElement("article");
  article.classList.add("home-content");

  const h1 = document.createElement("h1");
  h1.textContent = "Buddy's Kitchen";
  article.appendChild(h1);

  const section1 = document.createElement("section");
  const p1 = document.createElement("p");
  p1.textContent = "avant-garde dishes from chef buddy's perspective";
  section1.appendChild(p1);
  article.appendChild(section1);

  const section2 = document.createElement("section");
  const p2 = document.createElement("p");
  p2.textContent = "m-f 11am - 11pm";
  const p3 = document.createElement("p");
  p3.textContent = "sat 5pm - 2am";
  section2.appendChild(p2);
  section2.appendChild(p3);
  article.appendChild(section2);

  const section3 = document.createElement("section");
  const p4 = document.createElement("p");
  p4.textContent = "555 5th avenue, ny, ny";
  section3.appendChild(p4);
  article.appendChild(section3);

  const section4 = document.createElement("section");
  const p5 = document.createElement("p");
  p5.textContent = "invitation only";
  section4.appendChild(p5);
  article.appendChild(section4);

  return article;
  
}

export default loadHomePage;