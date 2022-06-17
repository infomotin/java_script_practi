class range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  includes(x) {
    return this.from <= x && x <= this.to;
  }
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }
  toString() {
    return "(" + this.from + "..." + this.to + ")";
  }
  static parse(x) {
    let matchex = x.match(/^\((\d+)\.\.\.(\d+)\)$/);
    if (!matches) {
      throw new TypeError(`Cannot parse Range from "${s}".`);
    }
    return new Range(parseInt(matches[1]), parseInt(matches[2]));
  }
}
