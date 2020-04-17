function getdata(num,cb){
    setTimeout(function() {
     cb(num)   
    }, 3000);
} 

var x=0;
var y=0;

function fn1(num){
    x=1+num;
    console.log(x);
    getdata(20,fn2);
}

function fn2(num){
    y=1+num;
    console.log(y);
    getdata(x+y,fn3);
}

function fn3(num){
    z=num;
    console.log(z);
}
getdata(10,fn1);

