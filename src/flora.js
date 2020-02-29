let changeImagePath = "pictures/neuseelandberge.jpg";

function startimage(image_path) {
  const floraContainer = document.createElement("div");
  floraContainer.className = "main_container";
  const floraCreateImage = document.createElement("img");
  floraCreateImage.id = "main_image";
  image_path = changeImagePath;
  floraCreateImage.src = image_path;

  floraContainer.appendChild(floraCreateImage);

  document.querySelector(".flora_main").appendChild(floraContainer);
}

startimage();

const imagecatcher = document.getElementById("main_image");

setInterval(() => {
  setTimeout(function picturehouse() {
    changeImagePath = "pictures/neuseelandhaus.jpeg";
    imagecatcher.src = changeImagePath;
  }, 3000);

  setTimeout(function picturebeach() {
    changeImagePath = "pictures/neuseelandstrand.jpg";
    imagecatcher.src = changeImagePath;
  }, 6000);

  setTimeout(function picturehills() {
    changeImagePath = "pictures/neuseelandberge.jpg";
    imagecatcher.src = changeImagePath;
  }, 9000);
}, 9001);
