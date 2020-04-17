var arr=[10,20,30,40,50];


let fun=function(arr,idx){
    // console.log(arguments)
    if(arr.length==idx){
        return;
    }
     console.log(arr[idx]);
     fun(arr,idx+1);
     arr[idx]=idx;

}


fun(arr,0);

console.log(arr);