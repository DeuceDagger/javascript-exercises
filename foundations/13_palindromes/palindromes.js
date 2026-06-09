const palindromes = function (string) {
  let normalString = string.replace(/[^a-zA-Z0-9]+/g, "").toUpperCase();
  let reverseString = normalString
    .split("")
    .reverse()
    .join("")
    .toUpperCase();
  return normalString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
