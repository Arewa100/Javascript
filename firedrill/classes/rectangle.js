const Shape = require('./shape')

class Rectangle extends Shape {
    constructor(length, breath, height) {
        super(length, breath, height);
        this.isARectangle(length, breath);
    }

    isARectangle(length, breath) {
        if(length == breath) throw new Error("is not a rectangle");
    } 
    
    isPerfectSquare() {
        return this.length == this.breath ;
    }

    areaOfRectangle() {
        return this.length * this. breath;
    }
}

module.exports = Rectangle;