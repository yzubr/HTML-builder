const fs = require('fs');
const path = require('path');

function makeDir() {
    fs.mkdir(path.join(__dirname, 'project-dist'),
        { recursive: true },
        (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('Directory created successfully!');
        });
}

function copyFiles() {
    fs.readdir(
        path.join(__dirname, 'assets'),
        (err, files) => {
            if (err) {
                return console.error(err);
            };
            for (let file of files) {
                fs.copyFile(path.join(__dirname, 'assets', file), path.join(__dirname, 'project-dist', file), (err) => {
                    if (err) {
                        return console.error(err);
                    }
                    console.log('Files copies successfully!');
                });
            }
        })
}
copyFiles()