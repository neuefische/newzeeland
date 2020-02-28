function kiwi() {
  const container = document.createElement("article");
  container.className = "card";
  const heading = document.createElement("h2");
  heading.className = "cardheader";
  const image = document.createElement("img");
  image.className = "cardimage";
  const paragraph = document.createElement("p");
  paragraph.className = "cardtext";

  const headingText = document.createTextNode("Kiwi bird");
  image.src = "pictures/kiwi.jpeg";
  const paragraphText = document.createTextNode("Lorem ipsum. Blablabla.");

  heading.appendChild(headingText);
  paragraph.appendChild(paragraphText);
  container.appendChild(heading);
  container.appendChild(image);
  container.appendChild(paragraph);

  document.querySelector(".main").appendChild(container);
}

kiwi();
