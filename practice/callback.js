var show=function(){
	console.log("I am Show Function");
}

function singh(a,first){
	console.log("I am 1st "+a);
	// first();
	
}

singh(20,function(){
	console.log("I am Show Function1");
	show();
});