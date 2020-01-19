'use strict';

const writePass = prompt('Введите пароль, ASAP!!!');
const ADMIN_PASSWORD = 'jqueryismyjam';


if (writePass == '' || writePass == null){
  alert ('Отменено пользователем :(');
}

else if 
(ADMIN_PASSWORD == 'jqueryismyjam') {
    alert ('Добро пожаловать!!!');
}

else if (ADMIN_PASSWORD == '' || ADMIN_PASSWORD == null) {
    alert ('Доступ запрещен, неверный пароль!');
}





// const clicCancel = null;
// message = 'Отменено пользователем';

// if(clicCancel = true){
//     message = 'Отменено пользователем';
// }


// if(ADMIN_PASSWORD){
//     message = ('Добро пожаловать!');
//  }

