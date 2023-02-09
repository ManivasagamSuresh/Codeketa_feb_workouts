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
  let b = [];
  
  for (i=1;i<=a;i++){
      b.push(userInput[i])
  }
  
  let result = "yes";
  
  for(i=0;i<a;i++){
  if(!/[aeiou]/.test(b[i])){result = "no"; break} 
  }
  
  
 
console.log(result);

// 


  //end-here
});