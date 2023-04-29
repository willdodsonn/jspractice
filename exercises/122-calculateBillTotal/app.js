function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    const tip = 0.15
    const salesTax = 0.095;
    
    let tipped =  preTaxAndTipAmount * tip;
    
    return tipped * salesTax;
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9