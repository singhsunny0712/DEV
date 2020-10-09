// key: value pair
// JSON=> JS object Notation

let cap={
    name:"steve",
    lastname:"roger",
    age:45,
    address:{
        state:"New York",
        region:"Manhatten"
    },
    isAvenger:true
}


// GET
console.log(cap.name);  
// ==============

// intesert
console.log(cap);
cap.newkey="I am new key";
console.log("----------------");
console.log(cap);

// ===========delete=====
console.log("----------------");
delete cap.isAvenger;
console.log(cap);