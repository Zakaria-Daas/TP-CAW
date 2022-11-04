// Make sure we got a filename on the command line.
if (process.argv.length < 4) {
    console.log('Usage: node  ' + process.argv[1] + '  TEXT  FILENAMES');
    process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs'), textToSearch = process.argv[2];
for (var i = 3; i < process.argv.length; i++) {
    let filename = process.argv[i];
    fs.readFile(filename, 'utf8', function(err, data) {
        if(err) {
            return console.log(err);
        }
        if (data.includes(textToSearch)) {
            console.log(filename);
        }
    });
}