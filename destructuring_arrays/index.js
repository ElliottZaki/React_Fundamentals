// We can find the first mountain like so:

// let [firstMountain] = ['Everest', 'Fish Tail', 'Annapura'];
// console.log(firstMountain);

// If we wanted to find the second mountain, we can commar seperate so the index '0' is missed out and call it whatever we like. can find the first mountain like so:

// let [, firstMountain] = ['Everest', 'Fish Tail', 'Annapura'];
// console.log(firstMountain);

// And vice versa for the following moutain:
let [,, firstMountain] = ['Everest', 'Fish Tail', 'Annapura'];
console.log(firstMountain);
