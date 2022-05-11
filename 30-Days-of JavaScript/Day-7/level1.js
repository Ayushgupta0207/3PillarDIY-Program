//1

function fullName(){
    let firstName = "Ayush";
    let lastName = "Gupta";
    console.log(firstName + " " + lastName);
}

fullName();

//2

function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}

fullName("Ayush", "Gupta");

//3

function add(num1, num2){
    console.log(num1 + num2);
}

add(10, 20);

//4

function areaOfRectangle(length, width){
    console.log(length * width);
}

areaOfRectangle(5,10);

//5


function perimeterOfRectangle(length, width){
    console.log(2*length * width);
}

perimeterOfRectangle(5,10);

//6

function volumeOfRectangle(length, width, height){
    console.log(length * width * height);
}

volumeOfRectangle(5,10,20);

//7

function areaOfCircle(radius){
    console.log(Math.PI * radius * radius);
}

areaOfCircle(7);

//8

function perimeterOfCircle(radius){
    console.log(2 * Math.PI * radius);
}

perimeterOfCircle(7);

//9

function density(mass, volume){
    console.log(mass / volume);
}

density(10, 20);

//10

function speed(distance, time){
    console.log(distance / time);
}

speed(20,15);

//11

function weight(mass){
    console.log(Math.PI ** 2 * mass);
}

weight(10);

//12

function celciusToFahernheit(c){
    console.log(c*(9/5) + 32);
}

celciusToFahernheit(37);

//13

function calculateBMI(weight, height){
    return (weight / (height * height));
}

let BMi = calculateBMI(60, 1.7);
if(BMi < 18.5){
    console.log("Underweight");
}
else if(BMi >= 18.5 && BMi < 24.9){
    console.log("Normal weight");
}

else if(BMi >= 25 && BMi < 29.9){
    console.log("Overweight");
}

else{
    console.log("Obese");
}

//14


function checkSeason(month) {
    let season;
    
    switch (month.toLowerCase()) {
       case "september":
       case "october":
       case "november":
          season = "Autumn";
          break;
    
       case "december":
       case "january":
       case "february":
          season = "Winter";
          break;
    
       case "march":
       case "april":
       case "may":
          season = "Spring";
    
       case "june":
       case "july":
       case "august":
          season = "Summer";
          break;
    }
    return season;
 } console.log(checkSeason("May"));

 //15


 function findMax(a, b, c) {
    let max = 0;
    for(const elem of arguments) {
       if (elem > max) max = elem;
    } return max;
 } console.log(findMax(2, 2, 4));


