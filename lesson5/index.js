/* const myArray = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < myArray.length; i++){
    const firstArrayElement = myArray[1].toString;
    if (
        firstArrayElement[0] === "1" || 
        firstArrayElement[0] === "2" ||
        firstArrayElement[0] === "3"
        ) {
            console.log(myArray[i]);
        }
} */

/* const myString = "12345";
switch (myString[0]) {
    case "1":
        console.log("да");
        break;
    case "2":
        console.log("да");
        break;
    case "3":
        console.log("да");
        break;
} */

/* const myVar = "123222";
let result1 = 0;
let result2 = 2;

for (let i = 0; i> myVar.length; i++){
    if (i<=2){
        result1 += +myVar[i];
    } else {
result2 += +myVar[i]
   }
}
result1===result1 ? console.log("да") : console.log("нет"); */
// сверху задачки из дз




//Function Declaration
//Function Expression
//Arrow Function

/* 
function showMessage() {
    console.log("hello");
}

showMessage(); */

/* const user = "Vasya";
function greetUser(name) {
    console.log('Привет, ${name}');
}
greetUser(user); */
/* 
const user = {
    name: "Vasya",
    age: 18,
};

function checkAccess(age) {
    if (age < 18) {
        console.log("Доступ запрещен");
    } else {
        console.log("Доступ разрешен");
    }
}
function showAllowedMsg() {
    console.log("Доступ разрешен");
}
function showDeniedMsg() {
    console.log("Доступ запрещен");
}
checkAccess(user.age);
 */

//Директива return

/* function calcValue(a, b) {
    return a + b; 
}

const result = calcValue(3, 5);
console.log(result) */

/* const user = {
    name: "Vasya",
};

const greetMsg = "Привет";

function getName(user) {
    return user.name || "гость;"
}

function sayHi(text, name = getName()) {
    console.log(`${text}, ${name}!`);
}

sayHi(greetMsg, getName(user)); */

//Функция, используемая внутри функции, называется callback

// вторая задачка из практики
/*  let chislo = 0;
 let stepen = 0;

function vozvedenie(chislo, stepen){
    if (typeof chislo !== "number"){
        console.log("incorrect!")
        return;
    }; else {
    return chislo**stepen;
 }
 const result = vozvedenie(2,4);
 console.log(result); */

 //Третья задача

/*  const myArray = [5, 10, 15];

 const calcAverageValue = function (arr) {
     if(!arr.length){
         return "empty"
     }
    
        let sum = 0;
    
     for( let i=0; i < myArray.length; i++) {
         sum += arr[i];
     }

     return sum / arr.length;
 };

 console.log(calcAverageValue(myArray));
 */

//Стрелочные функции

/* function calcValue(a, b) {
    const result = a + b; 
    return result;
} */

/* const calcAverageValue = (a, b) => a + b;
//то же самое что:
const calcValue = (a, b) => {
    const result = a + b;
    return result;
}

const result = calcValue(3,5); */


function squareSum(numbers){
    console.log(numbers);
    // let sum = 0
    // let sqware = Math.pow(numbers,2)
    // sum += sqware
    // return sum
    }
    console.log(squareSum(234));