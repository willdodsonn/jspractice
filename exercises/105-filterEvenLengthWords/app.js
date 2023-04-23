function filterEvenLengthWords(words) {
    // your code here
    let filtered = words.filter((word) => word.length % 2 === 0);
    return filtered;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']