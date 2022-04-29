// //DOM
// //Возможности браузера
// console.log(window.navigator);
// console.log(navigator);
// console.log(history);
// history.back; //переключает вкладку назад
// history.forward; //переключает вкладку вперед
// console.log(location)
// console.log(screen)

// //====================

// console.log(document)//открывает структуру HTML-документа
// //Каждый тег представляет собой объект с которым можно взаимодействовать


//Навигация по элементам DOM
// console.log(document.head)//Например обращение к тегу <head>

// const any = document.querySelector("div");//Например найдет первый элемент div в документе
//const block2 = document.querySelector("#block-2");//Находит первый элемент с id="block-2"
//const block2 = document.querySelector(".block-2 .paragraph-2");//находит первый элемент с классом paragraph-2, который вложен в элемент с классом block-2
// const block2 = document.querySelector(".block-2");//находит первый элемент с классом block-2 
// console.log(block2)
// console.log(block2.parentElement)//Находит тег-родитель для указанного
// console.log(block2.previousElementSibling)//Находит предыдущий элемент-тэг на том же уровне вложенности
// console.log(block2.previousSibling)//Находит предыдуущий элемент(скорее всего это перенос строки)
// console.log(block2.nextElementSibling)//Находит следующий элемент-тэг на том же уровне вложенности
// console.log(block2.firstElementChild)//Находит первый дочерний элемент-тэг
// console.log(block2.lastElementChild)//Находит последний дочерний элемент-тэг

//Поиск элементов в DOM

// .querySelector находит первый элемент по наименованию, id, классу, также, например, с учетом вложенности элемента с необходимым классом в элемент с другим классом
// const any = document.querySelector("div");//Например найдет первый элемент div в документе
//const block2 = document.querySelector("#block-2");//Находит первый элемент с id="block-2"
//const block2 = document.querySelector(".block-2 .paragraph-2");//находит первый элемент с классом paragraph-2, который вложен в элемент с классом block-2
// const block2 = document.querySelector(".block-2");//находит первый элемент с классом block-2 
// const any = document.querySelectorAll("div")//Находит все указанные элементы, не только первый. Вернет их в виде Nodelist(это тоже коллекция)
//document.querySelectorAll("div")[1]//Можно также обратиться по ключу элемента в коллекции

//.getElementById Ищет элемент по указанному id
// console.log(document.getElementById("block-1");

//.getElementsBy* ищет все элементы по *TagName, *ClassName, *Name и возвращает их коллекцию
//console.log(document.getElementsByTagName("div"));
//Перебор элементов коллекции только циклом for_of_ чтобы итерироваться только по элементам

// const link = document.querySelector("a");
// const input = document.querySelector("input");

// console.log(link);
// console.log(input);


// innerHTML
// console.log(document.body.innerHTML);// Выведет всё содержимое в виде строки
// console.log(document.body.innerHTML = "")//Например удалит всё из тега body

// innerText
// const block1 = document.querySelector("#block-1");
// console.log(block1.innerHTML);// вернет вложенные теги в виде текста
//console.log(document.body.innerText);//Вернет текстовые значения из всех вложенных тегов вместе с переносами строки

//outerHTML
// const block1 = document.querySelector("#block-1");
// const body = document.querySelector("body");
// console.log(block1.outerHTML);
// block1.outerHTML = "";
// console.log(body.outerHTML);// вернет и самого себя и вложенные теги в виде текста

//Работа со стилями
// const block1 = document.querySelector("#block-1");
// block1.className = "div-block" //задаем класс объекту html, чтобы применить стили из CSS(если так же объявить еще один класс, то он перезапишется)
// block1.style.backgroundColor = "grey";//Задаем стиль непосредственно объекту(инлайн)
// block1.classList.add("block")//добавляет еще один класс элементу, а не перезаписывает.
// block1.classList.remove("block")//удаляет класс
// block1.classList.toggle("block")//удаляет класс, если он есть или добавляет, если его нет
// block1.classList.contains("block")//проверка наличия класса true/false

//Создание элемента
// document.body.style.margin = "0";
// //==========Создали элемент===============
// const header = document.createElement("header");
// //==========присвоили ему класс===============
// header.className = "page-header";
// //==========написали стили(лучше в CSS, здесь для примера)===============
// header.style.background = "yellow";
// header.style.height = "60px";
// header.style.display = "flex";
// header.style.justifyContent = "center";
// header.style.alignItems = "center";
// //==========Создали текст(можно и до стилей)===============
// header.innerHTML = "Это шапка сайта";
// //==========И в конце добавили(заинжектили) элемент на страницу в нужное место===============
// document.body.prepend(header);

//ПРАКТИКА
const header = document.createElement("header");
header.innerHTML = "header Заголовок страницы";
header.style.background = "grey";
header.style.height = "60px";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
document.body.prepend(header);

const section = document.createElement("section");
section.className = "page-section";
section.style.padding = "10px";
header.after(section);

const input = document.createElement("input");
input.className = "todos-input";
input.style.marginRight = "10px";
section.prepend(input);

const button = document.createElement("button");
button.className = "Todos-button";
button.innerText = "кнопка To do";
input.after(button);


const ol = document.createElement("ol");
ol.className = "Todos-list";
button.after(ol);

for(let i = 1; i <= 15; i++) {
    const li = document.createElement("li");
    li.className = "todos-list__item";
    li.innerText = `Пункт № ${i}`;
    ol.append(li);
};
















