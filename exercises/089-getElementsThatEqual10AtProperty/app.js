// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    let arr = obj[key]
    if (!Array.isArray(arr)) {
        return []
    }
    const result = arr.filter((element) => element===10);
    return result;
}