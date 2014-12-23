// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;
  
// make susan here, and first give her an age of 25

var susan = new Object();
susan["age"] = 25;

console.log(susan);

// here, update Susan's age to 35 using the method
susan.setAge=setAge;
susan.setAge(35);

console.log(susan);

susan.color='white';

console.log(susan);