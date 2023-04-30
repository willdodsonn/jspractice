function getStringLength(string) {
    // your code here
    let count = 0; 
    for(let i = 0; string[i] !== undefined; i++){
        count++
    }
    return count;
}

let output = getStringLength('hello');
console.log(output); // --> 5