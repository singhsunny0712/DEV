var log=console.log

var mystring=" I am a string "
log(mystring)

var another='I am also a string '
log(another)  


var trimmedString=another.trim();//remove the white space
log(mystring+trimmedString)

//split=>split tp string Array
var sArr=another.split(" ");
log(sArr)

//join=> sarr to string
log(sArr.join("+"))
