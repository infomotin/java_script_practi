export const PI = Math.PI;
export const TAU = Math.PI * 2;
export const E = Math.E;
export default class Circle{
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