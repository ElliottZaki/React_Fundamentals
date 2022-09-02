// Long format:
// function greeting(message) {
//   return alert(`${message}, everyone!`);
// }

// greeting('Good afternoon');

// One-liner arrow function syntax:
// If it is one argument, you do not require a paranthesis.
// If it is one statement that you returning, you do not need the return key word.

// greeting = (message) => alert(`${message}, everyone!`);
// greeting('Good afternoon');

// If you require more than one statement than we can use the curley brakcets like so:

createblog = (title, body) => {
  if(!title) {
    throw new error('A title is required');
  }
  if(!body) {
    throw new error('Body cannot be empty');
  }
  return alert(`${title} - ${body}`);
}

createblog('Javascript_Fundamentals', 'This is a Javascript fundamental blog');