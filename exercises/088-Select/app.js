// Write your function here
function select(arr, obj){
    let newObj = {};
    for(let i =0; i < arr.length; i++){
        const key = arr[i];
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key]
        }
    }
    return newObj;
}