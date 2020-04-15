#!/usr/bin/env node  
var os=require("os")
var fs=require("fs");
//path of actual code exist =>js
//console.log(_dirname)
//path where JS file called
fs.readdirSync(process.cwd())

var listarray=fs.readdirSync(process.cwd())

for(var n=0;n<listarray.length;n++){
    console.log(listarray[n]+" ")
}



