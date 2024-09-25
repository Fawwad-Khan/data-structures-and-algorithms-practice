const mergeSort = (arr1) => {
  if (arr1.length <= 1) {
    return arr1;
  }
  const middle = Math.floor(arr1.length / 2);
  const left = arr1.slice(0, middle);
  const right = arr1.slice(middle);

  const arrayToReturn = merge(mergeSort(left), mergeSort(right));

  return arrayToReturn;
};

const merge = (arr1, arr2) => {
  let counter1 = 0;
  let counter2 = 0;

  let arrayToReturn = [];

  while (counter1 < arr1.length && counter2 < arr2.length) {
    if (arr1[counter1] < arr2[counter2]) {
      arrayToReturn.push(arr1[counter1]);
      counter1++;
    } else if (arr1[counter1] > arr2[counter2]) {
      arrayToReturn.push(arr2[counter2]);
      counter2++;
    } else {
      arrayToReturn.push(arr1[counter1]);
      arrayToReturn.push(arr2[counter2]);
      counter1++;
      counter2++;
    }
  }

  if (counter1 < arr1.length) {
    arrayToReturn = arrayToReturn.concat(arr1.slice(counter1));
  } else if (counter2 < arr2.length) {
    arrayToReturn = arrayToReturn.concat(arr2.slice(counter2));
  }

  return arrayToReturn;
};

console.log(mergeSort([1, 3, 5, 7, 2, 4, 6, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
