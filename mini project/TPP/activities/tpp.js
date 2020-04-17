var p=console.log;
let view=require("./commands/view.js");
let untreefy=require("./commands/untreefy.js");
let treefy=require("./commands/treefy.js");
let monitor=require("./commands/monitor.js");
let help=require("./commands/help.js");
let errorhendler=require("./utilities/ErrorHandler.js");



switch(process.argv[2]){//process argv used to taking command line argument
    case 'view':
        // p('handle view functionality');
        view(process.argv[3],process.argv[4]);
        break;
    case 'untreefy':
        // p('handle view functionality');
        untreefy(process.argv[3],process.argv[4]);
        break;

    case 'treefy':
        // p('handle view functionality');
        treefy(process.argv[3],process.argv[4]);
        break;

    case 'monitor':
        // p('handle view functionality');
        monitor(process.argv[3],process.argv[4]);
        break;

    case 'help':
        // p('handle view functionality');
        help();
        break;

    default:
        errorhendler.diplaymessage();
        break;
}


// tpp [ view  src -l]//[required arguments]
// tpp [ view  src -h]
// tpp [ view  src -t]
//tpp  [treefy src desti]
//tpp  [untreefy src desti]
//tpp  [monitor src log.json]
//tpp help