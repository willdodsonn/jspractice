let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let arr = obj[key];
    if(!Array.isArray(arr) || !key in obj || arr.length === 0){
        return 0;
    }
    let added = arr.reduce((a, b) => a + b);
    return added;
}

let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13