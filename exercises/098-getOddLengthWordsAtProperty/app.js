// Write your function here
function getOddLengthWordsAtProperty(obj, key){
    const arr = obj[key];
    if(Array.isArray(arr) && obj.hasOwnProperty(key)){
        let words = arr;
       return words.filter((word) => word.length % 2 !==0)
    }
    return [];
}