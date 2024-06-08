// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
  let strings = [];
  for (let key in obj) {
    let item = obj[key];
    if (typeof item === "string") {
      strings.push(item);
    } else if (item instanceof Object) {
      strings = strings.concat(collectStrings(obj[key]));
    }
  }

  return strings;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"]
