function kiwi() {
  const container = document.createElement("article");
  container.className = "card";
  const heading = document.createElement("h2");
  heading.className = "cardheader";
  heading.id = "newheading";
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

function addNextButton() {
  const btn = document.createElement("button");
  btn.className = "cardbutton";
  btn.type = "button";
  btn.id = "nextbutton";
  const btnText = document.createTextNode("<<");
  btn.appendChild(btnText);

  document.querySelector(".main").appendChild(btn);
}

addNextButton();
document.getElementById("nextbutton").onclick = function() {
  document.getElementById("newheading").innerHTML = "New bird";
};

function addBackButton() {
  const btn = document.createElement("button");
  btn.className = "cardbutton";
  btn.type = "button";
  btn.id = "backbutton";
  const btnText = document.createTextNode(">>");
  btn.appendChild(btnText);

  document.querySelector(".main").appendChild(btn);
}

addBackButton();
document.getElementById("backbutton").onclick = function() {
  document.getElementById("newheading").innerHTML = "Kiwi bird";
};
