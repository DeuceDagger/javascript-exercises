const fibonacci = function (index) {
  index = Number(index);
  if (index < 0) {
    return "OOPS";
  }

  if ((index = 0)) {
    return 0;
  }
  if (index === 1 || index === 2) {
    return 1;
  }
  let a = 1;
  let b = 1;
  for (let i = 3; i <= index; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
