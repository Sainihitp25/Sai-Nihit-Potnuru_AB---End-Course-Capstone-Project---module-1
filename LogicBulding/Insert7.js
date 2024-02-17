function insert7(str) {
    let modifiedStr = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
            modifiedStr += str[i];
            if (count % 6 === 0) {
                modifiedStr += "7";
            }
        } else {
            modifiedStr += " ";
        }
    }
    return modifiedStr;
}

console.log(insert7("Hello W7orld an7d Unive7rse!"));
module.exports = { insert7 };