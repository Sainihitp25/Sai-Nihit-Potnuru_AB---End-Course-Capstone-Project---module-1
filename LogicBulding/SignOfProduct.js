function signOfProduct(arr) {
    let negatives = 0;
    for (let num of arr) {
        if (num === 0) {
            return 0; // If there's a zero, the product will be zero
        } else if (num < 0) {
            negatives++;
        }
    }
    return negatives % 2 === 0 ? 1 : -1; // If the number of negatives is even, the product is positive; otherwise, it's negative
}

console.log(signOfProduct([2, -3, 5, 4]));
console.log(signOfProduct([1, 2, 0]));