//color
var chalk=require("chalk");
//front

var figlet=require("figlet");
var log=console.log;

log(chalk.green(" I am Sunny Singh"));
log(chalk.cyan(" I am Sunny Singh"));
// log(chalk.pink(" I am Sunny Singh"));
log(chalk.magenta(" I am Sunny Singh"));
log(chalk.yellow(" I am Sunny Singh"));
log(chalk.yellow(figlet.textSync("Singh")));