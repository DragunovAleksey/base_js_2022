// console.log(navigator.userAgent);
// console.log(navigator.platform);

// alert, confirm, prompt, setTimeout - все относится к BOM

// console.log(history); // история веб-страниц, методы back/forward

// console.log(location);

// console.log(screen);

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

// const response = xhr.send();

// xhr.onload = () => {
//   console.log(JSON.parse(xhr.response));
// };

//DOM

// const sectionElement = document.querySelector("section");
// const prevSiblingToSection = sectionElement.firstElementChild;

// console.log(prevSiblingToSection);

// const allLiElements = document.querySelectorAll("li");
// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//   constructor(props) {
//     this.name = props.name;
//     this.surname = props.surname;
//     this.rate = props.rate;
//     this.days = props.days;
//   }

//   getSalary() {
//     return this.rate * this.days;
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// const newWorker = new Worker({
//   name: "Ivan",
//   surname: "Sidorov",
//   rate: 3000,
//   days: 10,
// });

// console.log(newWorker.getSalary());

// 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// class Boss extends Worker {
//   constructor(props) {
//     super(props);
//     this.workers = props.workers;
//   }

//   getSalar() {
//     return this.rate * this.days * this.workers;
//   }
// }

// const newBoss = new Boss({
//   name: "Igor",
//   surname: "Ivanov",
//   rate: 5000,
//   days: 3,
//   workers: 15,
// });

// console.log(newBoss.getSalary());

// 3.Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

// class Worker {
//   #name;
//   #surname;
//   #rate;
//   #days;

//   constructor(props) {
//     this.#name = props.name;
//     this.#surname = props.surname;
//     this.#rate = props.rate;
//     this.#days = props.days;
//   }

//   get getName() {
//     return this.#name;
//   }

//   get getSurname() {
//     return this.#surname;
//   }

//   get getRate() {
//     return this.#rate;
//   }

//   set setRate(newRate) {
//     this.#rate = newRate;
//   }

//   get getDays() {
//     return this.#days;
//   }

//   set setDays(newDays) {
//     this.#days = newDays;
//   }

//   getSalary() {
//     return this.#rate * this.#days;
//   }

//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// const newWorker = new Worker({
//   name: "Ivan",
//   surname: "Sidorov",
//   rate: 3000,
//   days: 10,
// });

// console.log(newWorker);

// 5. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

// class MyString {
//   constructor(str) {
//     this.str = str;
//   }
//   reverse() {
//     return this.str.split("").reverse().join("");
//   }
//   ucFirst() {
//     return this.str.charAt(0).toUpperCase() + this.str.slice(1);
//   }

//   ucWords() {
//     return this.str
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   }
// }

// const newString = new MyString("привет, петя");

// console.log(newString.ucWords());

// 6. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

// class Validator {
//   DBEmail = "user@mail.ru";
//   DBDomain = "vk.com";
//   DBDate = "01.01.2000";
//   DBPhone = "79993334455";

//   isEmail(email) {
//     return email === this.DBEmail ? true : false;
//   }
//   isDomain(domain) {
//     return domain === this.DBDomain ? true : false;
//   }
//   isData(date) {
//     return date === this.DBDate ? true : false;
//   }
//   isPhone(phone) {
//     return phone === this.DBPhone ? true : false;
//   }
// }

// const validator = new Validator();

// console.log(validator.isEmail("user@mail.ru"));

// 7. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

// class User {
//   constructor(props) {
//     this.name = props.name;
//     this.surname = props.surname;
//   }

//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// class Student extends User {
//   constructor(props) {
//     super(props);
//     this.year = props.year;
//   }

//   getCourse() {
//     const date = new Date();
//     const currentYear = date.getFullYear();
//     const yearDifference = currentYear - this.year;

//     if (yearDifference >= 1 && yearDifference <= 5) {
//       return yearDifference;
//     }
//     return "Проверьте год поступления";
//   }
// }

// const newStudent = new Student({
//   name: "Вася",
//   surname: "Иванов",
//   year: 2020,
// });

// console.log(newStudent.getCourse());

// DOM

// Навигация по элементам

// const block2 = document.querySelector(".block-2"); // находит первый элемент с классом block-2
// const block2 = document.querySelector("div"); // находит первый div
// const block2 = document.querySelector("#block-2"); находит первый элемент с id=block-2
// const block2 = document.querySelector(".block-2 .paragraph-2");
// console.log(block2.parentElement); // узел-родитель у block2
// console.log(block2.previousElementSibling); // предыдущий элемент на том же уровне
// console.log(block2.nextElementSibling); // следующий элемент на том же уровне
// console.log(block2.firstElementChild); // первый дочерний элемент
// console.log(block2.lastElementChild); // первый дочерний элемент

// Поиск элементов в DOM

// const block2 = document.querySelector(".block-2"); // находит первый элемент с классом block-2
// const block2 = document.querySelector("div"); // находит первый div
// const block2 = document.querySelector("#block-2"); находит первый элемент с id=block-2
// const block2 = document.querySelector(".block-2 .paragraph-2");

// console.log(document.getElementById("block-1"));

// console.log(document.getElementsByTagName("div"));

// console.log(document.querySelectorAll("div"));

// const link = document.querySelector("a");
// const input = document.querySelector("input");

// console.log(input);

// console.log((document.body.innerHTML += "123"));
// console.log(document.body);

// console.log(document.body.innerText);

// const block1 = document.querySelector("#block-1");
// block1.innerHTML = "";

// Работа со стилями
// const block1 = document.querySelector("#block-1");
// block1.className = "div-block";
// block1.classList.add("block");
// block1.classList.remove("block");
// block1.style.backgroundColor = "grey";
// block1.style.width = "100px";

// Создание элемента
// document.body.style.margin = "0";

// const header = document.createElement("header");
// header.className = "page-header";
// header.style.background = "yellow";
// header.style.height = "60px";
// header.style.display = "flex";
// header.style.justifyContent = "center";
// header.style.alignItems = "center";
// header.innerHTML = "Это шапка сайта";
// document.body.prepend(header);


//Практика

//Header
const header = document.createElement("header");
header.innerHTML = "Это заголовок страницы";
document.body.prepend(header);

//Section

const section = document.createElement("section")
section.className = "page-section";
header.after(section);

//Input

const input = document.createElement("input");
section.prepend("input");

//Button
const button = document.createElement("button");
button.className = "todos-button";
button.innerText = "Add Todo";
input.after(button);

//Todos list

const newUl = document.createElement("ul");
newUl.className = "todos-list";
button.after(newUl);

//Todos items

for (let i = 1; i <= 5 ; i++) {
    const newLi = document.createElement("li");
    newLi.className = "todos-list_item";
    newLi.innerText = `Пункт ${i}`;
    newUl.append(newLi);
}