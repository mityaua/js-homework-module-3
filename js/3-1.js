// 1. Добавляем новые поля в обьект по условиям задачи
// 2. Для full time используем особую запись, которая паредаёт строку
// 3. Через цикл for of делаем иттерацию по массиву, который за нас был создан в переменной keys
// 4. Выводим результат в переменную message используя шаблонную строку, которая состоит из свойства ключа и его значения

let message = '';

const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.hobby = 'skydiving';
user.premium = false;
user.mood = 'happy';
user['full time'] = true;

const keys = Object.keys(user);
// Write code under this line

for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
}

console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */
