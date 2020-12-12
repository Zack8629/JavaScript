// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2 + ++a); alert(c);     // 5
// d = (2 + b++); alert(d);     // 4
// alert(a);                    // 3
// alert(b);                    // 3

// Почему код даёт именно такие результаты?
// Ответ: В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением. 
// В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование.


// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);  // x = 5
// console.log(x);


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; 
// ноль можно считать положительным числом.
console.log(`Задание 3:`);
let a = 1000;
let b = -2000;
console.log(`a = ${a}`);
console.log(`b = ${b}`);
if (a >= 0 && b >= 0) {
    console.log(`a - b = ${a - b}`);
} else if (a < 0 && b < 0) {
    console.log(`a * b = ${a * b}`);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    console.log(`a + b = ${a + b}`);
}

console.log(``);


// 4. Присвоить переменной а значение в промежутке[0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.
let rndA = Math.round(Math.random() * 15);
console.log(`Задание 4:`);
console.log(`rndA = ${rndA}`);
switch (rndA) {
    case 1:
        console.log(rndA++);
    case 2:
        console.log(rndA++);
    case 3:
        console.log(rndA++);
    case 4:
        console.log(rndA++);
    case 5:
        console.log(rndA++);
    case 6:
        console.log(rndA++);
    case 7:
        console.log(rndA++);
    case 8:
        console.log(rndA++);
    case 9:
        console.log(rndA++);
    case 10:
        console.log(rndA++);
    case 11:
        console.log(rndA++);
    case 12:
        console.log(rndA++);
    case 13:
        console.log(rndA++);
    case 14:
        console.log(rndA++);
    case 15:
        console.log(rndA++);
}

console.log(``);


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.
console.log(`Задание 5:`);
function fold(numberOne = NaN, numberTwo = NaN) {
    return `Cумма чисел ${numberOne} и ${numberTwo} = ${numberOne + numberTwo}`;
}

function subtract(numberOne = NaN, numberTwo = NaN) {
    return `Разница чисел ${numberOne} и ${numberTwo} = ${numberOne - numberTwo}`;
}

function multiply(numberOne = NaN, numberTwo = NaN) {
    return `Произведение чисел ${numberOne} и ${numberTwo} = ${numberOne * numberTwo}`;
}

function split(numberOne = NaN, numberTwo = NaN) {
    return `Частное чисел ${numberOne} и ${numberTwo} = ${numberOne / numberTwo}`;
}

let numberOne = 35;
let numberTwo = 40;

console.log(fold(numberOne, numberTwo));
console.log(subtract(numberOne, numberTwo));
console.log(multiply(numberOne, numberTwo));
console.log(split(numberOne, numberTwo));

console.log(``);


// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение(использовать switch).
console.log(`Задание 6:`);
function mathOperation(arg1 = NaN, arg2 = NaN, operation = NaN) {
    arg1 = Number(arg1);
    arg2 = Number(arg2);

    switch (operation) {
        case 'fold':
            return fold(arg1, arg2);
        case 'subtract':
            return subtract(arg1, arg2);
        case 'multiply':
            return multiply(arg1, arg2);
        case 'split':
            return split(arg1, arg2);
        default:
            return `Введено не верное значение!`;
    }
}

// let userOperation = prompt(`Какую операцию необходмо выполнить?`);
// let userArg1 = prompt(`Введите чило 1 для операции ${userOperation}`);
// let userArg2 = prompt(`Введите чило 2 для операции ${userOperation}`);

let userOperation = 'fold';
let userArg1 = '35';
let userArg2 = '40';
console.log(mathOperation(userArg1, userArg2, userOperation));

userOperation = 'subtract';
console.log(mathOperation(userArg1, userArg2, userOperation));

userOperation = 'multiply';
console.log(mathOperation(userArg1, userArg2, userOperation));

userOperation = 'split';
console.log(mathOperation(userArg1, userArg2, userOperation));

userOperation = 'sum';
console.log(mathOperation(userArg1, userArg2, userOperation));

console.log(``);


// 7. * Сравнить null и 0. Попробуйте объяснить результат.
console.log(`Задание 7*:`);
console.log(null > 0);    // false
console.log(null < 0);    // false
console.log(null >= 0);   // true
console.log(null <= 0);   // true
console.log(null == 0);   // false
console.log(null === 0);  // false
// С точки зрения математики это странно, обьяснить к сожалению не могу, но буду иметь ввиду.

console.log(``);


// 8. * С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.
console.log(`Задание 8*:`);
function power(val, pow) {
    val = Number(val);
    pow = Number(pow);

    if (val == 0) {
        return 0;
    } else if (pow == 0) {
        return 1;
    } else if (pow < 0) {
        return power(1 / val, -pow);
    }
    else
        return val * power(val, --pow);
}

console.log(power('3', '6'));
console.log(power('3', '-6'));

console.log(``);
