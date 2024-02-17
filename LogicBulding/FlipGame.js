function findMove(s) {
    const states = [];
    for (let i = 0; i < s.length - 1; i++) {
        if (s.substring(i, i + 2) === "++") {
            states.push(s.substring(0, i) + "--" + s.substring(i + 2)); // Create a new state by flipping "++" to "--"
        }
    }
    return states;
}
console.log(findMove("++++"));