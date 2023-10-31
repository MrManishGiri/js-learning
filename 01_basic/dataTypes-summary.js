// primitive dataTypes
 // 7 types:- String, Number, Boolean, Null, Undefined, Symbol, BigInt


//  const myName = 'Manish'; // String
//     const age = 23; // Number
//     const isMale = true; // Boolean
//     const isFemale = false; // Boolean
//     const x = null; // Null
//     const y = undefined; // Undefined
//     const z = Symbol('mySymbol'); // Symbol

// const bigNumber = 1234567890123456789012345678901234567890n; // BigInt


//  // Reference dataTypes (Non-primitive dataTypes)
//     // 3 types:- Object, Array, Function

//     const myObject = {
//         name: 'Manish',
//         age: 23,
//         isMale: true,
//         isFemale: false,
//         x: null,
//         y: undefined,
//         z: Symbol('mySymbol'),
//         bigNumber: 1234567890123456789012345678901234567890n
//     }; // Object
//     console.log(myObject);

//     const myArray = [1, 2, 3, 4, 5]; // Array

//     const myFunction = function () {
//         console.log('Hello World!');
//     }

//     console.log(myArray);
//     console.log(typeof myObject);


//Types of memory
    // Stack (Primitive dataTypes), Heap (Reference dataTypes)

//Stack => it will not change the original value
    let myYoutubeName = 'Manish';
    let anotherName =myYoutubeName;
    
    anotherName = "Gm im germany";

    console.log(myYoutubeName);
    console.log(anotherName);
 
    //Heap => it will change the original value
    let user = {
        email :'usergoogle.com',
        password : '1234'
    }

    let userTwo = user;
    userTwo.email = 'ram@google.com';

    console.log(user.email);
    console.log(userTwo.email);
