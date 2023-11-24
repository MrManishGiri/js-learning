// Singleton is made by constructor
// Object.create

//object literals

const sym1 = Symbol("&");

const JsUser = {
  teacher: "Hitesh",
  "full name": "Manish Giri",
  age: 21,
  location: "Belbhariya",
  isLoggedIn: false,
  lastLoginDays: ["Sunday", "Friday"],

  // [sym1]: "&",
  [sym1]: "key1",
};

// console.log(JsUser.location); // Most of the time we user '.' method 
// console.log(JsUser["location"]); // in some of the cases we use [""] method to get the values
// console.log(JsUser["full name"]);

// console.log(JsUser[sym1]); // // symbols should be always accessed by [] only

JsUser.email = "girimanish@gmail.com";
// console.log(JsUser);

// Object.freeze(JsUser); // it will fix the value of variables despite being changed in other line. the original value remains same.

JsUser.email = "manishgiri@gmail.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js Users");
}

console.log(JsUser.greeting); // it will return [function (anonymous)]

// console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello Js Users teacher is ${this.teacher}` ); // string interpolation by using backtick(` `).
}

console.log(JsUser.greetingTwo())