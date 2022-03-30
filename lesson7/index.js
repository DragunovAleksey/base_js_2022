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


let mySecondFunc = function (...args)  {
	
    let filteredArr = args.filter((elem) => elem === parseInt(elem));
    console.table(filteredArr);
}

mySecondFunc(1,2,22,"20",5, 33, 33, 33,-44,37 ,55, true, 43n,98, 55, 76888);