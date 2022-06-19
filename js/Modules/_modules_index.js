const BitSet = (function() { // Set BitSet to the return value of this function
 // Private implementation details here
 function isValid(set, n) { ... }
 function has(set, byte, bit) { ... }
 const BITS = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);
 const MASKS = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);
 // The public API of the module is just the BitSet class, which we define
 // and return here. The class can use the private functions and constants
 // defined above, but they will be hidden from users of the class
 return class BitSet extends AbstractWritableSet {
 // ... implementation omitted ...
 };
}());

const stats = (
    function () {
        const sum = (a, b) => a + b;
        const square = (a) => a * a;

        function mean(data) {
            return reduce(data, sum) / data.length;
        }
        // a public function that well be return exported 
        function stddev(data) {
            let m = mean(data);
            return Math.sqrt(reduce(map(data, square), sum, m) / (data.length - 1));
        }
        return { mean, stddev };
    }());

    // And here is how we might use the module
stats.mean([1, 3, 5, 7, 9]) // => 5
stats.stddev([1, 3, 5, 7, 9]) // => Math.sqrt(10)
