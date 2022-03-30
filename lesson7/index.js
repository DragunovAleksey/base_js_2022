/*  
 let myFirstFunc = function (...args)  {
	
    let filterArr = args.filter((elem) => (elem === parseInt(elem)) && (elem > 0) && (elem % 2 === 0));
    console.log(filterArr);

    /* let endArr = filterArr.map(e=>x+=e, x=0).reverse()[0];
    console.log(endArr); */

    /*let sum = 0;
    for (let i = 0; i < filterArr.length; i++){
        sum += filterArr[i];
        }
    console.log(sum);

}
 
myFirstFunc(1,2,22,"20",5 ,-44,37 ,55, 43n,98,76888);  */

//Функция принимаеи массив чисел, убирает повторяющиеся значения и возвращает новый массив из оставшихся значений

/* let testArr = [1,2,3,4,6,6,6,6,5,6,7,8]
let mySecondFunc = function (...array) {
    let endArr = array.filter((element, index) => {
    return array.indexOf(element) === index;
    })
    console.log(endArr);
}

mySecondFunc(testArr); */
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = chars.filter((element, index) => {
    return chars.indexOf(element) === index;
});
console.log(uniqueChars);
https://techrocks.ru/2021/09/12/how-to-remove-duplicates-in-an-array-in-js/