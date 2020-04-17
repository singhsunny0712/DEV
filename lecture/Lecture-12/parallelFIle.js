var ajax = require("../Lecture-12/lib/filedownload");
//***************************************
var files = ["file1", "file2", "file3"];
var tracker={};
function getFile(file) {
    return new Promise(function(resolve, reject){
        ajax.fakeAjax(file,function(data){
            resolve(file);
        });
    });
}
// request all files at once in "parallel"sadwaax
//print as soon as you receive them
// print them in seqential order


async function helper(){

var promise1 = getFile("file1");
var promise2 = getFile("file2");
var promise3 = getFile("file3");
console.log(await promise1);
console.log(await promise3);
console.log(await promise3);
}

helper();

// var p2value = promise1.then(function(data1){
//     console.log(data1);
//     return promise2;
// })
// var p3value = p2value.then(function(data2){
//     console.log(data2);
//     return promise3;
// })
// p3value.then(function(data3){
//     console.log(data3);
// })

// promise1.then(function(data1){
//     console.log(data1);
//     return promise2;
// }).then(function(data2){
//     console.log(data2);
//     return promise3;
// }).then(function(data3){
//     console.log(data3);
// })


