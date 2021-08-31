const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Kufre';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

val = firstName + ' ' + lastName;

//append
val = 'Kufre';
val += 'Traversy';

val  = 'Hello, my name is ' + firstName + ' and I am ' + age;

//Escaping
val = 'That\'s awesome. I can\'t wait';

//length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[0];

//indexof()
val = firstName.indexOf('1');
val = firstName.lastIndexOf('1');

//charAt()
val = firstName.charAt('2');

//get last char
val = firstName.charAt(firstName.length -1);

//substring()
val = firstName.substring(0,4);

//slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

//split()
val = tags.split(',');

//replace()
val = str.replace('Kufre', 'kay');

//includes()
val = str.includes('foo');



console.log(val);