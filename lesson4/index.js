/* const myVar1 = 5;
const myVar2=10


if (myVar1 > myVar2) {
    console.log(`${myVar1}` больше `${myVar2}`);
else if (myVar1 < myVar2) {
console.log(`${myVar1}` меньше `${myVar2}`)
} else {
    console.log("end");
}


const userRole = 'admin';

switch (userRole) {
    case "student":
      console.log("Текущий пользователь - student")
      break;
    case "admin":
      console.log("Текущий пользователь - admin")
      break;
    case "normal_User":
        console.log("Текущий пользователь - normal_User")
        break;
    default:
        console.log("нет такого типа пользователя")
}
 */
/* 
//Логические операторы
console.log(1 || 0);
/* console.log(1 && 0) */
/* const intervalOne = 5;
const intervalTwo = 8;
const intervalThree = 18; */

/* if (intervalOne>intervalTwo) {
    else if (intervalTwo>intervalThree){
        console.log("Second")
        else
    }
    console.log("first")
        else
        if(intervalTwo>intervalThree){
            console.log("second")
            else{
                console.log("third")
            }
        }
    }
} */ 





/*  console.log("результат 1 = ", null || 0 || "" || undefined); //undefined
console.log("результат 2 = ", "яблоко" &&  true  &&  null  &&  1 );//null, т.к. первый false
console.log("результат 3 = ", 0 || true && "false" || null);//сначала сравнит true и "false", 
                                                            //получит "false" т.к. нет ложного значения
                                                            //а "false" это строка, т.е true, но
                                                            //в данном случае последняя
                                                            //дальше по логическому "или" ищет
                                                            //первое true. 0 становится false, а наше
                                                            //строчное "false" является true, 
                                                            //до null скрипт не доходит.
                                                            // ответ: "false"
console.log("результат 4 = ", 0 && true || "false" && null);//1. 0/true=0
                                                            //2."false"/null=null
                                                            //3. 0||null=null
console.log("результат 5 = ", !0 && !!1);// не ноль и не не единица(из-за приоритета "!") =
                                         // = 1 и 1 = 1 т.к. последнее значение. TRUE!!!!!!!!!!
                                         //  то есть после перевода в логический тип обратно он не меняется???
console.log("результат 6 = ", !(null || !"апельсин" && true)); //1. сначала обратное значение после ! внутри скобок
                                                               //2. затем false(апельсин) и true = false(по апельсину)
                                                               //3. null или false(по апельсину) = false(по апельсину), т.к. ни одного true
                                                               //раскрываем скобки => не false(по апельсину) = true */