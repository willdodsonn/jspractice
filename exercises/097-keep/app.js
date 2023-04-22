// Write your function here
function keep(array, num){
    let keepArray = [];
    for (let i = 0; i < array.length; i++){
        let keep = array[i];
        if(keep === num){
            keepArray.push(keep)
        }
    }
    return keepArray;
}