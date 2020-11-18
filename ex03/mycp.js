const fs = require ("fs");
const path = require ("path");

const copyFile = () => {
    if (process.argv[2] === "-r") {} else {
        const read = fs.createReadStream(process.argv[2]);
        const write = fs.createWriteStream(process.argv[3]);
        read.pipe(write);
    }
}
copyFile()


var fss = require("fs-extra");
 
var source = 'dir1'
var destination = 'dir2'
 
// copy source folder to destination
fss.copy(source, destination, function (err) {
    if (err){
        console.log('An error occured while copying the folder.')
        return console.error(err)
    }
    console.log('Copy completed!')
});
