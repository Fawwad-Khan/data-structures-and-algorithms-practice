// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  let string = arr[0];
  let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
  let arrToReturn = [capitalizedString].concat(capitalizeFirst(arr.slice(1)));

  return arrToReturn;
}

capitalizeFirst(["car", "taco", "banana"]); // ['Car','Taco','Banana']
