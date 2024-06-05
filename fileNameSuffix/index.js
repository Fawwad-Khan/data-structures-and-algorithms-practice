// Problem:
// You are given an array of strings names representing filenames.
// The array is sorted in order of file creation, such that names[i] represents the name of a file created before names[i+1] and after names[i-1] (assume 0-based indexing).
// Because all files must have unique names, files created later with the same name as a file created earlier should have an additional (k) suffix in their names, where k is the smallest positive integer (starting from 1) that does not appear in previous file names.

const fileNameSuffix = (arr) => {
  const frequencyCounter = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;

    if (frequencyCounter[item] > 1) {
      if (frequencyCounter[`${item}(${frequencyCounter[item]})`]) {
        while (frequencyCounter[`${item}(${frequencyCounter[item]})`]) {
          frequencyCounter[item]++;
        }
        let origin = frequencyCounter[item];
        frequencyCounter[item]++;
        frequencyCounter[`${item}(${origin})`] =
          (frequencyCounter[`${item}(${origin})`] || 0) + 1;
      } else {
        frequencyCounter[`${item}(${frequencyCounter[item] - 1})`] = 1;
      }

      arr[i] = `${item}(${frequencyCounter[item] - 1})`;
    }
    console.log("i have fc after", item, frequencyCounter);
  }
  return arr;
};

console.log(
  "fileNameSuffix",
  fileNameSuffix([
    "dd", //1
    "dd(1)", // 2
    "dd(2)", // 3
    "dd", //4
    "dd(1)", //5
    "dd(1)(2)", // 6
    "dd(1)(1)", //7
    "dd", // 8
    "dd(1)", // 9
  ])
);

// console.log(
//   "fileNameSuffix",
//   fileNameSuffix([
//     "a(1)",
//     "a(6)",
//     "a",
//     "a",
//     "a",
//     "a",
//     "a",
//     "a",
//     "a",
//     "a",
//     "a",
//     "a",
//   ])
// );
