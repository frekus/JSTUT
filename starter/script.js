
/* const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗')
}else
console.log('Not of age') */

//TYPE COERCION
/* const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
    console.log('Cool, 23 is an amazing number!')
}else if (favourite === 7) {
    console.log('7 is also a cool number')
}else{
    console.log('Number is not 23 or 7')
} */
'use strict';
//FUNCTIONS

/* function logger(){
    console.log('My name is Jonas');
}

logger();
logger(); */

/* function fruitProcessor(apples, oranges)  {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(2,4);
console.log(appleJuice) */

//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) { //anonymous function
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);