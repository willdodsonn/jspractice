let age = 21;
function checkAge(name, age) {
  // your code here
  // if(age < 21){
  //   console.log(`Go home ${name}`)
  // } else {
  //   console.log(`Welcome ${name}`)
  // }
  if(age < 21) return `Go home, ${name}!`
  else return `Welcome, ${name}!`
}

let output = checkAge('Adrian', 22);
console.log(output);