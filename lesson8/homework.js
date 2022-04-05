"use strict"
// Реализовать таймер-функцию используя замыкания. Функция принимает два аргумента начальное значение и значение завершения.
// Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.
//  const timerFunc = (start, end) => {
//     --start;
//     if (start > end) {
//         alert(start);
//         setTimeout(() => timerFunc(start, end), 2000);
//     } else {
//         alert(`работа таймера завершена на ${start} сек`);
//     };
// }
// timerFunc(60, 50)
//==========================================================

//Что выведет функция? null в строгом режиме. Без него Object Window
// "use strict"
// function f() {
// alert( this );
// }
// let user = {
// g: f.bind(null)
// };
// user.g(); 
//==========================================================

 // Можем ли мы изменить this дополнительным связыванием? НЕТ
// function f() {
//  alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();
//==========================================================

//В свойство функции записано значение. 
//Изменится ли оно после применения bind? Undefined.Результатом работы bind является другой объект. У него уже нет свойства test

// function sayHi() {
// alert( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
// name: "Вася"
// });

// console.log( bound.test );
//===========================================================

// Вызов askPassword() в приведённом ниже коде должен проверить пароль
// и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'Вася',
// loginOk() {
// alert(`${this.name} logged in`);
// },
// loginFail() {
// alert(`${this.name} failed to log in`);
// },
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
//====================================================================

// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail
// у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже,
// чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }

// let user = {
// name: 'John',
// login(result) {
// alert( this.name + (result ? ' logged in' : ' failed to log in') );
// }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false));
//==========================================================================

// Напишите в указанном месте конструкцию с методом bind() так, 
// чтобы this внутри функции func всегда указывал на value.
//  Eсть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem.

var elem = {value: ‘Привет’}
function func(surname, name) {
alert(this.value + ', ' + surname + ' ' + name);
}
let func = func.bind(elem)
//===========================================================================

//Тут напишите конструкцию с bind()

// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

//===========================================================================

//Есть функция которая складывает три числа.Выполните каррирование.

//const sum = (a, b, c) => a + b + c

 