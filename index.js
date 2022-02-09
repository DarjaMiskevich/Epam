//В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием нужно объявить’. 

try {
  console.log(a);
  let a = 3;
}
catch (err){
console.log ("let перед использованием нужно объявить");
}

//При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'

const a = 1;
const b = 0;
try {
  if (a / b === Infinity ) {
    throw new Error;
  }; 
}
catch (err){
console.log ("на ноль делить нельзя");
}