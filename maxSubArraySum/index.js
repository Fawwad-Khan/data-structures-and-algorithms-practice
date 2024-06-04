// Problem: MaxSubArraySum
// Write a function called maxSubArraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Examples:
// maxSubArraySum([1,2,5,2,8,1,5],2) // 10
// maxSubArraySum([1,2,5,2,8,1,5],4) // 17
// maxSubArraySum([4,2,1,6],1) // 6
// maxSubArraySum([4,2,1,6,2],4) // 13
// maxSubArraySum([],4) // null

// Time Complexity - O(n)
// Space Complexity - O(1)

const maxSubArraySum = (array, num) => {
  let maxSum = 0;

  if (num > array.length) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  let tempSum = maxSum;
  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];

    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null
