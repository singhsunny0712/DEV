var arr=[1,2,3,4,5]

function multiplier(n1,n2){
    return n1*n2
}

function mul(arr,fn){
    var temp=1;
    for(var n in arr){
       temp=fn(arr[n],temp)
    }
    return temp
}

console.log(mul(arr,multiplier))
console.log(arr)
// console.log(multiplier("i am",2))//output := NaN

//--------same as work with reduce function in JS------

console.log("---same---")
function multiplier(n,temp1){
    return n*temp1
}



var darr=arr.reduce(multiplier);
console.log(darr);
console.log(arr);