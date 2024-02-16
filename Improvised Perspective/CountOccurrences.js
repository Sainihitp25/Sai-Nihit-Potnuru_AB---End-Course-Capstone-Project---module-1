
function countOccurrences(str, char) {
    const regex = new RegExp(char, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;   
}
console.log(countOccurrences("hello world", "l"))
console.log(countOccurrences("Elephant", "E"))
module.exports = { countOccurrences };