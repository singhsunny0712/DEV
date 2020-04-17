var log=console.log

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
        },
        //key:"I am your key"
}

log(cap.name)
log(cap.movies[1])
log(cap.address.state)

var val=cap[ "Last Name"];//indefined because of Last name not present in the class
log(val)
//loop

// for(var key in cap){
//     log(key+": "+cap.key)
// }
// //variable
// for(var key in cap){
//     log(key+": "+cap[key])
// }

 //log(val)
//delete
// delete cap.sayHi
// log(cap)

