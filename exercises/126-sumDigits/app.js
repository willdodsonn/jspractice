function sumDigits(num) {
//     // your code here
     let digits = Math.abs(num).toString();
     let sum = 0;
     for(let i = 0; i < digits.length; i++){
          let parsed = parseInt(digits[i]);
          i === 0 && num < 0 ? sum -= parsed : sum +=parsed;
     }
     return sum;
}
  

let output = sumDigits(316);
console.log(output); // --> 4