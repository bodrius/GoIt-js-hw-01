"use strict";

let message;
let price;
const country = prompt("Введите ваш город доставки:");

if (country === null) {
  alert("Отменено пользователем!");
} else if (country === "") {
  alert("Вы ничего не ввели!");
} else {
  const deliveryCountry = country.toLowerCase();
  switch (deliveryCountry) {
    case "китай":
      price = 120;
      message = `Доставка в ${deliveryCountry[0].toUpperCase()}${deliveryCountry.substr(
        1
      )} будет стоить ${price} кредитов`;
      break;
    case "чили":
      price = 250;
      message = `Доставка в ${deliveryCountry[0].toUpperCase()}${deliveryCountry.substr(
        1
      )} будет стоить ${price} кредитов`;
      break;
    case "австралия":
      price = 170;
      message = `Доставка в ${deliveryCountry[0].toUpperCase()}${deliveryCountry.substr(
        1
      )} будет стоить ${price} кредитов`;
      break;
    case "индия":
      price = 80;
      message = `Доставка в ${deliveryCountry[0].toUpperCase()}${deliveryCountry.substr(
        1
      )} будет стоить ${price} кредитов`;
      break;
    case "ямайка":
      price = 120;
      message = `Доставка в ${deliveryCountry[0].toUpperCase()}${deliveryCountry.substr(
        1
      )} будет стоить ${price} кредитов`;
      break;
    default:
      message = "В вашей стране доставка не доступна!";
  }

  alert(message);
}
