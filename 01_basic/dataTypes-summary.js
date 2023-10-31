// primitive dataTypes
 // 7 types:- String, Number, Boolean, Null, Undefined, Symbol, BigInt


 const myName = 'Mansih'; // String
    const age = 23; // Number
    const isMale = true; // Boolean
    const isFemale = false; // Boolean
    const x = null; // Null
    const y = undefined; // Undefined
    const z = Symbol('mySymbol'); // Symbol

const bigNumber = 1234567890123456789012345678901234567890n; // BigInt


 // Reference dataTypes (Non-primitive dataTypes)
    // 3 types:- Object, Array, Function

    const myObject = {
        name: 'Mansih',
        age: 23,
        isMale: true,
        isFemale: false,
        x: null,
        y: undefined,
        z: Symbol('mySymbol'),
        bigNumber: 1234567890123456789012345678901234567890n
    }; // Object
    console.log(myObject);

    const myArray = [1, 2, 3, 4, 5]; // Array

    const myFunction = function () {
        console.log('Hello World!');
    }

    console.log(myArray);
    console.log(typeof myObject);