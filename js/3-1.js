// Пример суммирования цены всех товаров в корзине через метод обьекта

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values = Object.values(goods);
console.log(values);

let total = 0;

for (const value of values) { 
    total += value;
}

console.log(total);
