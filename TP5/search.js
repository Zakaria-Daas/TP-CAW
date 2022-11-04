// Make sure we got file/directory names on the command line.
if (process.argv.length < 4) {
    console.log('Usage: node  ' + process.argv[1] + '  TEXT  FILE/DIRECTORY_NAMES');
    process.exit(1);
}

// Declare variables
const glob = require("glob"), fs = require("fs"), textToSearch = process.argv[2];

// Function to get files in a directory
var getDirectories = function (src, callback) {
    glob(src + '/**/*', callback);
};

// Read the files and print their contents.
for (var i = 3; i < process.argv.length; i++) {
    let filename = process.argv[i];
    // If this argument provided on the command line is a directory
    if (fs.lstatSync(filename).isDirectory()) {
        // Note: the following function will not accept paths with \ since it's an escape character in js
        getDirectories(filename, function (err, res) {
            if (err) {
                console.log('Error', err);
            } else {
                for (f of res) {
                    const file = f;
                    if (fs.lstatSync(f).isFile()) {
                        fs.readFile(f, 'utf8', function(err, data) {
                            if(err) {
                                return console.log(err);
                            }
                            if (data.includes(textToSearch)) {
                                console.log(file);
                            }
                        });
                    }
                }
            }
        });
    }
    // Else
    else {
        fs.readFile(filename, 'utf8', function(err, data) {
            if(err) {
                return console.log(err);
            }
            if (data.includes(textToSearch)) {
                console.log(filename);
            }
        });
    }   
} 

