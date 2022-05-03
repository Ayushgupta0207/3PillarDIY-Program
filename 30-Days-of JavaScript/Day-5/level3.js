const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//i

ages.sort();
console.log(ages);

//ii
let min = ages[0];
let max = ages[ages.length - 1];

console.log("The min value is :" + min + " and the max value is :" + max);

//iii

let median = ages[ages.length / 2] + ages[ages.length / 2 - 1] / 2;

console.log("The median value is :" + median);

//iv

let average = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9])/ages.length;

console.log("The average value is :" + average);

//v 

let range = max - min;
console.log("The range value is :" + range);

//vi

Math.abs(min-average) < Math.abs(max-average) ? console.log("Data is left skewed"): console.log('Data is right skewed!');