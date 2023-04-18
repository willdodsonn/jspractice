// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    let arr = obj[key];
    if(!Array.isArray(arr)){
        return [];
    }
    const result = arr.filter((element) => element < 100);
    return result;
}