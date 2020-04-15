var arr=[5,8,14,17,23,6,8]

function include(n){
    return (n%2!=0)
}

function odd(arr,fn){

    var narr=[];
    for(var n in arr){
      if(fn(arr[n]))
       narr.push(arr[n]);
    }
    return narr;
    
    }
    
    console.log(odd(arr,include))
    console.log(arr)

//--------same as work with filter function in JS------

  console.log("-----same----")  
function include(n){
    return (n%2!=0)
}
    
var arr=[5,8,14,17,23,6,8]

var darr=arr.filter(include)
console.log(darr)
console.log(arr)