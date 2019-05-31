Array.prototype.rotate = function rotate(n) {
  if (!Array.isArray(this)) {
    throw new TypeError(`Expected an array, got ${typeof this}`);
  }

  const x = this.slice();
  const num = typeof n === 'number' ? n : 0;

  return x.splice(-num % x.length).concat(x);
}

Array.prototype.random = function random() {
  return this[Math.floor(Math.random() * this.length)];
}
