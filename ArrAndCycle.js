//Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма

let arrFilm = ['Зеленая миля', 'Форест Гамп', 'Крестный отец','Список Шиндлера','1+1','Матрица','Брат','Леон','Шрек','Гладиатор'];

arrFilm.forEach(function(item) {
  console.log( item);
});

//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let arrCar = ['BMV', 'Mersedes', 'Audi', 'Tesla', 'Tayota'];
arrCar.join(',').split(',');

//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let arrName = ['Иван','Петр','Анна','Елена','Тузик','Мурзик'];
let inviteName = arrName.map(function(item){return item=`${item} hello`} );
 
//Преобразовать числовой массив в Boolean

let num = [1,4,0,5,-4,0.1];
let numToBool = num.map(function(item){return item = Boolean(item)});

//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию

let arr = [1,6,7,8,3,4,5,6];
let arrSorted = arr.sort(function(a, b) {return (a - b);}).reverse();
console.log(arrSorted)
 
//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

let arr = [1,6,7,8,3,4,5,6];

let filterArr = arr.filter(function(number){
    return number>3;
});

//Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу

let myArr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z'];
function showIndexOfArr(num,myArr){
    return myArr[num];
}

//Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

let a=20;
for(a;a>=10;a--){
    console.log(a);
}

//Реализовать цикл, который выводит в консоль нечетные числа

let d=1;
for(d; d<=100; d++){
    if(d%2!==0){
    console.log(d);}
}



 
    