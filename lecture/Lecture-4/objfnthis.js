var cap={
    name:"I am Object",
    getThis:function(){
        console.log("Object");
        console.log(this);
    }
};

function fnThis(){
    console.log("function");
    //global object
    console.log(this==global);
}

console.log("Global");
console.log(this);
//function call-> global object
fnThis();
//method call=>Object that has been passed
cap.getThis();