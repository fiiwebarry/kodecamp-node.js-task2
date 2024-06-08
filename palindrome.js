const palindrome = (word) => {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
};

console.log(palindrome('level'));
console.log(palindrome('energy'));
