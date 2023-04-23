let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    if(!arr || !Array.isArray(arr) || arr.length < 1){
      return [];
    }
    if(Array.isArray(arr) && obj.hasOwnProperty(key)){
      let largeNum = arr.reduce((a, b) =>{
        return b > a ? b : a;
      }, arr[0])
      return largeNum
    }
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4