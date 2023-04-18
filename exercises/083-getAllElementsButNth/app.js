function getAllElementsButNth(array, n) {
    // Write your function here
    return array.filter((el, index) => index !== n);
}
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']