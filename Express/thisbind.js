
let cap={

    name:"Steve",
    getName:function(){
        console.log(this);
    }


}

var mygetname=cap.getName.bind(cap);
cap=null;
mygetname();