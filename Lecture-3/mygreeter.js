

function getFirstName(name){
    var sarr=name.split(" ");
     console.log(sarr);
     return sarr[0];
}

function getLastName(name){
    return name.split(" ")[1];
}
 function greeter(fullName,fn){

    var greet=fn(fullName);
    console.log("Hi"+greet);
 }

 greeter(" steve Rogers",getFirstName);
 greeter(" steve Rogers",getLastName);

 //question

 function sum(a,b){
     return a+b
 }

 function diff(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}

function multiwork(x,y,fn){
    console.log(fn(x,y))
}

multiwork(4,3,sum)
multiwork(4,3,diff)
multiwork(4,3,mul)
