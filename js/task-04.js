/**
 Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */

const refs = {
  decrementRef: document.querySelector('[data-action="decrement"]'),
  valueRef: document.querySelector('#value'),
  incrementRef: document.querySelector('[data-action="increment"]'),
};

let counterValue = Number(refs.valueRef.textContent);
// console.log(counterValue);
// console.log(typeof (counterValue));

refs.incrementRef.addEventListener('click', onButtonIncrement);
refs.decrementRef.addEventListener('click', onButtonDecrement);


function onButtonIncrement(event) {
  // console.log(event);
  counterValue += 1;
  console.log(counterValue);
  // refs.valueRef.replaceWith(counterValue); //-----> Dear mentor, Why counterValue only changes 1 time and stops in this case????
  
  // ---1st option solution---
  // refs.valueRef.innerHTML = counterValue;

  // ---2nd option solution---
  refs.valueRef.textContent = counterValue;
};

function onButtonDecrement() {
  counterValue -= 1;
  console.log(counterValue);
  refs.valueRef.textContent = counterValue;
};

console.log(counterValue);
