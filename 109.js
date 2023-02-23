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

  let a  = userInput[0].split('');
  let b  = userInput[1].split('')
  let c = a.concat(b);
  
//   console.log(c);
  
  if(c.length === 26){
      let filtered = c.filter((item,index)=>{
          c.splice(index,1);
          const unique = c.includes(item);
          c.splice(index,0,item);
          return unique;
          
      })
    //   console.log(filtered);
      if(!filtered[0]){
              console.log("yes")
          }else{
              console.log("no")
          }
      
  }else{
      console.log("no")
  }
  
  
//   console.log(...a);
  
//   let 



  //end-here
});