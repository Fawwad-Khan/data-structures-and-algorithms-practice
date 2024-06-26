// Problem:
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// Examples:
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false

// Time Complexity: O(n)

const same = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let val of array1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of array2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let i = 0; i < array1.length; i++) {
    const squaredValue = array1[i] ** 2;
    if (!(squaredValue in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[squaredValue] !== frequencyCounter1[array1[i]]) {
      return false;
    }
  }
  return true;
};

console.log("same([1, 2, 3], [4, 1, 9]))", same([1, 2, 3], [4, 1, 9])); // true
console.log("same([1, 2, 3], [1, 9])", same([1, 2, 3], [1, 9])); // false
console.log("same([1, 2, 1], [4, 4, 1])", same([1, 2, 1], [4, 4, 1])); // false

// Explanation:
// 1. Check if the length of both arrays is same, if its not then its a default false;
// 2. Create two objects using both arrays, where the key is the value of the array and the value of the number of times it occurs in that array.
// 3. Itterate over the first object's keys and check if the squared value of the key is present in the second object as well as if the number of times occurs is same.
// 4. If any of the above conditions fail, return false otherwise return true.
