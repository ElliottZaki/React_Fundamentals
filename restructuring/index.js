// Step 01 - Restructuring:
// let mountain_name = 'Everest';
// let height = '8849';

// let adventureClimb = {mountain_name, height};
// console.log(adventureClimb);

// Step 02:
// We can also create object methods using restructuring
// var output = function() {
//   console.log(`Mt. ${this.mountain_name} is ${this.height} meters tall`)
// };

// let adventureClimb = {mountain_name, height, output};
// adventureClimb.output();

// Step 03
// We can also use the above properties and place them directly into our object:

let adventureClimb = {
  name: 'Everest',
  height: 8849,
  output() {
    console.log(`Mt. ${this.name} is ${this.height} meters tall`)
  }
};
adventureClimb.output();