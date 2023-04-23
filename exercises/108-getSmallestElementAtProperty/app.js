let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    if(!arr || !Array.isArray(arr) || arr.length < 1){
      return [];
    }
    if(Array.isArray(arr) && obj.hasOwnProperty(key)){
      let smallNum = arr.reduce((a, b) => {
        return b < a ? b : a;
      });
      return smallNum;
    }
    return [];
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1