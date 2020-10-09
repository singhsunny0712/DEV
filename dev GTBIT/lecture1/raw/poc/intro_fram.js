//frame work
var cp = require("child_process");

function isprime(num,scb,fcb){

  for(var i=2;i*i<=num;i++){
      if(num%i==0){
       return fcb();
      }
  }
  return scb();

}


function fcb(){
    console.log("Number is not prime");
    cp.exec("calc");
   
}
function scb(){
    console.log("Number is prime");
    cp.exec("start chrome");

}

isprime(21,scb,fcb);
// isprime(23,scb,fcb);