const fibonacci = function (index) {
  if (!sequence) {
    let sequence = [1, 1];
  }
  if (index <= sequence.length) {
    return sequence[index];
  } else {
    sequence.push(
      sequence[sequence.length] + sequence[sequence.length - 1],
    );
    fibonacci(index);
  }
};

// Do not edit below this line
module.exports = fibonacci;
