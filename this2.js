var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = 3;

rectangle.area  = function() {
    return this.height * this.width;
}
// here change the width to 8 and height to 6 using our new methods

var calculateArea = function (h,w) {
    return h*w;
};


var area = calculateArea(rectangle.height, rectangle.width);
console.log(area);
console.log(rectangle.area());