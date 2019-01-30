function Shape() {
}

Shape.prototype.greet = function () {
    console.log('I\'m from the Shape Object');
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function () {
    console.log('Drawing inside the Circle Object')
}

const circle = new Circle(10);
