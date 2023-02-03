const images = ["9.jpg", "10.jpg", "11.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement("img");

backgroundImage.src = `img/${randomImage}`;
document.body.appendChild(backgroundImage);
backgroundImage.classList.add("bgimg");
