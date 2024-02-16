//Write a JavaScript function reverseString that takes a string as input and returns the string with its characters reversed.

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));

console.log(reverseString("AlmaBetter University"));