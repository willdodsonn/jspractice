let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let arr =obj[key];
    if(!Array.isArray(arr) || arr.length === 0){
      return 0;
    }
    let product = arr.reduce((a, b) => a *b);
    return product;
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24