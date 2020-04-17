// function buildFunction(){

//     var arr=[];
//     for(var i=0;i<3;i++){
//         arr.push(
//             function(){
//             console.log(i);
//            }
//         )
//     }
//     return arr;
// }
// var fn=buildFunction();
// console.log(fn);
// fn[0]();
// fn[1]();
// fn[2]();

//------Immediately Invoked Function Expression-------
function buildFunction(){
    var arr=[];
    for(var i=0;i<3;i++){
        arr.push(
            function(){
            console.log(i);
            return "hey bae!";
           }()
        )
    }
    return arr;
}

var fn=buildFunction();
console.log(fn);
fn[0];
fn[1];
fn[2];