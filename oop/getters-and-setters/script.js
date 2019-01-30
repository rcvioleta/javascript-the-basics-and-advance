function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 1, y: 2 };
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid value');
            defaultLocation = value;
        }
    })
}

const circle = new Circle(360);
// accessing a private property of an object
circle.defaultLocation; 
// assigning a new value to a private property of an object
circle.defaultLocation = { x: '<new value>', y: '<new value>' }; 