function getLongestElement(arr) {
    // your code here
    if(arr.length === 0){
        return '';
    }
    
    let bigWord = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > bigWord.length){
            bigWord = arr[i];
        }
    }
    return bigWord;
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'