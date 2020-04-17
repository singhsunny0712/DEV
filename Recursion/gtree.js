
function display(node){
   let str=node.data+"->";
   for(var i=0;i<node.children.length;i++){
       let child=node.children[i];
       str+=child.data  +",";
   }
   console.log(str+".");
   for(var i=0;i<node.children.length;i++){
      display(node.children[i]);
   }
}

function height(){

}


var root={
    data:10,
    children:[{
        data:20,
        children:[{
            data:50,
            children:[]
        },{
            data:60,
            children:[]
        }]
    },{
        data:30,
        children:[{
            data:70,
            children:[]
        },{
            data:80,
            children:[{
                data:110,
                children:[]
            },{
                data:120,
                children:[]
            }]
        },{
            data:90,
            children:[]
        }]
    },{
        data:40,
        children:[{
            data:100,
            children:[]
        }]
    }]
}

display(root);