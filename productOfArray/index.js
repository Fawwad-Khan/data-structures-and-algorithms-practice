//productOfArray
//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  const lastElement = arr.pop();
  arr[arr.length - 1] = lastElement * arr[arr.length - 1];
  return productOfArray(arr);
};

productOfArray([1, 2, 3]); // 6

productOfArray([0, 1, 2, 3]); // 0

productOfArray([0]); // 0

productOfArray([1, -2, 3]); // -6
