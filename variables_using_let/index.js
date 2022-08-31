// if (true) {
//   var hi = "Elliott";
// }
// alert(hi);

// The reson we do not want to use var in this instance is in code it will likely cause a conflict between variable names. 
// However, let allows us to stay within its scrope i.e the curly brackets. 
// It is recommended that we use let instead of var as var will create an object in the window (html).

if (true) {
  let hi = "Elliott";
  hi = "Jess";
  alert(hi);
}