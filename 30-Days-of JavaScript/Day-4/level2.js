//1

// let score = parseInt(prompt("Enter a score"));
// if(score >=80 && score <= 100){
//     console.log("Grade A");
// }
// else if(score>=70 && score<=89){
//     console.log("Grade B");
// }

// else if(score>=60 && score<=69){
//     console.log("Grade C");
// }

// else if(score>=50 && score<=59){
//     console.log("Grade D");
// }
// else{
//     console.log("Grade F");
// }

//2

// let month = prompt("Enter a month");
// let season;

// switch(month){
//     case "September":
//     case "October":
//     case "November":
//         season = "Autumn";
//         break;

//     case "December":
//     case "January":
//     case "February":
//         season = "Winter";
//         break;

//     case "March":
//     case "April":
//     case "May":
//         season = "Spring";
//         break;

//     case "June":
//     case "July":
//     case "August":
//         season = "Summer";
//         break;
// }
// console.log(season);

//3

let day = prompt("What is the day today? ").toLowerCase();
if (day == "saturday" || day == "sunday")
   console.log(day, " is a weekend!")
else console.log(day, " is a working day");