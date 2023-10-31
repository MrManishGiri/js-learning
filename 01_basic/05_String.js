const name = 'Manish';
const greeting = 'Good Morning';

// console.log(greeting + ' ' + name); //==> this is old style of writing the string in javascript and concatenation of the string

console.log(`Hello, ${name}. ${greeting}!  `); // this is modern style of writing the string in javascript

const gameName = new String('PUBG');
 console.log(gameName[0]); // this is used to access the index of the string
 console.log(gameName.__proto__); // this is used to access the prototype of the string

console.log(gameName.length); // this is used to access the length of the string
console.log(gameName.toLowerCase()); // this is used to convert the string into lowercase but this won't change the original string.
console.log(gameName.toUpperCase()); // this is used to convert the string into uppercase but this won't change the original string.
console.log(gameName.charAt[0]); // this is used to access the character at the given index of the string