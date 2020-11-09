// 1. Для наших обьектов используем метод, который возвращет массив ключей
// 2. Создаем две переменные, которые будут содержать лучший результат (по умолчанию 0) и имя лучшего сотрудника (по умолчанию пустая строка)
// 3. С помощью цикла for of перебираем наш массив используя условие
// 4. Условие - если значение ключа больше чем значение переменной bestScore, тогда записываем в bestScore значение ключа.
// 5. А также для переменной bestName записываем имя ключа и возвращаем его через функцию

const findBestEmployee = function (employees) {
  ('use strict');
  // Write code under this line

  const keys = Object.keys(employees);

  let bestScore = 0;
  let bestName = '';

  for (const key of keys) {
    if (employees[key] > bestScore) {
      bestScore = employees[key];
      bestName = key;
    }
  }

  return bestName;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
