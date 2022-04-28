//1

// var base = prompt("Enter the base of the triangle");
// var height = prompt("Enter the height of the triangle");
// var area = base*height*0.5;
// console.log("The area of the triangle is " + area);

//2

// var side1 = prompt("Enter the length of side 1");
// var side2 = prompt("Enter the length of side 2");
// var side3 = prompt("Enter the length of side 3");

// var perimeter = parseInt(side1) + parseInt(side2) + parseInt(side3);
// console.log("The perimeter of the triangle is " + perimeter);

//3

// var length = parseInt(prompt("Enter the length of the rectangle"));
// var width = parseInt(prompt("Enter the width of the rectangle"));

// var area = length*width;
// var perimeter = parseInt(2*(length+width));

// console.log("The area of rectangle is :"+area);
// console.log("The perimeter of rectangle is :"+perimeter);

//4

// var r = parseInt(prompt("Enter the radius of the circle"));
// const pi = 3.14;
// var area = pi*r*r;
// var circumference = parseInt(2*pi*r);

// console.log("The area of circle is :"+area);
// console.log("The circumfernece of circle is :"+circumference);

//5

// var x = parseInt(prompt("Enter the  value of x"));
// var y = parseInt(prompt("Enter the value of y"));

// var slope1 = 2*x -2 -y
// console.log(slope1);

//6

// let x1 = parseInt(10);
// let x2 = parseInt(6);
// let y1 = parseInt(2);
// let y2 = parseInt(2);

// var slope2 = (y1-y2)/(x1-x2);
// console.log(slope2);

// 7

// slope2 > slope1 ? console.log("Slope is greater") : console.log("Slope is less");

//8

// var x = parseInt(prompt("Enter the value of x"));

// var y = parseInt(x**2 +6*x +9);

// console.log(y);

// if(y==0) console.log("y =0 at x = "+x);

//9

// var hours = parseInt(prompt("Enter the hours"));
// var rateperhour = parseInt(prompt("Enter the rate per hour"));

// var earning = hours*rateperhour;

// console.log("The earning of the employee is :"+earning);

//10

// var str = "Ayush Gupta";
// str.length > 7 ? console.log("Your name is long") : console.log("Your name is short");

//11

// var firstName = "Ayush"
// var lastName = "Gupta"

// firstName.length > lastName.length ? console.log("Your first name, Ayush is longer than your family name, Gupta") : console.log("Your first name, Ayush is shorter than your family name, Gupta");

//12

// let myAge = parseInt(prompt("Enter my age"));
// let yourAge = parseInt(prompt("Enter your age"));

// console.log("I am "+(myAge-yourAge)+" years older than you");

//13

// var birthYear = parseInt(prompt("Enter your birth year"));
// var currentYear = new Date().getFullYear();

// currentYear - birthYear > 18 ? console.log("You are "+(currentYear-birthYear)+" years old . You are old enough to drive") : console.log("You are"+(currentYear-birthYear)+" years old . You will be allowed after"+(18-(currentYear-birthYear))+" years");

//14

// var yearslived = parseInt(prompt("Enter the number of years you have lived"));
// console.log("You have lived for "+yearslived*365*24*60*60+" seconds");


//15

// let d = new Date();
// let min = d.getMinutes();
// let hour = d.getHours();
// let year = d.getFullYear();
// let month = d.getMonth();
// let date = d.getDate();

// console.log(`${year}-${month+1}-${date} ${hour}:${min}`);
// console.log(`${date}-${month+1}-${year} ${hour}:${min}`);
// console.log(`${date}/${month+1}/${year} ${hour}:${min}`);