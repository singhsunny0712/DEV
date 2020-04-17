var os=require("os")
var fs=require("fs");
//multiple inputs
//console.log(process.argv.slice(2));
//Single Input
//console.log(process.argv[2])
//console.log(os.cpus())

// var folderName=process.argv[2];
// if(folderName!=undefined){
//     if(fs.existsSync(folderName)==false){
//         fs.mkdirSync(folderName);
//     }else{
//         console.log("Folder already exits")
//     }
// }else{
//     console.log("Please enter any input");
// }
// console.log(folderName)


for(var i=1;i<=20;i++){
    var folderName="Lecture"+i;  
if(folderName!=undefined){
    if(fs.existsSync(folderName)==false){
        fs.mkdirSync(folderName);
    }else{
        console.log("Folder already exits")
    }
}else{
    console.log("Please enter any input");
}
}