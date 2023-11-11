const cusName = ["ram", "hari", "Manish", "sarita"]

const digits = [1,2,3,4,5,6]


// cusName.push(digits) //combine two arrays without creating a new array
// console.log(cusName)

// const combineArray = cusName.concat(digits) // combine two arrays by creating a new array
// console.log(combineArray)
 
// Spread
// const allCombine =[...cusName,...digits] // by using this method we can combine any number of arrays together
// console.log(allCombine);

// const array_inside_array = [1,2,3,["Manish","sarita","Ram"],"pidit",[6,8,9],10]

// const all_array_combine = array_inside_array.flat(Infinity)
// console.log(all_array_combine)

// console.log(Array.isArray("Something"));

// console.log(Array.from("Something"));

// console.log(Array.from({name:"Sonalika"})) // // return empty array

let name1="Manish"
let name2= "Sarita"
let name3 ="Mira"

console.log(Array.of(name1,name2,name3)) // combines variables into a array.