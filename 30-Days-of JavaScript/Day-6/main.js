import {countries} from "./countries.js";
import {webTechs} from "./webTechs.js";

// console.log(countries);
// console.log(webTechs);


//1

// let alphanums = '123456789abcdefghijklmnopqrstuvwxyz123456789';
// let n = parseInt(Math.random() * alphanums.length) % 16; // max can be 16
// let rands = [];
// for(let i = 0; i <= n; i++) {
//    rands.push(alphanums[Math.floor(Math.random() * alphanums.length) -1]);   
// } console.log(rands.join(""));

//2

// let allHexCodes = '123456789abcdef';
// let hexChars = [];
// for(let i=0; i<6; i++) {
//    hexChars.push(allHexCodes[parseInt(Math.random()*allHexCodes.length)-1]);
// } console.log('#' + hexChars.join(''));

//3

let rgb = [];
for(const char of '123') {
   var red = (parseInt(Math.random() * 255));
   var grn = (parseInt(Math.random() * 255));
   var blu = (parseInt(Math.random() * 255));
   
   rgb.push(red, grn, blu);
} console.log(`rgb(${red}, ${grn}, ${blu})`);



//4

let capsCountries = [];

for(const country of countries) {
   capsCountries.push(country.toUpperCase());
}
console.log(capsCountries);

//5

let lenCountries = [];
for(const country of countries) {
   lenCountries.push(country.length);
}
console.log(lenCountries);

//6
let countryData = [];

for(const country of countries){
    let len = country.length;
    let first3Char = country.slice(0,3).toUpperCase();
    countryData.push([country,first3Char,len]);
}

for(const value of countryData){
    console.log(value);
}

//7


let noCountry = true;
let landCountries = [];

for(const i in countries){
   if(countries[i].includes('land')){
      landCountries.push(countries[i]);
      noCountry = false;
   }
}

if(noCountry){
   console.log('All these countries are without land');
}

else{
   for(const country of landCountries){
      console.log(country);
   }
}

//8


let endsWith_ia = [];
for (const country of countries) {
   if(country.endsWith('ia'))
      endsWith_ia.push(country);
}
console.log(endsWith_ia);

//9


let maxLength = 0;
let maxLenCountry;
for (const country of countries) {
   if(country.length > maxLength) {
      maxLength = country.length;
      maxLenCountry = country;
   }
} console.log(maxLenCountry);


//10

let lenFiveCountries = [];

for(const country of countries) {
   if(country.length === 5)
      lenFiveCountries.push(country);
}

console.log(lenFiveCountries);


//11

let length = webTechs[0].length;
let word;
for(const tech of webTechs) {
   if (tech.length > length) {
      word = tech;    
      length = tech.length;
   }
} console.log(word);

//12

let techWords = [];

for(const tech of webTechs){
   let len = tech.length;
   let caps = tech.toUpperCase();
   techWords.push([caps,len]);
}

for(const tech of techWords){
   console.log(tech);
}


//13

let mernArray = ["MongoDB", "Express", "React", "Node"];
let mernTechs = [];

for(const array of mernArray){
   mernTechs.push(array[0]);
}
console.log(mernTechs.join(""));

//14

for(const techy of webTechs){
   console.log(techy);
}


//15


let fruits =  ['banana', 'orange', 'mango', 'lemon'];

let reverseFruitsArray = [];

for(let i= fruits.length-1 ;i>=0;i--) {
   reverseFruitsArray.push(fruits[i]);
}
console.log(reverseFruitsArray);


//16
for(const techy of webTechs){
   console.log(techy);
}