// 4. * Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let n = 19;
let x = 'x';
console.log(x);
for (let i = 0; i < n; i++) {
    x = x + 'x';
    console.log(x);
}
