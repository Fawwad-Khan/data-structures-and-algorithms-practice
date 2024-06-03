// Problem:
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Examples:
// countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4

// Time Complexity: O(n)
// Space Complexity: O(1)

// My Solution
const countUniqueValues = (array) => {
  if (!array.length) return 0;
  let left = 0;
  let right = left + 1;
  let uniqueValues = 1;
  while (left !== array.length - 1) {
    if (array[left] === array[right]) {
      right++;
    } else {
      left = right;
      uniqueValues++;
      right = left + 1;
    }
  }
  return uniqueValues;
};

// ColtSteele solution
// const countUniqueValues = (array) => {
//   if (!array.length) return 0;
//   let left = 0;
//   let right = left + 1;
//   while (right !== array.length - 1) {
//     if (array[left] !== array[right]) {
//       left++;
//       right = left + 1;
//       array[left] = array[right];
//     }
//     right++;
//   }
//   return left;
// };

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
