function filterOddElements(arr) {
  // your code here
  let filtered = arr.filter((num) => num % 2 !==0);
  return filtered;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]