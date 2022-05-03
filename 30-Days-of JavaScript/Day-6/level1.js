//1

//a

// for (var i = 0; i < 11; i++) {
//     console.log(i);
// }

//b

// let i=0;
// while(i<11){
//     console.log(i);
//     i++;
// }


//c

// let index1=0;
// do{
//     console.log(index1);
//     index1++;
// }while(index1<11);

//2

//a

// for(var i =10;i>=0;i--){
//     console.log(i);
// }

// let i =10;
// while(i>=0){
//     console.log(i);
//     i--;
// }

//c

// let i=10;
// do{
//     console.log(i);
//     i--;
// }
// while(i>=0);


//3

// let n =5;
// for(var i=0;i<=n;i++){
//     console.log(i);
// }

//4

// for(var i=1;i<=7;i++){
//     console.log("#".repeat(i));
// }

//5

// for(var i=0;i<11;i++){
//     console.log(`${i} x ${i} = ${i*i}`);
// }

//6

// console.log("i\ti^2\ti^3");
// for (let index = 0; index < 11; index++) {
//     console.log(`${index}\t${index*index}\t${index*index*index}`);
    
// }

//7

// var n =100;
// for(var a = 0;a<=n;a++){
//     if(a%2==0){
//         console.log(a);
//     }
// }

// //8

// var n1 =100;
// for(var b = 0;b<=n1;b++){
//     if(b%2!=0){
//         console.log(b);
//     }
// }

// //9

// var n2 =100;
// for(var c = 0;c<=n2;c++){
//     let flag =0;
//     for(var j=2;j<c;j++){
//         if(c%j==0){
//             flag=1;
//             break;
//         }
//     }

//     if(c>1 && flag==0){
//         console.log(c);
//     }
// }

// //10

// let sum =0;
// for(var d=0;d<=100;d++){
//     sum+=d;
// }
// console.log(sum);

// //11
// let evenSum =0;
// let oddSum =0;
// for(var e=0;e<=100;e++){
//     if(e%2==0){
//         evenSum+=e;
//     }
//     else{
//         oddSum+=e;
//     }
// }

// console.log(`Even sum: ${evenSum}`);
// console.log(`Odd sum: ${oddSum}`);

// //12

// console.log([evenSum,oddSum]);

//13

// let randomNumber =[];

// for(var i=0;i<5;i++){
//     randomNumber.push(Math.floor(Math.random()*10));
// }
// console.log(randomNumber);  

//14

let alphabets = 'abcdefghijklmnopqrstuvwxyz';
let randoms = [];
for(let i = 0; i < 6; i++) {
   if(i%2 == 0) randoms.push(i);
   else randoms.push(alphabets[parseInt(Math.random() * 25)])
}
console.log(randoms.join(''));