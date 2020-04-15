#!/usr/bin/env node
var os=require("os")
var fs=require("fs");
var folderName="sunny";
if(folderName!=undefined){
    if(fs.existsSync(folderName)==false){
        fs.mkdirSync(folderName);
    }else{
        console.log("Folder already exits")
    }
}else{
    console.log("Please enter any input");
}
// console.log(folderName)