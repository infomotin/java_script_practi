let F = function () { };
let f = F.prototype;
let v = f.prototype;

Range.prototype = {
  constructor: Range, // Explicitly set the constructor back-reference
  /* method definitions go here */
};

// Extend the predefined Range.prototype object so we don't overwrite
// the automatically created Range.prototype.constructor property.
Range.prototype.includes = function(x) {
 return this.from <= x && x <= this.to;
};
Range.prototype.toString = function() {
 return "(" + this.from + "..." + this.to + ")";
};