// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод
//document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список
// ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientItemElements = ingredients.map((element) => {
  const itemsElement = document.createElement("li");
  itemsElement.textContent = element;
  itemsElement.classList.add("item");
  return itemsElement;
});

const ingredientsListElement = document
  .querySelector("#ingredients")
  .append(...ingredientItemElements);
