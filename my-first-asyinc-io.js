const file = process.argv[2];
const fs = require('node:fs');

fs.readFile(file, 'utf8', finishedReading);

function finishedReading(error, fileData) {
    if(error) {
        console.error(error)
    } else if (fileData) {
        console.log(fileData.split('\n').length -1);
    }
}
