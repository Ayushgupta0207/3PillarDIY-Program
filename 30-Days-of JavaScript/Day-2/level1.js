//1
var challenge = "30 Days of JavaScript";

//2
console.log(challenge);

//3
console.log("length of the string is :" + challenge.length);

//4

console.log("string in uppercase is :" + challenge.toUpperCase());

//5
console.log("string in lowercase is :" + challenge.toLowerCase());

//6
console.log("the first word of the string is :" + challenge.substring(0, 2));

//7
console.log(
  "the remaining phrase of the string is :" +
    challenge.substring(2, challenge.length)
);

//8
console.log(challenge.includes("Script"));

//9
console.log(challenge.split(" "));

//10
let arr = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ");
console.log(arr);

//11

let newStr = challenge.replace("JavaScript", "Python");
console.log(newStr);

//12

console.log(challenge.charAt(15));

//13
console.log(challenge.charCodeAt(11));

//14
console.log(challenge.indexOf("a", 1));

//15
console.log(challenge.lastIndexOf("a"));

//16

let str =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str.indexOf("because", 1));

//17
let str1 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str1.lastIndexOf("because"));

//18

let str2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str2.search("because"));

//19

let str3 = "  30 Days of JavaScript  ";
console.log(str3.trim());

//20

let str4 = "30 Days of JavaScript";
console.log(str4.startsWith("30"));


//21

let str5 = "30 Days of JavaScript";
console.log(str5.endsWith("t"));

//22

let pattern = /a/gi;
let listOf_A = challenge.match(pattern);
console.log(listOf_A);

//23

let st6 = "30 Days of".concat(" JavaScript");
console.log(st6);

//24
console.log(challenge.repeat(2));