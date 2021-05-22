/**
Напиши скрипт для создания галлереи изображений по массиву данных.
Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

- Все элементы галереи должны добавляться в DOM за одну операцию вставки.
- Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
 */

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');
galleryRef.style.listStyle = 'none';
galleryRef.style.display = 'flex';
galleryRef.style.alignItems = 'center';

// const items = images.map(image => galleryRef.insertAdjacentHTML('beforeend', `<li><img src='${image.url}' alt='${image.alt}' width='300'/></li>`));


// const items = images.map(image => `<li><img src='${image.url}' alt='${image.alt}' width='300'/></li>`);
// galleryRef.insertAdjacentHTML('beforeend', items.join(''));


//function for creating markup
const createMarkup = array => array.map(item => `<li><img src='${item.url}' alt='${item.alt}' width='300'/></li>`);
const items = createMarkup(images);
galleryRef.insertAdjacentHTML('afterbegin', items.join(''));

