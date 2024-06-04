// Problem:
// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2); // true
// areThereDuplicates('a', 'b', 'c', 'a'); // true

const areThereDuplicates = (...args) => {
  if (args) {
    const sortedArray = args.sort();
    let current = 0;
    let next = 1;
    while (next !== sortedArray.length) {
      if (sortedArray[current] === sortedArray[next]) return true;
      current++;
      next++;
    }
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(areThereDuplicates("a", "b", "c", "d")); // false
