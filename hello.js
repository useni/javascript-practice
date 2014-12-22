// how to print on consoule
console.log('my first javascript program');

//how to define and array
var a=[1,2,3,4];
console.log(a);


// how to print object

var obj={name: 'useni',college: 'st.johns'};
// how to print full object

console.log(obj);

// find a value of key in an object

console.log (obj['college']);


// to print a for loop 


for (var i = 0; i <a.length; i++) {
console.log(a[i])
};

// how to print first eliment

console.log(a[0]);

// how to print last eliment of an array

console.log(a[3]);

console.log(a[a.length-1]);


// how to use conditional branching


if ("a"=="a") {

	console.log('true executed');
} else {
	console.log('false')
}

//how to write a function to add two numbers


var add=function(a,b){
	return a+b;

};


console.log(add(1,2));


// subtraction 
 function sub(a,b){
	return a-b;
}
console.log(sub(1,2));


// division

function div(a,b){
	return a/b;
}

console.log(div(4,2));


// how to print all arthimatic functions
console.log("printing calculator");

function calculator(a,b){
 	
	return [add(a,b), sub(a,b), div(a,b)];
}

console.log(calculator(10,2));