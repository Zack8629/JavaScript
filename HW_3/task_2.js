// 2. С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


basket = ['SSD', [100, 3], 'hdd', [50, 3]];
function countBasketPrice(_basket) {
    basketPrice = [];
    for (let idxBasket = 0; idxBasket < _basket.length; idxBasket++) {
        if (idxBasket % 2 === 0 || idxBasket === 0) {
            let cost = _basket[idxBasket + 1][0] * _basket[idxBasket + 1][1];
            basketPrice.push(`${_basket[idxBasket]} = ${cost}`);
        }
    }

    console.log(basketPrice);
}

countBasketPrice(basket);
