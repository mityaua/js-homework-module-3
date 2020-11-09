// 1. Обьвляем две переменные, которые будут принимать результат умножения цены и количества, а также итоговый результат вычислений
// 2. С помощью цикла for of перебираем массив обьектов
// 3. Добавляем условие, которое проверяет совпадение названия товара с названием товара внутри обьекта
// 4. Внутри условия присваиваем переменным результаты вычислений
// 5. Конечное значение записывает в переменную result
// 6. Делаем возврат из функции

function calculateTotalPrice(array, prop) {
  'use strict';
  // Write code under this line
  let totalPrice;
  let result = 0;

  for (const item of array) {
    if (prop === item.name) {
      totalPrice = item.price * item.quantity;
      result += totalPrice;
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

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
