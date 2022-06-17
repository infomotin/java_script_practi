class range{
    constructor(from, to){
        this.from = from;
        this.to = to;
    }
    includes(x){
        return this.from <= x && x <= this.to;
    }
    *[Symbol.iterator](){
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }
    toString(){
        return "(" + this.from + "..." + this.to + ")";
    }
}


// A Span is like a Range, but instead of initializing it with
// a start and an end, we initialize it with a start and a length
class Span extends range{
    constructor(start, length) {
        if(length >= 0){
            super(start, start + length);
        }
        else {
            super(start + length, start);
        }
    }
}



// Administrator@FERDOUSH MINGW64 /c/laragon/www/Advance_oop_php (main)
// $ node
// Welcome to Node.js v14.16.0.
// Type ".help" for more information.
// > class range{
// ...     constructor(from, to){
// .....         this.from = from;
// .....         this.to = to;
// .....     }
// ...     includes(x){
// .....         return this.from <= x && x <= this.to;
// .....     }
// ...     *[Symbol.iterator](){
// .....         for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
// .....     }
// ...     toString(){
// .....         return "(" + this.from + "..." + this.to + ")";
// .....     }
// ... }
// undefined
// > range
// [class range]
// > typeof range
// 'function'
// > range instanceof class
// ...
// ...
// ...
// > range instanceof
// ...
// >
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// >

// Administrator@FERDOUSH MINGW64 /c/laragon/www/Advance_oop_php (main)
// $ node
// Welcome to Node.js v14.16.0.
// Type ".help" for more information.
// > class range{
// ...     constructor(from, to){
// .....         this.from = from;
// .....         this.to = to;
// .....     }
// ...     includes(x){
// .....         return this.from <= x && x <= this.to;
// .....     }
// ...     *[Symbol.iterator](){
// .....         for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
// .....     }
// ...     toString(){
// .....         return "(" + this.from + "..." + this.to + ")";
// .....     }
// ... }
// undefined
// > let c = new range(9,10)
// undefined
// > c
// range { from: 9, to: 10 }
// > c.includes(3)
// false
// > let c = new range(1,10)
// Uncaught SyntaxError: Identifier 'c' has already been declared
// > let b = new range(1,10)
// undefined
// > b
// range { from: 1, to: 10 }
// > b.includes(3)
// true
// > b.toString()
// '(1...10)'
// > [...b]
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
//     >

