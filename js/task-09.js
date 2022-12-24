const buttonRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const bodyRef = document.body;
console.log(bodyRef);

const changeColor = () => {
  let color = getRandomHexColor();
  colorRef.textContent = color;
  bodyRef.style.backgroundColor = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonRef.addEventListener("click", changeColor);
