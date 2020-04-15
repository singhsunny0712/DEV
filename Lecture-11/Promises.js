var ok = false;
var randomDelay = (Math.round(Math.random() * 1e4) % 8000)+ 1000;
function giveMeBurger(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(ok){
                resolve("Chesse Burger");
            }
            else{
                reject("No more Burgers available :(")
            }
        }, randomDelay);
    });
}
//wrapper for future value
var promise = giveMeBurger();
//promise ->resolve -> then
//promise -> reject -> catch
console.log("line 19");
console.log(promise);
var valuefrompromise = promise
    .then(function(Burger){
        console.log("line 23");
        console.log(promise);
        console.log(Burger);
        console.log("Share with my friends");
        return "something";
    })
    .catch(function(err){
        console.log("line 29");
        console.log(promise)
        console.log(err);
        console.log("Let's go to subway");
        return new Promise(function(resolve, reject){
            reject("Rejected from catch");
        })
    });
console.log("line 38");
console.log(valuefrompromise);
valuefrompromise
    .then(function(data){
        console.log(valuefrompromise);
        console.log(data);
    })
    .catch(function(data){
        console.log(data);
    });