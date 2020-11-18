const readline = require('readline')
const fs = require('fs');


if(process.argv.length == 2){
    
    const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
} ) ;
    rl.on( "line", imput => {
        console.log(`${imput}`);
        rl.close();
    });}
    else if (process.argv.length === 3){
    const readInterface = readline.createInterface({
        input: fs.createReadStream('simple-file.txt'),
        output: process.stdout,
        console: false
    });
    readInterface.on('line', function(line) {

    });
}