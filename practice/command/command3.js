#!/usr/bin/env node  
var os=require("os")
// var fs=require("fs");


// var info1=os.cpus();
// var info1=os.hostname() //method returns the hostname of the operating system as a string.
var info1=os.type();

console.log(typeof info1);//return the type of info1.
// console.log(info1.length);//return the size of object
console.log(info1);

// fs.readdirSync(process.cwd())

// var listarray=fs.readdirSync(process.cwd())

// for(var n=0;n<listarray.length;n++){
//     console.log(listarray[n]+" ")
// }



