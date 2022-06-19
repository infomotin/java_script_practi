const modules = {};
function require(moduleName) {
    if (modules[moduleName]) {
      return modules[moduleName];
    }
    throw new Error(`Module ${moduleName} not found.`);
}

// now in modules object inseart file ref 
modules['js/Modules/_modules_index.js'] = (function () { 
    const exports = {};
    exports.BitSet = class BitSet {...};
    return exports;

}());
modules['js/Modules/_modules_index.js'] = (function () {
    const exports = {};
    const sum = (a, b) => a + b;
    const square = (a) => a * a;
    exports.mean = function (data) {... };
    exports.stddev = function (data) {... };
    return exports;
}());
 



// Get references to the modules (or the module content) that we need
const stats = require("stats.js");
const BitSet = require("sets.js").BitSet;
// Now write code using those modules
let s = new BitSet(100);
s.insert(10);
s.insert(20);
s.insert(30);
let average = stats.mean([...s]); // average is 20