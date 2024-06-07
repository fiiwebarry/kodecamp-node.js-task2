const stringArray = ["banana", "john", "doe", "emma"];
const linearSearch = (arr, search) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      return "Yes, the string exists in the array";
    }
  }
  return "No, the string does not exist in the array";
};

console.log(linearSearch(stringArray, "fruit"));
console.log(linearSearch(stringArray, "john"));