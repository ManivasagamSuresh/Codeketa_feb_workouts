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
  let r = [2];
  let add = 2;
  
  
  for (var i = 3; i<20 ;i++){
    var isPrime =true
    for(var j =2;j<i;j++){
        if(i % j ==0){
          isPrime = false;
           break; 
        }
        
    }
    if(isPrime){
         add=add+i
        r.push(add);
        
    }
    if(r.length == a){break}
  }
  console.log(...r);
    

  //end-here
});