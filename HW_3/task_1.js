// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function calcPrimeNumbers(endNum = 100, startNum = 0) {
    let primeNum = [];
    if (startNum < 2) {
        startNum = 2;
    }

    nextNum:
    while (startNum < endNum) {
        startNum++;
        for (let i = 2; i < startNum; i++) {
            if (startNum % i == 0) continue nextNum;
        }
        primeNum.push(startNum);
    }
    console.log(primeNum);
}


let endNum = 100;
calcPrimeNumbers(endNum);

calcPrimeNumbers(101);
