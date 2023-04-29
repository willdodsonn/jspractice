function computeSumOfAllElements(arr) {
  // your code here
  let sum = arr.reduce((num1, num2)=> num1+num2);
  return sum;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6