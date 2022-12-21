

const fontSizeControlRef = document.querySelector(`#font-size-control`);
const spanTextRef = document.querySelector(`#text`);

fontSizeControlRef.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  spanTextRef.style.fontSize = fontSizeControlRef.value + "px";
}
