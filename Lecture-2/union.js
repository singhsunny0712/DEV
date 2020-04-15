//-------------question 2 union array

var log=console.log;
var str=[1,2,3,4,5,6]
var str1=[5,6,7,8,9]

log(str)
log(str1)

for(var i=0;i<str1.length;i++){
    if(!str.includes(str1[i])) 
      str.push(str1[i]) 
}
log(str)
log("new union array : "+ str)//concat