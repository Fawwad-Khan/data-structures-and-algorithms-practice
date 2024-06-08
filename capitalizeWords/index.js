// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  let firstElement = arr[0];
  arr.shift();
  if (arr.length) {
    return [firstElement.toUpperCase()].concat(capitalizeWords(arr));
  }
  return [firstElement.toUpperCase()];
}

let words = ["i", "am", "learning", "recursion"];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
