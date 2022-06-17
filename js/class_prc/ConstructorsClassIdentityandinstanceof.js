function c() {
    if(!new.target) return new c();
}


function Strange() {
    
}
Strange.prototype = Range.prototype
new Strange instanceof Range; // => true