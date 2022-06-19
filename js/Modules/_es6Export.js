export const PI = Math.PI;

export function degreesToRadians(degrees) {
    return degrees * (PI / 180);
}
export class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return PI * this.radius * this.radius;
    }
}

// export function, class, and variable

export { PI, degreesToRadians, Circle };
// export default Circle;
// export const PI = Math.PI;
export default class BitSet extends AbstractWritableSet {
    // implementation omitted
}
export * from "./stats/mean.js";
export * from "./stats/stddev.js";
export { layout as calculateLayout, render as renderLayout };
export { default as mean } from "./stats/mean.js";
export { default as stddev } from "./stats/stddev.js";
export { mean, mean as average } from "./stats/mean.js";
export { stddev } from "./stats/stddev.js";

// The average.js module simply re-exports the stats/mean.js default export
export { default } from "./stats/mean.js"
