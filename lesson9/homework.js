// 1.Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя),
//  surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
//  Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//  Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//  И метод getFullName() - имя и фамиля работника.

 

// class Worker {
//   constructor(props){
//     this.name: props.name,
//     this.surname,
//     this.rate = props.rate,
//     this.day = props.day
//   };

//   getSalary() {
//     console.log(`Стоимость работ: ${this.day*this.rate}`);

//   getFullName() {
//       console.log(`Полное имя: ${this.name} ${this.surname}`);
// };


// 2.Напишите новый класс Boss, этот класс наследуется от класса Worker из прошлого задания.
//  Появляется новые свойство: workers - количество работников.
//  И зарплата считается по другому: произведение (умножение) ставки rate на количество
//  отработанных дней и на количество работников.

// class Boss extends Worker {
//   constructor(props){
//     super(props),
//     this.workers = props.workers
//   };

//   getSalary() {
//     console.log(`Стоимость работ: ${this.day*this.rate*this.workers}`);
// };


// 3.Модифицируйте класс Worker из предыдущей задачи следующим образом:
//  сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.

// class Worker {
//   #name;
//   #surname;
//   #rate;
//   #day;
//   constructor(props) {
//     this.#name = props.name;
//     this.#surname = props.surname;
//     this.#rate = props.rate;
//     this.#day = props.day;
//   };

//   getSalary() {
//     console.log(`Стоимость работ: ${this.day*this.rate}`);
//   };

//   getFullName() {
//       console.log(`Полное имя: ${this.name} ${this.surname}`);
//   };

//       get name(){
//         return this.#name
//       };

//       get surname(){
//         return this.#surname
//       };

//       get rate(){
//         return this.#rate
//       };

//       get day(){
//         return this.#day
//       };
// };

// let jsWorker = new Worker ({name: "Vasya" , surname: "Sidorov", rate: 123, day: 5});

// console.log(`name = ${jsWorker.name}`);
// console.log(`surname = ${jsWorker.surname}`);
// console.log(`rate = ${jsWorker.rate}`);
// console.log(`day = ${jsWorker.day}`);
// jsWorker.name = "Petya";
// console.log(`name = ${jsWorker.name}`);
// jsWorker.getSalary();


// 4.Модифицируйте класс Worker из предыдущей задачи следующим образом:
// для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// class Worker {
//   #name;
//   #surname;
//   #rate;
//   #day;
//   constructor(props) {
//     this.#name = props.name;
//     this.#surname = props.surname;
//     this.#rate = props.rate;
//     this.#day = props.day;
//   };

//   getSalary() {
//     console.log(`Стоимость работ: ${this.day*this.rate}`);
//   };

//   getFullName() {
//       console.log(`Полное имя: ${this.name} ${this.surname}`);
//   };
//       get name(){
//         return this.#name
//       };

//       get surname(){
//         return this.#surname
//       };

//       get rate(){
//         return this.#rate
//       };

//       get day(){
//         return this.#day
//       };

//       set rate(value){
//        return this.#rate = value;
//       }

//       set day(value){
//        return this.#day = value;
//       }
// };

// let jsWorker = new Worker ({name: "Vasya" , surname: "Sidorov", rate: 123, day: 5});

// console.log(`rate = ${jsWorker.rate}`);
// console.log(`day = ${jsWorker.day}`);
// jsWorker.getSalary();
// jsWorker.rate = 500;
// console.log(`rate = ${jsWorker.rate}`);
// console.log(`day = ${jsWorker.day}`);
// jsWorker.getSalary();
// jsWorker.day = 7;
// console.log(`rate = ${jsWorker.rate}`);
// console.log(`day = ${jsWorker.day}`);
// jsWorker.getSalary();


// 5.Реализуйте класс MyString, который будет иметь следующие методы:
// метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде,
// метод ucFirst(), который параметром принимает строку, а возвращает эту же строку,
// сделав ее первую букву заглавной
// и метод ucWords, который принимает строку и делает заглавной первую букву
// каждого слова этой строки.

// class MyString{
//   constructor(props){
//     this.value = props.value;
//   };

//     reverse(){
//       console.log(this.value.split("").reverse().join(""));
//     };

//     ucFirst(){
//       console.log(this.value[0].toUpperCase() + this.value.slice(1));
//     };

//     ucWords(){
//       const stringArray = this.value.split(" ");
//       const newArr = [];
//       for (let elem in stringArray){
//         newArr.push(stringArray[elem][0].toUpperCase() + stringArray[elem].slice(1));
//       };
//       // for (let i = 0; i < stringArray.length; i++) {         
//       //   newArr.push(stringArray[i][0].toUpperCase() + stringArray[i].slice(1));               
//       // };
//       console.log(newArr.join(" ")); 
//     };
// };

// let myNewString = new MyString ({value: "some string of different words"});

// myNewString.reverse();
// myNewString.ucFirst();
// myNewString.ucWords();


// 6.Реализуйте класс Validator, который будет проверять строки.
// К примеру, у него будет метод isEmail параметром принимает строку
// и проверяет, является ли она корректным емейлом или нет.
// Если является - возвращает true, если не является - то false.
// Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
// метод isDate для проверки даты и метод isPhone для проверки телефона.

//дичь из интернета

// class Validator {
//   constructor() {
//   }

//   isEmail(str) {
//       return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
//   }
//   isDomain(str) {
//       return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1))
//   }
//   isDate(str) {
//       let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
//       return date === null ? false : true;
//   }
//   isPhone(str) {
//       let phone = str.match(/\+38\ \([0-9]{3}\)\ [0-9]{2}-[0-9]{2}-[0-9]{3}/);
//       return phone === null ? false : true;
//   }
// checkIfEmailInString(text) {
//   var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
//   return re.test(text);
// };
// }

// let validator = new Validator();
// console.log(validator.isEmail('test@gmail.com'));
// console.log(validator.isDomain('test.net'));
// console.log(validator.isDate('09.12.2021'));
// console.log(validator.isPhone('+38 (096) 23-14-014'));
// console.log(validator.checkIfEmailInString('test@gmail.com'));



// 7.Реализуйте класс Student (Студент), который будет наследовать от класса User,
// подобно тому, как это сделано в теоретической части урока.
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно

// class User {
//   constructor(props){
//     this.name = props.name;
//     this.surname = props.surname;
//   };

//   getFullName(){
//     console.log(`Student name: ${this.name} ${this.surname}`);
//   };

//   getCourse(){
//     const currentYear = new Date ();
//     console.log(`Current course: ${currentYear.getFullYear() - this.year}`)
//   };
// };

 

// class Student extends User {
//   constructor(props){
//     super(props);
//     this.year = props.year;
//   };
// };

// let myStudent = new Student ({name: "Jackie", surname: "Chan", year: 2019});

// console.log(`name: ${myStudent.name}`);
// console.log(`surname: ${myStudent.surname}`);
// console.log(`year: ${myStudent.year}`);
// myStudent.getFullName();
// myStudent.getCourse();

