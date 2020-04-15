var fs=require("fs");
var writer=fs.createWriteStream("big.txt");
for(var i=0;i<1000000;i++){
    writer.write(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem quis quos mollitia ab, nostrum aliquid incidunt cum, illum adipisci distinctio, voluptate eveniet ullam voluptatum porro corrupti illo non rerum numquam hic  cupiditate veritatis. Amet, cum dignissimos eveniet et fugit"    
    );
}