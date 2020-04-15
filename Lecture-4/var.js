var x=10;
function myfun(){
    console.log(x);//undefined
    var x=20;
    x+=1;
    console.log("line4 "+x);//21
    if(true){
      var x=30;
      x+=1;
      console.log(x);//31
    }
    console.log(x);//31
}

myfun();
console.log("line12 "+ x);//10