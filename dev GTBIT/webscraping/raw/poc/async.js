let fs=require("fs");
console.log("before");


fs.readFile("f1.txt",callback);//async read file 

function callback(err,content){
    
    console.log("content"+content);
    console.log("after cb");
}

console.log("After");
console.log("I can do nay other thing");
