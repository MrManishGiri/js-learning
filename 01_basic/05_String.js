const name = "Manish";
const greeting = "Good Morning";

// console.log(greeting + ' ' + name); //==> this is old style of writing the string in javascript and concatenation of the string

console.log(`Hello, ${name}. ${greeting}!  `); // this is modern style of writing the string in javascript

const gameName = new String("PUBG");
// console.log(gameName); // this is used to access the string
// console.log(gameName[0]); // this is used to access the index of the string
// console.log(gameName.__proto__); // this is used to access the prototype of the string

// console.log(gameName.length); // this is used to access the length of the string
// console.log(gameName.toLowerCase()); // this is used to convert the string into lowercase but this won't change the original string.
// console.log(gameName.toUpperCase()); // this is used to convert the string into uppercase but this won't change the original string.
// console.log(gameName.charAt(2)); // this is used to access the character at the given index of the string

// SubString
// const newString = gameName.substring(0,2)
// console.log(newString); // 

// // Slice
// const anotherString = gameName.slice(1,3)
// console.log(anotherString); 

// // Trim

// const newString1 = "    Hello World    ";
// console.log(newString1);
// console.log(newString1.trim()); // this is used to remove the extra spaces from the string

// // Replace

// const url = "https://www.google.com/ manish%20giri";
// console.log(url.replace("%20", "-")); // this is used to replace the string with another string
// console.log(url.includes("manish")); // this is used to check whether the string is present in the given string or not and it returns boolean value
// console.log(url.includes("ram"));

console.log(gameName.split("-"));