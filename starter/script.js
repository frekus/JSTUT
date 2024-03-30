
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
/* function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYear) { //anonymous function
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2); */

// Arrow function
/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob')); */

//Functions calling other functions

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Kuf',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false, */

    /* calcAge: function (birthYear) {
        return 2037 - birthYear;
    } */

   /*  calcAge: function () {
        //console.log(this);
        return 2037 - this.birthYear;
    }  */
/* 
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }

}; */

/* const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName.....')

 if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request, Choose between .......')
}  
 */
// jonas.location = 'Portugal';
// jonas['twitter'] = '@kuf';
// //console.log(jonas); 

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

//functions as object properties

// console.log(jonas.calcAge());
// console.log(jonas.age);

// Challenge
//"Jonas is a 46-year old teacher, and he has a/no driver's license"
// console.log(jonas.getSummary());
    