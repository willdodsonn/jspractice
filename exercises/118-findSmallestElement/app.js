//does the same thing!!

function findSmallestElement(arr) {
    // your code here
    if(arr.length === 0){
        return 0;
    }
    let smallest = arr[0];
    let small = arr.filter((num)=>num < smallest);
    return small;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

// function findSmallestElement(arr) {
//     // your code here
//     let aux = 9999999999;
//     if (arr.length < 1) return 0;
//     for (let e of arr) {
//       if (e < aux) aux = e;
//     }
//     return aux;
//   }
  
//   let output = findSmallestElement([4, 1, 9, 10]);
//   console.log(output);