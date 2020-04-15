var arr=[1,2,3,4,5,6]

function doublet(n){
    return 2*n
}

function tran(carr,fn){

var narr=[];
for(var n in carr){
   narr.push(fn(carr[n]))
}
return narr;

}

console.log(tran(arr,doublet))
console.log(arr)

 //--------same as work with map function in JS------

 console.log("--------same-----")
 function doublet2(n){
     return 2*n
    }
    
var arr=[1,2,3,4,5,6]

var darr=arr.map(doublet2)
console.log(darr)
console.log(arr)



