// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(typeof myDate);

let myCreateDate = new Date(2023, 0, 1); // months are indexed from 0
// console.log(myCreateDate.toString());

let myDate2 = new Date('2023-01-01');  
// console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myDate2.getTime());

// console.log(Math.floor(Date.now()/1000)) ;


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());

console.log(`Today is ${newDate.getDay()} of ${newDate.getMonth()} of ${newDate.getFullYear()} `);


// newDate.toLocaleString("default", { weekday: "long"}, { month: "long" }, { year: "numeric" }, { hour: "numeric" }, { minute: "numeric" }, { second: "numeric" });
console.log(newDate.toLocaleString("default", { weekday: "long"}, { month: "long" }, { year: "numeric" }, { hour: "numeric" }, { minute: "numeric" }, { second: "numeric" }));