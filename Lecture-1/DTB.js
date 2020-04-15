var val=13;
var bin=0
var p=1;
while(val>0){
    var f=val%2;
    bin=bin+f*p;
    val=Math.floor(val/2);
    p=p*10;
}

console.log("Number in Binary is "+bin)

//decimal to binary