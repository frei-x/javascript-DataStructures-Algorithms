Array.prototype.mapX = function (callback) {
  console.log(this);
  if (!Array.isArray(this)) {
    throw new TypeError(this + " 不是数组")
  }
  if (this.length <= 0) {
    throw new TypeError(this + " 为空")
  }
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i], i);
  }
}
var number = [2, 4, 6, 8, 10]
number.mapX((item, index) => {
  if (index < 2) {
    return item + 1
  }
  return item * item

})
console.log(number);
// 检测是否为可迭代对象:
function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}