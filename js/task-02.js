const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector('#ingredients');

const foodList = ingredients.map(ingredient => {
const ingredientEl = document.createElement('li');
ingredientEl.classList.add('item');
ingredientEl.textContent = ingredient;

  return ingredientEl;

});

console.log(foodList);

ingredientList.append(...foodList);

