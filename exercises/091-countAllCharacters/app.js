// Write your function here
function countAllCharacters(str){
    let newObj = {};
    for(let i = 0; i < str.length; i++){
        const char = str[i];
        if(newObj[char]){
            newObj[char]++
        } else {
            newObj[char] = 1;
        }
    }
    return newObj;
}