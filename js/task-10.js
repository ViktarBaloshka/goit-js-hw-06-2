// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит
// количество элементов в input и нажимает кнопку Создать, после чего рендерится
// коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в
// div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым
//  удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let sizeDefaultDiv = 30;

const boxesParent = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputElement = document.querySelector('#controls').firstElementChild;

createBtn.addEventListener('click', createEl);
destroyBtn.addEventListener('click', destroyEl);

function createEl() {
  const amountBox = createBoxes(inputElement.value);
  boxesParent.append(...amountBox);
}

function createBoxes(amount) {
  let sizeBox = 0;
  const boxElements = [];
  for (let i = 0; i < amount; i++) {
    const boxElement = document.createElement('div');
    boxElement.style.backgroundColor = getRandomHexColor();
    boxElement.style.display = 'block';
    sizeBox = sizeDefaultDiv + i * 10;
    boxElement.style.width = `${sizeBox}px`;
    boxElement.style.height = `${sizeBox}px`;
    boxElements.push(boxElement);
  }
  sizeDefaultDiv = sizeBox + 10;
  return boxElements;
}

function destroyEl() {
  boxesParent.textContent = '';
  sizeDefaultDiv = 30;
}
