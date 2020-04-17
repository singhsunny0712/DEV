
function pd(n){
    if(n==0){
        return;
    }
    console.log(n);
    pd(n-1);
    console.log(n);
}


pd(5);