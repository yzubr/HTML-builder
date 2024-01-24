const fs = require('fs');
const path = require('path');

const bundle = fs.createWriteStream(path.join(__dirname, 'project-dist', "bundle.css"))

fs.readdir(
    path.join(__dirname, 'styles'),
    (err, files) => {
        if (err) {
            return console.error(err);
        };
        files.forEach((file) => {
            if (path.extname(file) == ".css") {
                const stream = fs.createReadStream(path.join(__dirname, 'styles', file), 'utf-8');
                stream.on('data', (chunk) => bundle.write(chunk));
            }
        })
    })