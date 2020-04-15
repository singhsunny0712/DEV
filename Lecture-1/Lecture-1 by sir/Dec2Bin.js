var dec=13;
var bin=0;
var p=1;
while(dec>0){
  var f=dec%2;
  bin=bin+f*p;
  dec=Math.floor(dec/2);
  p=p*10;
}
console.log("Number in Binary is "+ bin);