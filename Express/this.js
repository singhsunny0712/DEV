"use strict"

// node JS
console.log(this);
function myfun(){
    console.log(this=== global);
}

const cap={
    name:"Steve",
    getName:function(){
        console.log(this === global);
        // console.log(global);
        function innerfun(){
            console.log(this=== global);
        }
        innerfun();
    }
}

// global
myfun();

// object
cap.getName();