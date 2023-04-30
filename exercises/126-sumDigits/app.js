function sumDigits(num) {
//     // your code here

    let sum = 0;
    while (num !== 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  

let output = sumDigits(316);
console.log(output); // --> 4