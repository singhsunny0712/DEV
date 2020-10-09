// array is like an object => and we add prototype as parent of children of all array
Array.prototype.sum=function(){

    let sum=0;
    for(let i=0;i<this.length;i++){
        sum+=this[i];
    }
    return sum;
}

let arr=[10,20,30];

// console.log(arr.sum());

// ========================================================================


Array.prototype.mymap=function(cb){
    let narr=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])==true) {
            narr.push(this[i]+1);
        }else{
            narr.push(this[i]-1);
        }
    }
    return narr;
}

let brr=[1,2,3,4,5];

function transform(n){
    if(n%2==0) return true;

    return false;
}

console.log(brr.mymap(transform));




