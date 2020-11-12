// 1. Для наших обьектов используем метод, который возвращет массив ключей;
// 2. Создаем две переменные, которые будут содержать лучший результат (по умолчанию 0) и имя лучшего сотрудника (по умолчанию пустая строка);
// 3. С помощью цикла for of перебираем наш массив используя условие;
// 4. Условие - если значение ключа больше чем значение переменной bestScore, тогда записываем в bestScore значение ключа;
// 5. Также внутри цикла для переменной bestName записываем имя ключа;
// 6. Возвращаем через функцию имя лучшего сотрудника;

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

// Второй вариант через распыление, Math.max и получения массивов сразу двумя методами keys и values, но без переменной;

// 1. Создаем массив значений из получаемого обьекта;
// 2. Создаем массив ключей из получаемого обьекта;
// 3. Ищем максимальное значение через Math.max в массиве значений;
// 4. Ищем индекс максимальньного значения в масиве значений;
// 5. Возвращаем через функцию индекс с именем сотрудника;

// const findBestEmployee = function (employees) {
//   ('use strict');
//   // Write code under this line

//   const values = Object.values(employees);
//   const keys = Object.keys(employees);

//   const max = Math.max(...values);
//   const indexOfMax = values.indexOf(max);

//   return keys[indexOfMax] || '';
// }

//   // Объекты и ожидаемый результат
//   const developers = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   };
//   console.log(findBestEmployee(developers));
//   // 'lorence'

//   const supports = {
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   };
//   console.log(findBestEmployee(supports));
//   // 'mango'

//   const sellers = {
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   };
//   console.log(findBestEmployee(sellers));
//   // 'lux'

// Третий вариант через распыление, Math.max и получения массивов сразу двумя методами keys и values и с пустой переменной;

// 1. Создаем переменную с пустой строкой
// 2. Создаем массив значений из получаемого обьекта;
// 3. Создаем массив ключей из получаемого обьекта;
// 4. Ищем максимальное значение через Math.max в массиве значений;
// 5. Ищем индекс максимальньного значения в масиве значений;
// 6. Добавляем условие, что если имя сотрудника true, тогда возвращаем его имя.
// 7. Возвращаем через функцию переменную с пустой строкой (на случай не выполнения условия);

// const findBestEmployee = function (employees) {
//   ('use strict');
//   // Write code under this line

// let result = '';

//   const values = Object.values(employees);
//   const keys = Object.keys(employees);

//   const max = Math.max(...values);
//   const indexOfMax = values.indexOf(max);

// if (keys[indexOfMax]) {
//   return keys[indexOfMax];
// }
// return result;

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'