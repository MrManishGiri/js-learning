const accountId = 1234567890;
let accountEmail = 'machoman@gmail.com';
var accountPassword = '1234567890';
accountCity = 'Seoul';

// accountId = 9876543210;
accountEmail = 'hw@gmil.com';
accountPassword = '9876543210';
accountCity = 'Busan';

let accountState;

console.log(accountId);
/*
prefer not ot use var
because of issue in block scope and functional scope

*/


console.table([accountEmail, accountPassword, accountCity, accountState])

// {} : are called block scope. 