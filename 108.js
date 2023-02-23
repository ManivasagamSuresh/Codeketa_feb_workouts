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

  let a  = userInput[0].split(' ');
//   let b  = userInput[1].split(' ')
//   console.log(a);
  for(var i = 0 ; i < a.length; i++){
      if(a[i]=="and"){
          let l = a[i-1];
          let r = a[i+1];
          a[i-1]=r;
          a[i+1]=l;
      }
  }
  console.log(...a);
  
//   let 



  //end-here
});