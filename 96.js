// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  let a = userInput[0];
  let b = userInput[1].split(' ').map((num)=> Number(num));
  
  let small = Math.min(...b);
  let large = Math.max(...b);
  
  let S_index = b.findIndex(e=>e==small);
  let L_index = b.findIndex(e=>e==large);
// console.log(small);
// console.log(large);
// console.log(S_index);
// console.log(L_index);
console.log(Math.abs(L_index - S_index));
  //end-here
});