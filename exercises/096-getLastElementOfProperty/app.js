// Write your function here
function getLastElementOfProperty(obj, key){
    const arr = obj[key];
    if(Array.isArray(arr) && obj.hasOwnProperty(key)){
        return arr[obj[key].length - 1];
    }
    return undefined;
}