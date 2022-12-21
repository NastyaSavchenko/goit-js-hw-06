const totalCategoriesRef = document.querySelectorAll(".item");
// const totalCategoriesLength = Number(totalCategoriesRef.length);
console.log(`Number of categories:`, Number(totalCategoriesRef.length));

// const categoriesArray = [...totalCategoriesRef]
//   .map(
//     (categories) =>
//       `Category: ${categories.children[0].textContent}`
//         `Elements:`,
//     Number(categories.children[1].children.length)
//   )
//   .join("\n");

// console.log(categoriesArray);

const categoriesArray = [...totalCategoriesRef]
  .map(
    (categories) =>
      `Category: ${categories.children[0].textContent};
Elements: ${Number(categories.children[1].children.length)};`
  )
  .join("\n");

console.log(categoriesArray);
