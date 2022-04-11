// // const user = {
// //     name: "Vasya",
// //     age: 20,
// // }

// // console.log(user)

// //  const str = new String("строка");

// //  console.log(str);

//  const user = new Object({
//     name: "Vasya",
//     age: 20,
// });

// const admin = {
//     __proto__: user,
// };

// const user2 = {
//     name: "Petya",
//     age: 30,
// }

// //Создание прототипа
// // 1 вариант
// //admin.__proto__= user;
// // 2 вариант
// //Object.setPrototypeOf({}, user);
// // 3 вариант
// //const admin = Object.create(user);

// //Расширение прототипа
// Object.prototype.sayHi = function () {
//     console.log(`Привет, ${this.name}!`);
// };

// user.sayHi();
// user2.sayHi();

// const animal = {
//     jumps: "Прыжок!",
// };

// const rabbit = {
//     __proto__: animal,
//     jumps: "Заяй прыгнул!",
// }

// console.log (rabbit.jumps);
// delete rabbit.jumps;
// console.log(rabbit.jumps);

//Еще пример

// Object.prototype.sayHI = function() {
// console.log(`Hello, I am robot ${this.model}`)
// };




// const robot = {
//     model: "R2D2",
//     created: 2150,
//     move: function () {
//         console.log(`${this.model} just moved!`);
//     },
// };


// const terminator = {
//     model: "T-800",
//     sayHi: function() {
//         console.log("I will be back");
//     },
// };

// Object.setPrototypeOf(terminator, robot);

// console.log(robot);
// console.log(terminator);

// robot.sayHI();
// terminator.move();

//ФУНКЦИИ-КОНСТРУКТОРЫ







