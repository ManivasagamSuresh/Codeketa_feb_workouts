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

  let a = userInput[0]  
  let b = userInput[1].split(' '); 
  let c = Number(userInput[2]);
  let ans = [];
  
  for (var i = 0 ;i<b.length;i++){
      if(b[i]%c ==0){
          ans.push(1);
      }else{
          ans.push(0)
      }
  }


console.log(ans.join(' '));

  //end-here
});