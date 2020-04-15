function getData(num,cb){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(num);
        },1000);
    })
    
}
var temp;
async function helper(){
    var p10 = getData(10);
    var p30 = getData(30);
    var 

}


