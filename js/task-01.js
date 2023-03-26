// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий
// в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и
//  количество элементов в категории(всех вложенных в него < li >).
// Для выполнения этой задачи нужно использовать
// метод forEach() и свойства навигации по DOM.

const findElement = document.querySelectorAll(".item").length;
console.log("Number of categories: " + findElement);

const categoryItemsElement = document
  .querySelectorAll(".item")
  .forEach((element) => {
    console.log("Category: " + element.querySelector("h2").textContent);
    console.log("Elements: " + element.querySelector("ul").children.length);
  });
