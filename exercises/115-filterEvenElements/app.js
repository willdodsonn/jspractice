function filterEvenElements(arr) {
    // your code here
    let even = arr.filter((num) => num % 2 === 0);
    return even;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
