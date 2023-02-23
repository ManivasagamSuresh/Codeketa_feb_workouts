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

  let a  = userInput[0].split(' ').map((num)=>Number(num));
  let b  = userInput[1].split(' ').map((num)=>Number(num));
//   console.log(a,b);

let searchN = a[1];
// console.log(searchN);
let res = b.find((ele)=>ele===searchN);
// console.log(res);
if(res){
    console.log("yes")
}else{
    console.log("no")
}

  //end-here
});