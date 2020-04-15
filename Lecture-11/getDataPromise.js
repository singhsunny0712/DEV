function getData(num,cb){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(num);
        },1000);
    })
    
}
var temp;
var p10 = getData(10);
var p30 = getData(30);
promise.then(function(num1){
    var x = 1 + num1;
    temp=x;
    console.log(x);
    return p30;
}).then(function(num2){
    var y = 1 + num2;
    console.log(y);
    var promise = getData(temp + y);
    return promise;
}).then(function(ans){
    console.log(ans);
})

