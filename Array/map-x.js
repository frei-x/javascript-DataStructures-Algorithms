let tool = require("../tool/tool.js");
Array.prototype.mapX = function(callback) {
  if (!tool.isIterable(this)) {
    throw new TypeError(this + " 不是可迭代对象");
  }
  if (this.length <= 0) {
    throw new TypeError(this + " 为空");
  }
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i], i);
  }
};
var number = [2, 4, 6, 8, 10];

number.mapX((item, index) => {
  if (index < 2) {
    return item + 2;
  }
  return item * item;
});
console.log(number);
debugger;
