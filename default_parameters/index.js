// function welcome(user, message) {
//   alert(`Hello ${user} ${message}`);
// }

// welcome('Elliott', 'Good morning');

// If for a reason the user did not provide an argument, then we can assign a default value:

function welcome(user = 'Mysterious person', message = "Top of the morning t'yah!") {
  alert(`Hello ${user}, ${message}`);
}

welcome();