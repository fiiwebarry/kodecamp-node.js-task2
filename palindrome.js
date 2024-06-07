
let names=['paint', 'tree', 'friend', 'palindrome']

function palindrome(words){
    return words.find(word=>word === 'palindrome')
}
console.log(palindrome(names))