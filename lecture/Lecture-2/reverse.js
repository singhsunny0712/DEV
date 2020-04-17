var log=console.log;
//--------------- question 1 reverse the array

var str=[1,2,3,4,5,6]
var si=str.length
var nstr=[]
for(var n=0;n<si;n++){
  nstr.push(str.pop())
}
log(nstr)