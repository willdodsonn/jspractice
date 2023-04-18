// Write your function here
const getAverageOfElementsAtProperty = (obj, key) => {
    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
        return 0;
    }
   let avg =  obj[key].reduce((a, b) => a + b, 0) / obj[key].length;
   return avg;
}