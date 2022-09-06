// Step 1: 
// let thingsToDo = {
//   morning: "Exercise",
//   afternoon: "Work",
//   evening: "Code",
//   night: ["Sleep", "Dream"]
// };

// Object destructuring:
// We are picking which key value pairs we want to use
// let {morning, afternoon} = thingsToDo;

// You can even change the values like so:
// morning = 'Run';

// As you can see on the html page, we have extracted the values these variables hold.
// console.log(morning, ' - ', afternoon);

// Step 2 - example 2 using function arguments: 
// Old format:

// let uniStudent = student => {
//   console.log(`${student.name} from ${student.university}`);
// };

// uniStudent({
//   name: 'Elliott',
//   university: 'Manchester University'
// });

// Step 3 - Destructuring method:
let uniStudent = ({name, university}) => {
  console.log(`${name} from ${university}`);
};

uniStudent({
  name: 'Elliott',
  university: 'Manchester University'
});