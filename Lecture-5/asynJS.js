// before

console.log("I was called before setTimeout");

setTimeout(sayHi,2000);
function sayHi(){
    console.log("H steve")
}

console.log("I was called after setTimeout")

while(true){
    console.log(" I am infinite");
}