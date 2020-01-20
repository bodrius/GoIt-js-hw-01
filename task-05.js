'use strict'

let country;
let message;
let price;
const userChoise = prompt('Введите ваш город доставки:');

if (userChoise === '' || userChoise === null) {
    alert('Ничего не выбрано!');
} else {
    const deliveryCountry = userChoise.toLowerCase();
    switch (deliveryCountry) {
        case 'китай':
            price = 120;
            message = `Доставка в ${deliveryCountry[0].toUpperCase()}${deliveryCountry.substr(1,1000)} будет стоить ${price} кредитов`;
            break;
        case 'чили':
            price = 250;
            message = `Доставка в ${deliveryCountry[0].toUpperCase()}${deliveryCountry.substr(1,1000)} будет стоить ${price} кредитов`;
            break;
        case 'австралия':
            price = 170;
            message = `Доставка в ${deliveryCountry[0].toUpperCase()}${deliveryCountry.substr(1,1000)} будет стоить ${price} кредитов`;
            break;
        case 'индия':
            price = 80;
            message = `Доставка в ${deliveryCountry[0].toUpperCase()}${deliveryCountry.substr(1,1000)} будет стоить ${price} кредитов`;
            break;
        case 'ямайка':
            price = 120;
            message = `Доставка в ${deliveryCountry[0].toUpperCase()}${deliveryCountry.substr(1,1000)} будет стоить ${price} кредитов`;
            break;
        default:
            message = 'В вашей стране доставка не доступна!';
    }

    alert(message);
}