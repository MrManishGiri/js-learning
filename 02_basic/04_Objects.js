// Object singleton

const nesCafe = new Object() // this is singleton object
const nesCafe1 ={} // this is non singleton object

nesCafe.id = "234m"
nesCafe.name ="Manish"
nesCafe.isLoggedIn =false

// console.log(nesCafe);

const regularUser = {
    email: "manish@gmail.com",
    fullName: {
        Userfullname:{
            firstname: "Manish",
            lastnanme: "Giri"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.Userfullname);
// console.log(regularUser.fullName.Userfullname.firstname);


const obj1 ={1: "a", 2:"b"}
const obj2 ={3:"c", 4:"d"}

// const obj3 =Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2} // this is modern way to concat two or more objects in efficient way.
// console.log(obj3);
 

const user =[
    {
        id:0,
        email:"some@gmail.com"
    },
    {
        id:1,
        email:"some1@gmail.com"
    },
    {
        id:2,
        email:"some2@gmail.com"
    }
]

user[1].email

console.log(nesCafe);

console.log(Object.keys(nesCafe));
console.log(Object.values(nesCafe));

console.log(Object.entries(nesCafe));

console.log(nesCafe.hasOwnProperty("isLoggedIn")); //check if the given property is in object or not