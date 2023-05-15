const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector('ul#ingredients');
ingredients.forEach(function(el) {
  const elementLi = document.createElement('li');
  elementLi.textContent = el;
  elementLi.classList.add('ingredients_item');
  listIngredients.appendChild(elementLi);
})
