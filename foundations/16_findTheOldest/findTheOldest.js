const findTheOldest = function (people) {
  let ages = [];
  let thisYear = new Date().getFullYear;

  for (const person of people) {
    let birth = person.yearOfBirth;
    let death = "yearOfDeath" in person ? person.yearOfDeath : thisYear;
    ages.push(death - birth);
  }
  let oldestAge = ages.reduce((a, b) => Math.max(a, b), -Infinity);
  let oldestIndex = ages.indexOf(oldestAge);
  return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
