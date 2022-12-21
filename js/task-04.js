const button = {
  incrementRef: document.querySelector("[data-action='increment']"),
  decrementRef: document.querySelector("[data-action='decrement']"),
  spanRef: document.querySelector("#value"),
};

let counterValue = 0;

const addsValue = () => {
  counterValue += 1;

  button.spanRef.textContent = counterValue;
};

const subtractsValue = () => {
  counterValue -= 1;

  button.spanRef.textContent = counterValue;
};

button.incrementRef.addEventListener("click", addsValue);
button.decrementRef.addEventListener("click", subtractsValue);
