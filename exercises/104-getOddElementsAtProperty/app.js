let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    if(Array.isArray(arr) && obj.hasOwnProperty(key)){
      let filtered = arr.filter((num) => num % 2 !==0);
      return filtered;
    }
    return [];
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]