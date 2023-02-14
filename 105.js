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

  let a = Number(userInput[0]);
  let r = 0;
  
  for (var i = 0; i<a ;i++){
        for(var j=0;j<a;j++){
            let sum = i+j;
            if(sum==a){
                r++;
            }
        }
  }
  console.log(r);
    

  //end-here
});