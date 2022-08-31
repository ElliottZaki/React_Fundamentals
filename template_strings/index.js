let firstname = 'Elliott';
let lastname = 'Zaki';
let age = prompt("Guess Elliott's age..");

// Old way:
// let result = firstname + ' ' + surname + ' is ' + age + ' years old!';
// alert(result);

// Using Template string

let result = `${firstname} ${lastname} is ${age} years old`;
alert(result);