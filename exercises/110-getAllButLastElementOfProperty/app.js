let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let arr = obj[key];
    if(!arr || !Array.isArray(arr) || arr.length < 1){
      return [];
    }
    if(Array.isArray(arr) && obj.hasOwnProperty(key)){
      arr.pop();
      return arr;
    }
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]