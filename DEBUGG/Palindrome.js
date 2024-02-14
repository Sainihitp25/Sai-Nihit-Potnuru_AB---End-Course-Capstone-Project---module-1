function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
//let result = isPalindrome("RaceCar");
let result = isPalindrome("Hello");
console.log(result);
