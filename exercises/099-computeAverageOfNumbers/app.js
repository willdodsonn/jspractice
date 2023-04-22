// Write your function here !
function computeAverageOfNumbers(arr){
    if(arr.length === 0){
        return 0
    }
    const sum = arr.reduce((a,b)=> a + b);
    return sum / arr.length;
}