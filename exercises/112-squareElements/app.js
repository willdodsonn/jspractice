function squareElements(arr) {
  // your code here
 let squared = arr.map((num) => num*num)
  return squared;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]