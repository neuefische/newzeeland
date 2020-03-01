/*function gif() {
  const gifCard = document.createElement("img");
  gifCard.className("cardgif");
  gifCard.src = "pictures / hobbit.gif";
  document.querySelector(".main").appendChild(gifCard);
}
gif();*/

function gif() {
  const gif = document.createElement("img");
  gif.className = "hobbitgif";
  gif.src = "pictures/hobbitgif.gif";
  document.querySelector(".main").appendChild(gif);
}
gif();

function card() {
  const container = document.createElement("article");
  const heading = document.createElement("h2");
  const image = document.createElement("img");
  const text = document.createElement("p");

  container.className = "card";
  heading.className = "cardheading";
  image.className = "cardimage";
  text.className = "cardtext";

  const headingText = document.createTextNode("Hobbingen");
  image.src = "pictures/hobbiton.jpg";

  const cardText = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );

  heading.appendChild(headingText);
  text.appendChild(cardText);

  container.appendChild(heading);
  container.appendChild(image);
  container.appendChild(text);

  document.querySelector(".main").appendChild(container);
}
card();
