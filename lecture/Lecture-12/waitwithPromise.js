function waitfor2Seconds(){
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Retured after 2 Second");
    },2000);
});

}

function waitfor3Seconds(){
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Retured after 3 Second");
    },3000);
});

}






console.log("Before");
async function helper(){
    var promise=waitfor2Seconds();
    var promise1=waitfor3Seconds();
    var ans=await promise;
    console.log("Middle");
    var ans1=await promise1;
    console.log(ans);
    console.log(ans1);
    console.log("After");
}

helper();