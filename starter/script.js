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
"use strict";
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

//for loop keeps running while the condition is true
/* for (let rep = 1; rep <= 10; rep++){
    console.log(`lifting weights repetition ${rep} 🏋️‍♀️`)
} */

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

/* for(let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
} */

/* const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i =0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages); */

//continue and break
/* console.log('-----ONLY STRINGS-----')

for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('-----BREAK WITH NUMBER-----')
for (let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
} */
/* for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
} */

//loop in a loop
/* for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting Exercise ${exercise}`);


for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}:Lifting weight repetition ${rep} 🏋️‍♀️`)  ;
    }
} */

//while loop is best when you don't know the number of times is loop is required to run.
//Conversely, For loops are used when the number of loops are known, e.g in arrays
/* let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
} */

/* let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

console.log(); */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
/* 
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
// calcTempAmplitude([3, 7, 4, 8, 1]);
// calcTempAmplitude(temperatures)

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); */

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Degrees celsius'),
    };

    //console.log(measurement.value);
    console.warn('10');
    console.error('10');
    console.table(measurement);

    const kelvin = Number(measurement.value) + 273;
    return kelvin;
    
};
console.log(measureKelvin());