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

  let inp = userInput[0].split(' ');
  let k = Number(inp[1]);
//   let c = 0 ;
  let s = inp[0].split('');
//   console.log(s.length);
  if(k == 0){
    console.log(s.join(''))
  }else{
      for (var i=k-1;i<s.length;i=i+k){
     let c = s[i].toUpperCase();
    s[i]=c;
  }
  console.log(s.join(''));
  }
  
  
  

  //end-here
});