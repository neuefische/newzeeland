const picturearray = [
  "pictures/neuseelandberge.jpg",
  "pictures/neuseelandhaus.jpeg",
  "pictures/neuseelandstrand.jpg"
];

function startimage(image_path) {
  const floraContainer = document.createElement("div");
  floraContainer.className = "main_container";
  const floraCreateImage = document.createElement("img");
  floraCreateImage.id = "main_image";
  floraCreateImage.src = picturearray[0];

  floraContainer.appendChild(floraCreateImage);

  document.querySelector(".flora_main").appendChild(floraContainer);
}

startimage();

const imagecatcher = document.getElementById("main_image");

const houseInterval = setInterval(function picturehouse() {
  imagecatcher.src = picturearray[0];
}, 4000 + Math.random());

const beachInterval = setInterval(function picturebeach() {
  imagecatcher.src = picturearray[1];
}, 7000 + Math.random());

const hillsInterval = setInterval(function picturehills() {
  imagecatcher.src = picturearray[2];
}, 10000 + Math.random());

const imageShowSwitch = document.createElement("button");
imageShowSwitch.id = "switchBtn";
imageShowSwitch.innerText = "Start/Stop";
document.querySelector(".flora_main").appendChild(imageShowSwitch);

let imageStopCount = "0";
let btnImageClick = document.getElementById("switchBtn");

btnImageClick.addEventListener("click", stopImageShow);
btnImageClick.addEventListener("click", startImageShow);

function stopImageShow() {
  clearInterval(beachInterval);
  clearInterval(houseInterval);
  clearInterval(hillsInterval);
}

function startImageShow() {}
