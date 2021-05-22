/**
 * Напиши скрипт, который для каждого элемента массива ingredients 
 * создаст отдельный li, после чего вставит все li за одну операцию 
 * в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
 */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

// const items = ingredients.map(ingredient => {
//   const itemRef = document.createElement('li');
//   itemRef.textContent = ingredient;
//   // console.log(itemRef)
//   return itemRef
// });
// ingredientsRef.append(...items)


//function for creating markup
const createMarkup = array => {
  return array.map(ingredient => {
    const itemRef = document.createElement('li');
    itemRef.textContent = ingredient;
    // console.log(itemRef)
    return itemRef
  });
};

const items = createMarkup(ingredients);
ingredientsRef.append(...items);