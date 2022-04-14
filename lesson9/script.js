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
// terminator.sayHi();

//ФУНКЦИИ-КОНСТРУКТОРЫ

// function CreateUser (name, age) {
//     this.name = name;
//     this.age = age;
// }

// CreateUser.prototype.showName = function () {
//     console.log(this.name);
// };
// CreateUser.prototype.showAge = function () {
//     console.log(this.age);
// };


// const userVasya = new CreateUser("Vasya", 20);
// const userPetya = new CreateUser("Petya", 25);



// console.log(userVasya);
// console.log(userPetya);
// userVasya.showName();
// userPetya.showName();

//Практика=====================================

// function CreatePostcard(from, to) {
//     this.from = from;
//     this.to = to;
// };
// CreatePostcard.prototype.showLetter = function () {
//     console.log("Письмо пользователя " + this.from + " пользователю " + this.to);
// };
// const userPostcard = new CreatePostcard("Vasya", "Petya");
// const userPostcard2 = new CreatePostcard("Lena", "Nina");

// console.log(userPostcard);
// userPostcard.showLetter(); 
// console.log(CreatePostcard);
// console.log(userPostcard2);

//КЛАССЫ   

// class Animal {
//     constructor(props) {
//         this.name = props.name;
//         this.age = props.age;
//         this.hasTail = props.hasTail;
//     }

//     voice() {
//         console.log("I am animal");
//     }
// }

// const myAnimal = new Animal({ name: "Animal",
// age: 5, hasTail: true}); // myAnimal - инстанс класса Animal

// // console.log(myAnimal);
// // myAnimal.voice();

// class Cat extends Animal {        // то есть класс Cat расширяет класс Animal
//     constructor(props) {
//         super(props);            // добавляет props из родительского класса
//         this.color = props.color;
//     }
// }

// const myCat = new Cat({
//     name: "Cat",
//     age: 8,
//     hasTail: true,
//     color: "blue"});

// console.log(myCat);

// class BritainCat extends Cat {        // то есть класс Cat расширяет класс Animal
//     constructor(props) {
//         super(props);            // добавляет props из родительского класса
//         this.breed = "britain";
//     }
// }

// const myBritainCat = new BritainCat({
//     name: "Britain Cat",
//     age: 10,
//     hasTail: false,
//     color: "grey"});

// console.log(myBritainCat);

//Практика

// class People {
//     constructor(props) {
//         this.name = props.name;
//         this.surname = props.surname;
//     }
//     getFullName() {
//         console.log(`Полное имя: ${this.name} ${this.surname}`);
//     };
// };

// class Worker extends People {
//     constructor(props) {
//         super(props);
//         this.rate = props.rate;
//         this.day = props.day;
//     };
//     getSalary() {
//         console.log(`Стоимость работ: ${this.day*this.rate}`)
//     };
// };

// const jsCoder = new Worker({
//     name: "Vasya",
//     surname: "Sidorov",
//     rate: 127,
//     day: 5
// });

// console.log(jsCoder);
// jsCoder.getSalary();
// jsCoder.getFullName();

//Пример работы с DOM-деревом
console.log(document);
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = "none"
    }

    show() {
        this.$el.style.display = "block"
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + "px";
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: "#box1",
    size: 100,
    color: "red",
});

const box2 = new Box({
    selector: "#box2",
    size: 80,
    color: "blue",
})


class Circle extends Box {
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = "50%";
    }
}

const myCircle = new Circle({
    selector: "#circle",
    size: 70,
    color: "green"
})




box1.hide();
box1.show();

















