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

  
  let b = userInput[1].split(' ');  

// console.log(b);
let rev = b.reverse();
let res=[];
    for(i=0;i<b.length;i++)
{
    if(i!=0){res.push('->')}
    res.push(rev[i])
}

let ans = res.join('');
console.log(ans)

  //end-here
});