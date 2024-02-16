function findLongestWord(sentence) {
  const words = sentence.split(' ');
  let maxLength = 0;

  for (const word of words) {
    const length = word.length;
    if (length > maxLength) {
      maxLength = length;
    }
  }

  return maxLength;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  
module.exports = { findLongestWord };