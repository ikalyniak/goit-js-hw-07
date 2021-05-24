/**
 * Напиши скрипт, который бы при потере фокуса на инпуте, 
 * проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
 */


const inputRef = document.querySelector('#validation-input');
// console.dir(inputRef)
// console.log(inputRef.attributes);
const inputDataLengthRef = Number(inputRef.getAttribute('data-length'));
// console.log(inputDataLengthRef);

inputRef.style.border = '3px solid #bdbdbd';
inputRef.classList.add('valid');
inputRef.classList.add('invalid');

const inputValidRef = document.querySelector('.valid');
const inputInvalidRef = document.querySelector('.invalid');




inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  // console.log(event.currentTarget.value.length)
  if (event.currentTarget.value.length === inputDataLengthRef) {
    inputValidRef.style.borderColor = '#4caf50';
  } else {
    inputInvalidRef.style.borderColor = '#f44336';
  };
};

