function calculateBMI(weight, height) {
    const bmi = weight / (height * height);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
let result = calculateBMI(65, 1.75);
//let result = calculateBMI(45, 1.60);
//let result = calculateBMI(104, 1.45);

console.log(result);