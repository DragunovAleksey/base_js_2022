
// // Примитивные типы данных

// // number
// //console.log(1/0);
// //console.log(typeof NaN)
// console.log(1)// NaN = Not a Number (не число), но тип NaN = число

// // Оператор typeof показывает тип данных, указанных после typeof

// // String Строки

// const myString = "строка";
// const anotherString = "текст: \'текст\'"
// const templateString = `шаблонная строка ${anotherString}`; //обратные кавычки


// console.log(templateString)

// //Boolean

// const isAdmin = true
// const isUser = false


// // Null
// const emptyVariable = null

// // undefined
// // const userName
// // console.log(userName)

// // Непримитивные

// const someName = "Petya"

// const user = {
//     Name: "Vasya",
//     lastName: "Ivanov",
//     age: 23,
//     citizenship: "Russia",
// };

// const abrakatabra = user.Name

// // console.log(abrakatabra)


// //оператор typeof

// // typeof null - всегда объект! это ошибка JS


// console.log(typeof someName)

// Преобразование типов данных
// Строковое преобразование

// const myVar = true;

// const myVarToString = String(myVar);

// console.log(myVarToString)

// Численное преобразование

// const myVar = "kfkfk123"

// const myVarToNumber = +myVar; //Плюс преобразовывает в число

// console.log(typeof myVarToNumber)

//Логическое преобразование

// const myVar = 1;
// console.log(!!myVar) // воскл.знак преобразовывает в булевую с частицей "не"

// Математические операторы
// Бинарный плюс

// const myNumber = 1;
// const newNumber = 2;
// const myString = "строка";

// console.log(myNumber + myString)//Конкатенация. Если хотя бы один из складываемых является строкой, то и остальные будут считаться строкой.


// Сравнение строк

// const string1 = "сТрока";
// const string2 = "солнце";

// console.log(string1 > string2);

// unicode

const userTypes = {
    admin: "admin",
    user: "user",
    teacher: "teacher",
    contentManager: "contentManager",
}

const serverDataUserType = "user";

if (serverDataUserType === userTypes.admin) {
    console.log("показать ограниченный контент");
} else {
    console.log("показать весь контент")
}

const myNumber = 1;
const myString = "1";

console.log(myNumber == myString)




































