function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let arr = obj[key];
  if (Array.isArray(arr) && obj.hasOwnProperty(key)) {
    const sum = arr.reduce((a, b) => a + b);
    const average = sum / arr.length;
    return average;
  }
  return 0;
}

//using reduce makes life easier!!! the above function returns the same answer!

// function getAverageOfElementsAtProperty(obj, key) {
//   if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
//     return 0;
//   }

//   let sum = 0;

//   for (let i = 0; i < obj[key].length; i++) {
//     sum += obj[key][i]
//   }

//   return sum / obj[key].length;
// }