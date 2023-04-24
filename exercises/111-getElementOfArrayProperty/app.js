let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    // your code here
    let arr = obj[key];
    if(Array.isArray(arr) && obj.hasOwnProperty(key)){
        return arr[index];
    }
    return undefined;
}