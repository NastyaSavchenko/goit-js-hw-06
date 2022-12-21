const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector(`#ingredients`);
// console.log(ingredientsRef);

const ingredientsNewArray = ingredients.map((ingredient) => {
  const elements = document.createElement(`li`);
  elements.classList.add(`item`);
  elements.textContent = ingredient;

  return elements;
});

ingredientsRef.append(...ingredientsNewArray);
