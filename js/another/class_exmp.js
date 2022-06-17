class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    circumference() {
        return 2 * Math.PI * this.radius;
    }
}