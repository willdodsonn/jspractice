function findShortestElement(arr) {
    // your code here
    if (arr.length === 0) {
        return '';
    }
    
    let small = arr.reduce((acc, short) => {
        return acc.length < short.length ? acc : short
    }, arr[0])
    return small;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'