function computeProductOfAllElements(arr) {
  // your code here
  if(arr.length === 0){
    return 0
  }
  let all = arr.reduce((a, b) => a * b);
  return all;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

