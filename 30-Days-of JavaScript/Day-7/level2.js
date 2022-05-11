
//2

let solveQuadratic = function(a,b,c){
    let disc = Math.pow(b,2) -4*a*c;

    let posX = (-b+Math.pow(disc, 0.5))/(2*a);
    let negX = (-b-Math.pow(disc, 0.5))/(2*a);

    return [posX,negX];
}

console.log(solveQuadratic(10,2,3));


//3

let printArray = function(arr){
    for(const value of arr){
        console.log(value);
    }
}

printArray([1,2,3]);

//4

let showDateTime = () =>{
    let d = new Date();

    let date = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    let hour = d.getHours();
    let min = d.getMinutes();

    date = date <10 ? '0' + date.toString() : date;
    month = month <10 ? '0' + month.toString() : month;
    hour = hour <10 ? '0' + hour.toString() : hour;
    min = min < 10 ? '0' + min.toString() : min;

    let format = `${date}/${month}/${year} ${hour}:${min}`;

    return format ;
}

console.log(showDateTime());


//5

function swap (a,b){
    return [b,a];
}

console.log(swap(3,5))

//6

let reveseArray = (arr) =>{
    let reversed = []
    for(let i=arr.length-1 ;i>=0;i--){
        reversed.push(arr[i]);
    }

    return reversed;
}

console.log(reveseArray([4,5,6,10,5,8,9]));

//7

let capitalize = (arr) =>{
    let caps = [];
    for(const item of arr){
        caps.push(item.toUpperCase());
    }

    return caps;
}

console.log(capitalize(["a","v","d","f","g"]));


//8

let addItem = (arr,item) =>{
    arr.push(item);
    return arr;
}

console.log(addItem([4,5,8,6,8],9));


//9

let removeItem = (arr, index) => {
    arr.splice(index, 1);
    return arr;
}

console.log(removeItem([4,5,8,6,8],3));

//10

function addUpto(num) {
    if(num == 0) return 0;
    else return num + addUpto(num-1);
}

console.log(addUpto(5));

//11

function addOddsUpto(num) {
    if(num <= 0) return 0;
    num = num%2== 0? num -1: num;
    return num + addOddsUpto(num - 2);
}

console.log(addOddsUpto(5));


//12


function addEvenUpto(num) {
    if(num <= 0) return 0;
    num = num%2== 0? num: num-1;
    return num + addEvenUpto(num - 2);
}

console.log(addEvenUpto(5));

//13


//14

let sumOfNums = (...args) => {
    let sum = 0;
    for(const x of args) {
      sum += x;
    }
    return sum;
}

console.log(sumOfNums(1,2,3,4,5,6,7,8));


//15

function generateIP () {
    let a = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    let c = parseInt(Math.random() * 255);
    let d = parseInt(Math.random() * 255);
    
    
    return `${a}.${b}.${c}.${d}`;
}

console.log(generateIP());

//16


function macAddGenerator () {
    let arr = [];
    let alphanums = '0123456789ABCDEF';
    
    for(let i = 1; i <= 6; i++) {
      let id1 = Math.ceil(Math.random() * 15);
      let id2 = Math.ceil(Math.random() * 15);
      
      arr.push(alphanums[id1] + alphanums[id2]);
    }
    
    return arr.join(':');
}

console.log(macAddGenerator());



function randomHexaNumberGenerator() {
    let literal = '0123456789ABCDEF';
    
    let hex = [];
    let len = Math.floor(Math.random() * 11);
    for(let i=0; i < len; i++) {
      let index= Math.ceil(Math.random() * literal.length) -1;
      hex.push(literal[index]);
}
    
    return '#' + hex.join('');
}

console.log(randomHexaNumberGenerator());

// 18
  function randomUserIdGenerator() {
    let literal = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
    let id = [];
    for(let x=0; x<7; x++) {
      let index = Math.ceil(Math.random() * literal.length)-1;
       id.push(literal[index])
    }
     return id.join('');
}
    
console.log(randomUserIdGenerator());

