const sumAll = function (x, y) {
  let sum = 0;
  if (
    x < 0 ||
    y < 0 ||
    x !== Math.floor(x) ||
    y !== Math.floor(y) ||
    x !== Number(x) ||
    y !== Number(y)
  ) {
    return "ERROR";
  } else {
    for (i = x < y ? x : y; i <= (x < y ? y : x); i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
