//1

// let age = parseInt(prompt("Enter your age"));
// if(age>17){
//     console.log("You are old enough to drive");
// }
// else{
//     console.log(`You are left with ${18-age} years to drive`);
// }

//2

// let myAge = 21;
// let yourAge = parseInt(prompt("Enter your age"));

// if(yourAge>myAge){
//     console.log(`You are ${yourAge-myAge} years older than me`);
// }
// else{
//     console.log(`I am ${myAge-yourAge} years older than you`);
// }


//3

let a = 4;
let b =3;

if(a>b){
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${b} is greater than ${a}`);
}

a>b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);

//4

let num1 = parseInt(prompt("Enter first number"));
if(num1%2==0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}
