// Step 1: 
// 'this' key word allows us to see the entire window object and all its properties and methods.
// Because of how Javascript works, the function sayHi will now appear in our window object as a method.

// function sayHi() {
// }

// console.log(this);

// Step 2: 
// let nepal = {
//   add property:
//   mountains: ['Everest', 'Fish Tail', 'Annapura'],
//   add method:
//   printWithDash: function() { 
//     console.log('inside printWithDash function', this);

//     setTimeout(function() {
//       console.log('inside setTimeout function', this);
//       console.log(this.mountains.join(' - '));
//     }, 3000);
//   }

// };

// Step 3: 
// Allows us to see our mountains property successfully:
// alert(nepal.mountains);


// The below function does not work because 'Cannot read properties of undefined (reading 'join')'
// Therefore 'this' must be referring to a different context
// nepal.printWithDash();

// Step 4: 
// By using an arrow function, it will point to the enclosing or outer box context:
// Arrow functions dont have their own enclosing context. - Important for when using React

let nepal = {
  // add property:
  mountains: ['Everest', 'Fish Tail', 'Annapura'],
  // add method:
  printWithDash: function() { 
    setTimeout(() => console.log(this.mountains.join(' - ')), 3000)}
};

nepal.printWithDash();