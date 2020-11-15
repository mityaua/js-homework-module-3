// 1. Создаем пустую переменную result которая по умолчанию содержит пустой массив;
// 2. С помощью цикла for of перебираем массив обьектов array
// 3. Добавляем внутрь цикла проверку (условие) на наличие ключа через оператор in
// 4. Условие - если ключ есть в свойствах, тогда добавляем все значения в массив result. В противном случае возвращаем пустой массив.
// 5. Возвращаем результат с помощью функции

function getAllPropValues(array, prop) {
  'use strict';
  // Write code under this line
  let result = [];

  for (const item of array) {
    if (prop in item) {
      result.push(item[prop]);
    } else {
      result;
    }
  }

  return result;
}

// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []
