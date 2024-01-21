const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'),
    { recursive: true },
    (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });

// fs.readdir();

function copyFiles() {
    fs.readdir(
        path.join(__dirname, 'files'),
        (err, files) => {
            if (err) {
                return console.error(err);
            };
            for (let file of files) {
                fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), (err) => {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('Files copies successfully!');
                });
            }
        })
}
copyFiles()