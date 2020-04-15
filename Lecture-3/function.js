//---------function treat as variable in JS----------
//function statement
function sayHi(){
    console.log("hi all")
}
sayHi();

//function expression
var add=function sum(x,y){//here sum name of the function is optional
    return x+y;
}
/*//we write same as
var add=function (x,y){//here sum name of the function is optional
    return x+y;
}

*/
console.log(add(3,4))
console.log(add(3,6))