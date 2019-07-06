
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


const ananganam  = (str1, str2) => {
    let str1obj = {};
    for(let char of str1) {
        str1obj[char] = str1obj[char] + 1 || 1;
    }
    let str2obj = {};
    for(let char of str2) {
        str2obj[char] = str2obj[char] + 1 ||1;
    }
    for(let char in str1obj)
    {
        if(str1obj[char] !== str2obj[char])
            console.log(char, "no");
        console.log(char);
    }
    console.log(str1obj);
}
ananganam("ojasvii", "asd");

//fibonacci 
let arr = [0,1];
for (let i = 2; i <= 10; i++) {
    arr.push((arr[i-2]) + (arr[i - 1]));
}
console.log(arr);