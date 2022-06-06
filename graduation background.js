const images = ['2.jpeg', '4.jpeg', '6.jpeg', '8.jpeg', '8.jpeg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `image/${chosenImage}`;

bgImage.style.width = '1740px';
bgImage.style.height = '970px';

document.body.appendChild(bgImage);
