// scope starts with let, var and const.
let a = 300; // this is global scope

if (true) {
  // these are block scope. it is applicable inside the specific block of code only
  let a = 30;
  const b = 20;
  var c = 30; // as much as possible don't use var in program
  //  console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// global scope of browser inspect and global scope of code node terminal is different.

// closure = In closure child function can get variable from parents variable but parents can't get variables from child function.

function one() {
  const username = "Manish";

  function two() {
    const learning = "youtube";
    console.log(username);
  }
  two();
}
// one()

if (true) {
  const username = "Manish";

  if (username == "Manish") {
    const website = "Youtube";
    // console.log(username+" "+ website); // correct execution
  }
//   console.log(website); // error
}

// console.log(username); //error


// ---------- INTERESTING ----------------
console.log(addOne(5) )

function addOne(num){
return num + 1
}
 

// addTwo(5) // error because executing before declaration
 const addTwo = function(num){ // declaring function with variable
    return num + 2
 }

 console.log(addTwo(5))