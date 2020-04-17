function greeter(variable){
    return "Hi"+variable;//if we return type not use,then by default undefined
}

// console.log(greeter(4));
// console.log(greeter("I am String"));

console.log(greeter(function(){//variable =>"I am also a variable"
    return "I am also a variable"
}))