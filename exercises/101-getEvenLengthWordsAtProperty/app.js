let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    const arr = obj[key];
    if(Array.isArray(arr) && obj.hasOwnProperty(key)){
      let words = arr;
      let filtered = words.filter((word)=> word.length % 2 === 0);
      return filtered;
    }
    return [];
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']