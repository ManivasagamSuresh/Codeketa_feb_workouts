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

  
  let a = userInput[0].split('');
  let b = [];
  let c = [];
  
  for(var i = 0 ; i < a.length ; i++){
    let   l = a[i].toLowerCase();
     if( /[aeiou]/.test(l)){
         b.push(a[i]);
     }else{
         c.push(a[i]);
     }
  }
 
// console.log(b);
// console.log(c);
let result = [...b,...c];
console.log(result.join(''))

  //end-here
});