// Print
var log=console.log;
// console.log("Hi all:)");
// dynamically typed
// primitive ds=> number ,string,undefined,null,boolean 
// log(val);
 var val=1;
    val=1.1;
    val ="steve"
    val=true
    val=null
// log(val);    
  // for(var i=1;i<=10;i++){
  //   log("Number is "+i);
  // }
  // Non primitives=> functions ,arrays , objects
  // function 
    function sayHi(Name){
      log("Hi "+ Name);
    }
    // sayHi("Steve");
// arrays=> collection of anything
    var arr=[
      1,1.1,
      true,false,
      undefined,
      function sayHi(){
        log("Hi steve")
      },
      "I am a string",
      [1,2,3,4,5]
    ]
  
    // arr[5]();

    // object=> key :value pair 
    var cap={
      name:"Steve",
      LastName:"Rogers",
      age:105,
      movies:["civil war","Avengers","Winter soldier"],
      address:{
        city:"NewYork",
        state:"Manhatten"
      },
      sayHi:function (){
        log(" Hi from steve");
        return undefined;
      }
    }

// property=> object =>values=> properties 
// methods=>functions => methods
    // log(cap.name);
    // log(cap.address.state);
    // log(cap.movies[2]);
    log(cap.sayHi())
    // log(cap);
