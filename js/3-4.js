// 1. Переводим обьект в массив значений
// 2. Создаем переменную для суммы всех зарплат с исходым значением 0
// 3. С помощью цикла for of перебираем массив, суммируем все значения в переменную result
// 4. Возвращаем переменную result через возврат функции

const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  const values = Object.values(employees);

  let result = 0;

  for (const value of values) {
    result += value;
  }

  return result;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
