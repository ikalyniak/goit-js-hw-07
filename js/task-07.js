/**
 * Напиши скрипт, который реагирует на изменение значения 
 * input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя 
 * свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
 */

const rangeInputRef = document.querySelector('#font-size-control');
// console.log(rangeInputRef.attributes);
const spanRef = document.querySelector('#text');
const spanDefaultValueRef = rangeInputRef.getAttribute('value');
// console.log(spanDefaultValueRef)
spanRef.style.fontSize = spanDefaultValueRef


const onInput = (event) => spanRef.style.fontSize = event.target.value + 'px';
rangeInputRef.addEventListener('input', onInput);