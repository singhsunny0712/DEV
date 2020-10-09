let arr=[1,2,3,4,5];

function fun(n){
    if(n%2==0) return n-1;
    return n+1;
}


function isPrime(num) {
    if (num <= 1)
        return false;
    else if (num === 2)
        return true;
    else {
        for (let i = 2; i < num; i++)
            if (num % i === 0)
                return false;
        return true;
    }
}

let marr=arr.map(fun);
let farr=arr.filter(isPrime);

console.log(arr);
console.log("==============");
console.log(marr);
console.log("==============");
console.log(farr);
