const testFolder = './src/modules/';
const fs = require('fs');

let arra = [];
fs.readdir(testFolder, (err, files) => {

    files.forEach(file => {
        arra.push(file)
    });
});