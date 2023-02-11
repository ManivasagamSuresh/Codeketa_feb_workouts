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
  let b = userInput[1].split(' ');
  let c = userInput[2].split(' ');
  
  let r = b.reverse();
  
// console.log(r);


let left = r.join('');
let right = c.join('');

// console.log(left);
// console.log(right);

if(left == right){
    console.log("yes")
}else{
    console.log("no");
}

  //end-here
});