const inputVal = document.getElementById("validation-input");
const inputLenght = Number(inputVal.dataset.length);

inputVal.addEventListener(`blur`, onInputChange);

function onInputChange(event) {
  console.log(inputVal.value.length);

  if (inputVal.value.length !== inputLenght) {
    inputVal.classList.add("invalid");
    inputVal.classList.remove("valid");
  } else {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  }
}
