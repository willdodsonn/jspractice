function getLargestElement(arr) {
  // your code here
  if(arr.length === 0){
    return 0;
  }
  let large = arr.reduce((acc, large) => {
    return large > acc ? large : acc;
  })
  return large;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;