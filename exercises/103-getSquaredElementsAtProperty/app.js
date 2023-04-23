let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    if(Array.isArray(arr) && obj.hasOwnProperty(key)){
     let squared =  arr.map((num)=>num * num);
     return squared;
    }
    return [];
}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]