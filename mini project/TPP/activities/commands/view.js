let errorhendler=require("../utilities/ErrorHandler.js");

let p=console.log;
module.exports= function() {
    // p(arguments);
    switch(arguments[1]){
        case '-l':
            // p('show folder as list');
            viewAsList(arguments[0]);
            break;
            
        case '-t':
            // p('show folder as tree');
            viewAsTree(arguments[0]);
            break;

        case '-h':
            // p('show folder as history');
            viewAsHistory(arguments[0]);
            break;
        
        default:
            errorhendler.diplaymessage();
            break;
    }
}


function viewAsList(src){
   console.log('view '+src+ ' as a list');
}

function viewAsTree(src){
    console.log('view '+src+ ' as a list');
}

function viewAsHistory(src){
    console.log('view '+src+ ' as a list');
   
}