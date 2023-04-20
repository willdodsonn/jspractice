// Write your function here
function getNthElementOfProperty(obj, key, num) {
    let arr = obj[key]
    if (Array.isArray(arr) && obj.hasOwnProperty(key)) {
        if (arr.length >= num + 1) {
            return arr[num]
        }
    }

    return undefined;
}