// In the past, Javascript did not have classes
// Instead, we created a function and then a method.

function Holiday(destination, days) {
  this.destination = destination;
  this.days = days;
};

Holiday.prototype.info = function() {
  console.log(this.destination + " | " + this.days + "days");
};

// Created a new instance of the function 'Holiday'
var nepal = new Holiday("Nepal", 30);
console.log(nepal);

// Accessed the info method above.
console.log(nepal.info());

// Step 02:
// In ES6; however, there is a better wat to make classes:

// 'Super' or 'Parent' class.
class Vacation {
  constructor(destination, days) {
    this.destination = destination;
    this.days = days;
  }

  info() {
    console.log(`${this.destination} will take ${this.days} days.`);
  }
}

const trip = new Vacation('Honolulu, Hawaii', 30);
console.log(trip.info());

// Prototype almost acts exactly like a constructor. 
// console.log(Vacation.prototype);


// 'Sub' or 'Child' class.
class Expedition extends Vacation {
  constructor(destination, days, gear) {
    super(destination, days);
    this.gear = gear;
  }

  info() {
    super.info();
    console.log(`Bring your ${this.gear.join(' and your ')}`)
  }
};

const tripWithGear = new Expedition('Spain', 30, ['Sunglasses', 'Sun-Lotion', 'Camera']);
tripWithGear.info();