// Problem:
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// Time Complexity: O(n)

const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const frequencyCounter = {};

  for (let character of string2) {
    frequencyCounter[character] = (frequencyCounter[character] || 0) + 1;
  }

  for (let i = 0; i < string1.length; i++) {
    const charToCheck = string1[i];
    if (!frequencyCounter[charToCheck]) {
      return false;
    } else {
      frequencyCounter[charToCheck] -= 1;
    }
  }
  console.log(frequencyCounter);
  return true;
};

console.log("validAnagram('', '') ", validAnagram("", "")); // true
console.log("validAnagram('aaz', 'zza')", validAnagram("aaz", "zza")); // false
console.log(
  "validAnagram('anagram', 'nagaram') ",
  validAnagram("anagram", "nagaram")
); // true
console.log("validAnagram('rat', 'car') ", validAnagram("rat", "car")) / false;
console.log(
  "validAnagram('awesome', 'awesom')",
  validAnagram("awesome", "awesom")
); // false
console.log(
  "validAnagram('qwerty', 'qeywrt')",
  validAnagram("qwerty", "qeywrt")
); // true
console.log(
  "validAnagram('texttwisttime', 'timetwisttext')",
  validAnagram("texttwisttime", "timetwisttext")
); // true

// Explanation:
// 1. Check if the length of both strings is same, if its not then its a default false;
// 2. Create two objects using both strings, where the key is the value of the string and the value of the number of times it occurs in that string.
// 3. Itterate over the first object's keys and check if the key is present in the second object as well as if the number of times occurs is same.
// 4. If any of the above conditions fail, return false otherwise return true.
