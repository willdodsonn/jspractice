
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    if(Array.isArray(arr) && obj.hasOwnProperty(key)){
      let filtered = arr.filter((num) => num % 2 ===0);
      return filtered;
    }
    return [];
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]