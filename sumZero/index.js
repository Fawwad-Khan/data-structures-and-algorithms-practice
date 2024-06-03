// Problem:
// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Examples:
// sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
// sumZero([-2, 0, 1, 3]); // undefined
// sumZero([1, 2, 3]); // undefined

// Time Complexity: O(n)
// Space Complexity: O(1)

const sumZero = (array) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(
  "sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])",
  sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])
); // [-3, 3]
console.log("sumZero([-2, 0, 1, 3])", sumZero([-2, 0, 1, 3])); // undefined
console.log("sumZero([1, 2, 3])", sumZero([1, 2, 3])); // undefined

// Explanation:
// The sumZero function uses the two-pointer pattern to solve the problem.
// The function initializes two pointers, left and right, at the beginning and end of the array, respectively.
// It then iterates through the array while the left pointer is less than the right pointer.
// At each iteration, the function calculates the sum of the values at the left and right pointers.
// If the sum is zero, the function returns an array containing the values at the left and right pointers.
// If the sum is greater than zero, the function decrements the right pointer.
// If the sum is less than zero, the function increments the left pointer.
// This process continues until the left pointer is equal to or greater than the right pointer, at which point the function returns undefined.
