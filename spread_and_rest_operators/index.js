// spread operators:
// These are usually in the form of : '...' and can be used to combine two arrays into one.
// Or can be used to combine two objects into one.
// When you combine, it does not modify or mutate the the orginal object or array.

// Array example:
var mountains  = ['Everest', 'Fish Tail', 'Annapurna'];
var mountainsFromJapan = ['Fuji'];

var allMountains = [...mountains, ...mountainsFromJapan];
console.log(allMountains);


// Object example:
var day = {
  breakfast: 'Cereal with an apple',
  lunch: 'Sandwich with crisps',
};

var night = {
  dinner: 'Roast chicken with steamed vegetables'
};

var picnic = {...day, ...night};
console.log(picnic);

// 'REST' example:

var rivers = ['Thames', 'Trent', 'Avon']
var [first, ...rest] = rivers

console.log(first);
console.log(rest);
