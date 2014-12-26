function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius){
    this.radius = radius,
    this.area = function(){
	return Math.PI * Math.pow(this.radius,2);
    };
}

// create a circle object with 4 as radius


var c4 = new Circle(4);

console.log(c4.radius);


// create a circle object with 10 radius

var c10 = new Circle(10)
console.log(c10.radius);
console.log(c10.area());