//Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'

let str = 'ahb acb aeb aeeb adcb axeb';
let myPattern=/a.b/g;
let result = str.match(myPattern);
console.log(result);

//Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
 
let myStr ='2+3 223 2223';
let pattern = /[2]\+[3]/g;
let res = myStr.match(pattern);
console.log(res);

//Получить день, месяц и год текущей даты и по отдельности вывести в консоль

var now = new Date();
let day = now.getDate();
let month = now.getMonth()+1;
let year = now.getFullYear();
console.log(day);
console.log(month);
console.log(year);
