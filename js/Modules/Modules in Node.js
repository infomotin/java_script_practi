const sum = (a, b) => a + b;
const square = (a) => a * a;
const mean = (data) => reduce(data, sum) / data.length;
const stddev = function (d) {
    let m = exports.mean(d);
    return Math.sqrt(reduce(map(d, square), sum, m) / (d.length - 1));
}


module.exports = class BitSet extends AbstractWritableSet {
  // implementation omitted
};


//
const sum = (a, b) => a + b;
const square = (a) => a * a;
const mean = (data) => reduce(data, sum) / data.length;
const stddev = function (d) {
    let m = exports.mean(d);
    return Math.sqrt(reduce(map(d, square), sum, m) / (d.length - 1));
}

module.exports = { mean, stddev };