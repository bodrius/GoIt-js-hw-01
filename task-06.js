'use strict'

let input;
let total = 0;

while (true) {
    input = prompt('Введите число:');

    if (input === null) {
        break;
    } else if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз')
        continue;
    }
    input = Number(input);
    total += input;
}
alert(`Общая сумма чисел равна ${total}`);