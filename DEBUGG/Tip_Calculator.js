function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return parseFloat(totalAmount.toFixed(2));
}
//let result = calculateTip(90.00, 0.10);
let result = calculateTip(60.75, 0.25);
console.log(result);