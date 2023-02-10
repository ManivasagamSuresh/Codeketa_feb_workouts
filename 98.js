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

  let i = userInput[0].split(' ').map((num)=>Number(num));
  
  
//   console.log(i);
  
  
  let a = i[0];
  let b = i[1];
  let x = i[2];
  
  let y = (a*x)+b;
  console.log(y);
  

  //end-here
});