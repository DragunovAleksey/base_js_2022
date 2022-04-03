 /*  
 let myFirstFunc = function (...args)  {
	
    let filterArr = args.filter((elem) => (elem === parseInt(elem)) && (elem > 0) && (elem % 2 === 0));
    console.log(filterArr);
//решение  с интернета
    /* let endArr = filterArr.map(e=>x+=e, x=0).reverse()[0];
    console.log(endArr); 
//решение
    let sum = 0;
    for (let i = 0; i < filterArr.length; i++){
        sum += filterArr[i];
        }
    console.log(sum);
}
myFirstFunc(1,2,22,"20",5 ,-44,37 ,55, 43n,98,76888);  

//Функция принимает массив чисел, убирает повторяющиеся значения и возвращает новый массив из оставшихся значений


 let mySecondFunc = function (testArr) {
    let endArr = [];
    testArr.forEach((element) => {
    if (!endArr.includes(element)) {
        endArr.push(element);        
    }    
    });
    return endArr
}
let testArray = [1,2,3,4,6,6,6,798, 245,6,5,6,7,8];
console.table(mySecondFunc(testArray)); 

// функция принимает два массива, проверяет на идентичность значений и индексов, возвращает true или false.

let myThirdfunc = function (firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
            if ((firstArr.length !== secondArr.length) || (firstArr[i] !== secondArr[i])) {
            return false;
    } else return true;
}
}
let firstArray = [1,2,3,4,5,6];
let secondArray = [1,2,3,4,5];
console.log(myThirdfunc(firstArray, secondArray));
 */