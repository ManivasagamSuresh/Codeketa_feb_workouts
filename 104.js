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
  let b = a.split(''); 

let add = 0;
let mul = 1;

for(var i = 0 ;i<b.length;i++){
    add= Number(add)+Number(b[i]);
    mul=mul*b[i];
}
let ans = add+mul;
if(ans == a){
    console.log("Great")
}else{
    console.log("no")
}

    

  //end-here
});