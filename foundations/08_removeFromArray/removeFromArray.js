const removeFromArray = function (array) {
  let args = Array.from(arguments);
  let mainArray = args[0];
  return mainArray.filter((item) => args.indexOf(item) < 0);
};

// Do not edit below this line
module.exports = removeFromArray;
