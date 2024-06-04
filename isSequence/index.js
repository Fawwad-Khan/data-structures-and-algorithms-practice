// Problem:
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:
// isSubsequence("hello", "hello world"); // true
// isSubsequence("sing", "sting"); // true
// isSubsequence("abc", "abracadabra"); // true
// isSubsequence("abc", "acb"); // false

function isSubsequence(str1, str2) {
  let count1 = 0;

  for (let index in str2) {
    if (str1[count1] === str2[index]) {
      count1++;
    }
    if (count1 === str1.length) {
      return true;
    }
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
