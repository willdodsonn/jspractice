function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tipped = preTaxAndTipAmount * 0.15;
    let taxed = preTaxAndTipAmount * 0.095;
    return preTaxAndTipAmount + tipped + taxed;
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9