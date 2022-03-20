const images = [ "0.png", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`; //이미지 폴더에 있는것중에 choseimage를 이용해 선택함.

document.body.appendChild(bgImage); //appendchild는 html의 body 에 추가해줌