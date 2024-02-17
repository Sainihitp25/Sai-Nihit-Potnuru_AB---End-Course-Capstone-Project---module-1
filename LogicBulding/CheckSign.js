function checkSign(num1, num2, num3) {
    let positiveCount = 0;
    let negativeCount = 0;
  
    if (num1 > 0) positiveCount++;
    if (num2 > 0) positiveCount++;
    if (num3 > 0) positiveCount++;
  
    negativeCount = 3 - positiveCount;
  
    if (positiveCount === 3) return "+++";
    if (positiveCount === 2) return "++-";
    if (positiveCount === 1) return "+--";
    if (positiveCount === 0) return "---";
  }

  console.log(checkSign(1, 2, 3));
  console.log(checkSign(1, 2, -3));
  console.log(checkSign(1, -2, -3));
  console.log(checkSign(-1, -2, -3));