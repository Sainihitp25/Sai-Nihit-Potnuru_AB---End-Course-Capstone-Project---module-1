function titleCase(sentence) {
    
    return sentence.toLowerCase().split(' ')
        // Convert the input sentence to lowercase and split it into an array of words

        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        // Use the map function to create a new array by applying the given function to each element of the original array. In this case, capitalize the first letter of each word and concatenate it with the rest of the word.
        .join(' ');
        
}
console.log
console.log(titleCase("Dream big, work hard, and stay focused"));
module.exports = { titleCase };
