const inputVal = document.getElementById("validation-input");
const inputLenght = Number(inputVal.getAttribute("data-length"));

inputVal.addEventListener(`blur`, onInputChange);

function onInputChange(event) {
  console.log(inputVal.value.length);

  if (inputVal.value.length !== inputLenght) {
    inputVal.classList.add("invalid");
  } else {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  }
}
