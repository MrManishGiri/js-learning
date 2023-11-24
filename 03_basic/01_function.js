function myName(){
    console.log("M");
    console.log("a");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}

// myName() // executing the function.

// function sub(num1, num2 /* this are called parameters*/){
// console.log(num1 - num2)
// }
// sub(5,4 /* this are called arguments */)
// sub(5, null)

function sub(num1, num2 /* this are called parameters*/){
//   let result = num1 - num2
//   return result
return num1 - num2
    }
const result = sub(5, 1)
// console.log("Result:", result);
// sub(5,a) //output: error


function loginUserMsg(username){
if (username === undefined) {  // if(!username) {} it is also same as the not commented condition
    console.log("please enter a username");
    return
}

    return `${username} just logged in`
}
// console.log(loginUserMsg("Manish"));
// console.log(loginUserMsg());

function name(username="Mr.Giri") {
    if(!username) { // this is also a method to show undefined variables
        console.log("please enter your name buddy!");
        return;
    }
    return `${username} just shown in the website.` 
}
// console.log(name());
// console.log(name("Manish"));

function calculateCartPrice (...alpha /* rest operator */) {
//rest operator is used to represent an indefinite number of arguments as an array.
    return alpha
}
// console.log(calculateCartPrice(100,300,500 /*arguments*/));


function calcPrice(price1, price2, ...paid) {
    return paid
}
// console.log(calcPrice(50,80,90,100,250)); // output: [ 90, 100, 250 ]

// const user = {
//     username:"Manish",
//     age:21
// }

function hancy(anyObj) {
    // console.log(`username is ${anyObj.username} and age is ${anyObj.age}`)
}
// hancy(user)
hancy({
    username:"Manish",
    age:22
})

const priceArray = [200,300,50,100]
function return2ndPrice(gotArray) {
    return gotArray[3]
}
console.log(return2ndPrice(priceArray));