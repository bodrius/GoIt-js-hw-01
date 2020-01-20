'use strict';

const writePass = prompt('Введите пароль, ASAP!!!');
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

if (writePass === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else if (writePass === null) {
    message = 'Отменено пользователем !';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);