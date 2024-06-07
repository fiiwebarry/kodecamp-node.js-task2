
const items = [1, 2, 2, 3, 3, 3, 4, 5, 5];
const removeDuplicate = (arr) => {
  const duplicates = [];
  arr.forEach((item, index) => {
    if (arr[index] !== arr[index + 1]) {
      duplicates.push(item);
    }
  });
  return duplicates;
};

console.log(removeDuplicate(items));