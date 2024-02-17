function shortestDistance(wordsDict, word1, word2) {
    let index1 = -1; // Initialize the index of word1
    let index2 = -1; // Initialize the index of word2
    let minDistance = Number.MAX_SAFE_INTEGER; // Initialize the minimum distance to a large value

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            index1 = i; // Update the index of word1
        } else if (wordsDict[i] === word2) {
            index2 = i; // Update the index of word2
        }

        if (index1 !== -1 && index2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(index1 - index2)); // Calculate the minimum distance
        }
    }

    return minDistance; // Return the minimum distance
}

console.log(shortestDistance( ["practice", "makes", "perfect", "coding", "makes"], "coding","makes"));