// function b(){
//     var myvar;
//     console.log(myvar);
//     // console.log(myglobalVar);
// }
// function a(){
//     var myvar=2;
//     b();
//     console.log(myvar);

// }
// //---In which ouputt:-1 ,undefined,2,1,


var myglobalVar=14;
function a(){
    var myvar=2;
    b();
    console.log(myvar);
    function b(){
    console.log(myvar);
    console.log(myglobalVar);
}
}
//1 2 14 2 1

var myvar=1;
console.log(myvar);
a();
console.log(myvar);