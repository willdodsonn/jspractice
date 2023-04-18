function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  let firstHalf = arr1.concat(arr2);
  let fullArray = firstHalf.concat(arr3);
  return fullArray;
}