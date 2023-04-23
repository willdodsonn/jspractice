function getLengthOfLongestElement(arr) {
    // Your code here
    if(arr.length === 0){
        return 0;
    }
    const longString = arr.reduce((a, b) => b.length > a.length ? b : a)
    return longString.length;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5


// function getLengthOfLongestElement(arr) {
//     // Your code here
//     if (arr.length < 1) return 0
//     else {
//         let aux = 0
//         arr.map(item=> item.length > aux ? aux = item.length : null)
//         return aux;
//     }
// }

// let output = getLengthOfLongestElement(['one', 'two', 'three']);
// console.log(output);