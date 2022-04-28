let d = new Date();

let min = d.getMinutes();
min<10 ? '0'+min.toString() : min;

let hrs = d.getHours();
hrs<10 ? '0'+hrs.toString() : hrs;

let year = d.getFullYear();
let month = d.getMonth();
month < 10 ? '0'+month.toString() : month;
let date = d.getDate();


console.log(`${year}-${month+1}-${date}  ${hrs}:${min}`);