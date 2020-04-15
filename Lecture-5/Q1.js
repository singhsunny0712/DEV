function getName(name,cb){
setTimeout(function(){cb(name)},2000); 
}


function sayHi(name){
    console.log("Hi "+name) 
}

function sayHi1(name){
    console.log("U are sexy "+name) 
}

getName("steve",sayHi)
getName("steve",sayHi1)