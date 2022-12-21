const refs = {
  input: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value;
  if (inputValue === "") {
    refs.nameOutput.textContent = "Anonymous";
  } else {
    refs.nameOutput.textContent = inputValue;
  }
}
