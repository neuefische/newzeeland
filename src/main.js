function addElement() {
  // erstelle ein neues div Element
  // und gib ihm etwas Inhalt
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.

  // füge das neu erstellte Element und seinen Inhalt ins DOM ein

  document.querySelector(".main").appendChild(newDiv);
}

addElement();
