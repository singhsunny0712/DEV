
var number=[0,0];
var idx=0;
function mynum(n){
    // console.log(n+" "+idx);
    number[idx]=n+number[idx]*10;
    document.getElementById("scre").innerHTML=number[idx];
}

var usedop;
function myop(op){
   if(op=='='){
    var to=0;
      switch(usedop){
          case '+':
              console.log(number[0]+number[1]);
              to=number[0]+number[1];
              break;
          case '-':
            console.log(number[0]-number[1]);
            to=number[0]-number[1];
              break;
          case '*':
            console.log(number[0]*number[1]);
            to=number[0]*number[1];
              break;
          case '/':
            console.log(number[0]/number[1]);
            to=number[0]/number[1];
              break;
      }
    document.getElementById("scre").innerHTML=to;

   }
   else if(op=='c'){
     idx=0;
     number[0]=0;
     number[1]=0;
    document.getElementById("scre").innerHTML=0;
   }
   else{
     idx=idx+1;
     usedop=op;
   }
}