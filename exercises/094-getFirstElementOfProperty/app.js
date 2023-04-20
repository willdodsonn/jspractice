// Write your function here
function getFirstElementOfProperty(obj, key){
    let arr = obj[key];
    if(!obj.hasOwnProperty(key) || !Array.isArray(arr)){
        return undefined;
    }
    return arr[0];
}