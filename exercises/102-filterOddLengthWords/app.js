function filterOddLengthWords(words) {
    // your code here
    let filtered = words.filter((word)=> word.length % 2 !==0);
    return filtered;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']