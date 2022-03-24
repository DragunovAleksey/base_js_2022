/* Напишите стрелочную функцию, которая будет 
возвращать true если строка является палиндромом
и false в противном случае  */

/* let getPalindrom = (stroka = "Введите строку!") => stroka == stroka.split("").reverse().join("") || false;
console.log (getPalindrom("арбуз у зубра")) */
// работает только для полных палиндромов

// 1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

 function getKvadrat (num) {
    if (typeof num === "number"){
    let result = num ** 2
    return result    
    }
    else {
    console.log( num + " - Это не число!")
};
}
console.log(getKvadrat("fff")) 

//Сделайте функцию, которая возвращает сумму двух чисел.

/* function sumOfTwo (a, b) {
    let sum = a + b;
    if(typeof sum === "number"){
        console.log(sum);
    }
    else {
        console.log("Одно из введенных значений не число!")
    }
}
sumOfTwo("sss",3) */

//3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

/*  function getResultOfThree (a, b, c) {
    if(typeof a === "number" && typeof b === "number" && typeof c === "number"){
    let result = (a - b)/c;    
    console.log(result);
    }
    else{
        console.log("Где-то ввели не число!")
    }
    }
    getResultOfThree(10,4,4)  */

