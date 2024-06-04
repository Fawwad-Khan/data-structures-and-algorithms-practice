// Problem:
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//
// Examples:
// sameFrequency(182, 281); // true
// sameFrequency(34, 14); // false
// sameFrequency(3589578, 5879385); // true
// sameFrequency(22, 222); // false

const sameFrequency = (number1, number2) => {
  const string1 = String(number1);
  const string2 = String(number2);

  if (string1.length !== string2.length) return false;

  const frequencyCounter = {};

  for (let letter of string1) {
    frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
  }
  for (let letter of string2) {
    if (!frequencyCounter[letter]) {
      return false;
    } else {
      frequencyCounter[letter]--;
    }
  }
  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
