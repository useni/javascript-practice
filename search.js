
var _ = require("./node_modules/underscore");

text= "class room high school college usen bangalore naven usen";
var myName="usen";
var hits=[];


// looking for 'u' in the text

for(var i = 0; i < text.length; i++) {
	if (text[i] === myName[0]) {

		// If we find it, add characters up to
		// the length of my name to the array
		for(var j =i ; j < (myName.length + i); j++) {
                        if (text[j] === myName[j-i])
			    hits.push(i);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
        // console.log(_.uniq(hits));
}