function joinArrayOfArrays(arr) {
  // your code here
  let concatArr = [].concat(...arr);
  return concatArr;
}
let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']