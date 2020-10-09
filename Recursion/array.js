var arr=[10,20,30,40,50];
var brr=[10,20,10,10,30,40,50];



let fun=function(arr,idx){
    // console.log(arguments)
    if(arr.length==idx){
        return;
    }
     console.log(arr[idx]);
     fun(arr,idx+1);
     arr[idx]=idx;

}


let all=function(arr,idx,data,c){

    // console.log(c);
    if(idx==arr.length){
        console.log(c);
        return;
    }

    if(arr[idx]==data){
        c.push(idx);
    }

    all(arr,idx+1,data,c);
}


// fun(arr,0);

// console.log(arr);
var c=[];
// c.push(1);
// console.log(c);
all(brr,0,10,c)