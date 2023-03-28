// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
//     Сколько символов должно быть в инпуте, указывается в его атрибуте
// data - length.Если введено подходящее количество символов, то border
//  инпута становится зелёным, если неправильное - красным.Для добавления
// стилей, используй CSS - классы valid и invalid, которые мы уже добавили
// в исходные файлы задания.

const inputSymbols = document.querySelector('#validation-input');

inputSymbols.addEventListener('blur', event => {
  if (
    event.currentTarget.value.length < event.currentTarget.dataset.length ||
    event.currentTarget.value.length > event.currentTarget.dataset.length
  ) {
    inputSymbols.classList.add('invalid');
    inputSymbols.classList.remove('valid');
  } else {
    inputSymbols.classList.add('valid');
    inputSymbols.classList.remove('invalid');
  }
});
// const input = document.getElementById('validation-input');

// input.addEventListener('blur', event => {
//   const length = event.target.getAttribute('data-length');
//   const value = event.target.value;

//   if (value.length === parseInt(length)) {
//     event.target.classList.add('valid');
//     event.target.classList.remove('invalid');
//   } else {
//     event.target.classList.add('invalid');
//     event.target.classList.remove('valid');
//   }
// });
