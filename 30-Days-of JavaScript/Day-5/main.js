import {countries} from './countries.js';
import {webTechs} from './webTechs.js.js';

//2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
var arr = text.split(/[,\s]+|[\s]/);
console.log(arr);

//3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.lastIndexOf('Honey'), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';

console.log(shoppingCart);

//4

if(countries.indexOf('Ethiopia')){
    console.log("ETHIOPPIA");
}
else{
    countries.push("Ethiopia"); 
}
if(webTechs.indexOf('Ethiopia')){
    console.log("ETHIOPPIA");
}
else{
    countries.push("Ethiopia"); 
}

//6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack)

