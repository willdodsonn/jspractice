// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    
    if (!Array.isArray(obj[key]) || !obj[key] > 10) {
        return [];
    }
    let element = obj[key];
    return element.filter((el) => el > 10)
}