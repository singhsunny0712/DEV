function fact(a){
    if(a==1 || a==0){
        return a;
    }
    var temp=a-1;
    var temp1=a-2;
    console.log(a);
    var s1=fact(temp);
    var s2=fact(temp1);
    return s1+s2;

}
console.log(fact(5));