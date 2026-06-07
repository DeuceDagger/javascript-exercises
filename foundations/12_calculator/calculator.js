const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((acc, current) => acc + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, current) => acc * current);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let acc = 1;
  for (i = x; i > 0; i--) {
    acc *= i;
  }
  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
