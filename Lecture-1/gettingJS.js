var log=console.log

//non primitive =>function,array,object
//function
function satHI(name){
    log("hi "+name)
}
//arrays=>collection of anything
var arr=[
    1,1.1,
    true,false,
    undefined,
    function sayhi(){
        log("hi say")
    },
    "i am string",
    [1,2,3,4,5]
]

//object=>key:value pair

var cap={
    name:"sunny",
    LastName:"singh",
    age:22,
    movie:["civil war","winter soldier","Avenger"],
    adress:{
        city:"newyork",
        state:"manhatten"
    },
    sayHI:function(){
        log("hi from steve");
        return undefined
    }

}
//property=>object=>value