// 1. Переводим обьект в массив и записываем его в переменную keys
// 2. Для параметра функции отдаем длинну массива
// 3. Делаем возврат функции

const countProps = function (obj) {
  'use strict';
  // Write code under this line
  const keys = Object.keys(obj);
  obj = keys.length;

  return obj;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// Второй вариант решения без дополнительной переменной 

// 1. Обьявляем переменную, которой присваиваем обьект, преобразованный в массив, и сразу же для него определяем длинну.
// 2. Возвращаем переменную через возврат функции

// const countProps = function (obj) {
//   'use strict';
//   // Write code under this line
//   const keys = Object.keys(obj).length;

//   return keys;
// };
