'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const userChoise = prompt('Сколько вы хотите купить друидов?');
const quatityDroid = Number(userChoise);
const totalAmount = userChoise * pricePerDroid;
const summCredit = credits - totalAmount;
let message;

if (userChoise === '' || userChoise === null) {
    message = 'Отменено пользователем!';
} else if (totalAmount > credits) {
    message = 'Недостаточно средств на счету!';
} else {
    message = `Вы купили ${userChoise} дроидов, на счету осталось ${summCredit} кредитов.`
}
alert(message);