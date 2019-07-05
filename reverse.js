
//reverse the statement
var str = "this is a test program"

str = str.split('').reverse().join('');
console.log(str);

//check for palindrome
//sentence or other type of character sequence which reads the same backward as forward.
// For example, “racecar” and “Anna” are palindromes.

const palindrome = str => {
str = str.toLowerCase();
return str === str.split('').reverse().join('');
}

console.log(palindrome("Anna"));
console.log(palindrome("Friend"));