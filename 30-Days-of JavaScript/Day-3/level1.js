//1

var firstName = "Ayush";
var lastName = "Gupta";
var country = "India";
var age = 21;
var isMarried = false;
var year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//2

console.log("10" == 10);

//3

console.log(parseInt("9.8") == 10);

//4

//  true statements
console.log(1 < 2);
console.log("ayush".length > "".length);
console.log(typeof true == typeof false);

// fasle statements

console.log(1 > 2);
console.log("ayush".length < "".length);
console.log(typeof true != typeof false);

//5
var a = 4 > 3;
var b = 4 >= 3;
var c = 4 < 3;
var d = 4 <= 3;
var e = 4 == 4;
var f = 4 === 4;
var g = 4 != 4;
var h = 4 !== 4;
var i = 4 != "4";
var j = 4 == "4";
var k = 4 === "4";
var str1 = "Pyhton";
var str2 = "Jargon";
var ans = str1.length != str2.length;
console.log(a, b, c, d, e, f, g, h, i, j, k, ans);

//6

var m = 4 > 3 && 10 < 12;
var n = 4 > 3 && 10 > 12;
var o = 4 > 3 || 10 < 12;
var p = 4 > 3 || 10 > 12;
var q = !(4 > 3);
var r = !(4 < 3);
var s = !false;
var t = !(4 > 3 && 10 < 12);
var u = !(4 > 3 && 10 > 12);
var v = !(4 === "4");
var keyword = "on";
var ans1 = !"Python".includes(keyword);
var ans2 = !"Jargon".includes(keyword);
console.log(m, n, o, p, q, r, s, t, u, v, ans1, ans2);

//7

var fullDate = new Date();
console.log("full date is", fullDate);
var year = fullDate.getFullYear();
console.log("year is", year);
var month = fullDate.getMonth() + 1;
console.log("month is", month);
var date = fullDate.getDate();
console.log("date is", date);
var day = fullDate.getDay();
console.log("day is", day);
var hours = fullDate.getHours();
console.log("hours is", hours);
var minutes = fullDate.getMinutes();
console.log("minutes is", minutes);
var seconds = Date.now();
console.log("seconds is", seconds);
