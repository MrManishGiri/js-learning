const user = {
  username: "Manish",
  age: 21,

  welcomeMsg: function () {
    console.log(`${this.username}, welcome to the website`); // `this.` refer to the current context
    console.log(this);
  },
};

// user.welcomeMsg()
// user.username ="Giri" // this will change the current context
// user.welcomeMsg()
// console.log(this);

// In the browser when we execute console.log(this) the output will be 'window object'

// function coffee() {
//     let username ="Manish"
//     console.log(this.username) // this is not applicable
// }
// coffee()

// 

// const coffee =() => {
//     console.log(this)
// }
// coffee()

// const subTwo =(num1, num2) => { // explicit return
//     return num1 - num2
// }

// ----- Implicit return in Arrow function------

const subTwo =(num1, num2) => (num1 - num2) // this methods mostly used in react
console.log(subTwo(20,10));

