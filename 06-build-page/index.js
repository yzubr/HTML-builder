const fs = require('fs');
const path = require('path');

function makeDir(pathtonewfolder, foldername) {
    fs.mkdir(path.join(pathtonewfolder, foldername),
        { recursive: true },
        (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('Directory created successfully!');
        });
}
makeDir(__dirname, 'project-dist');

// function copyFiles(pathtofolderforread,folderforread) {
//     fs.readdir(
//         path.join(pathtofolderforread, folderforread),
//         (err, files) => {
//             if (err) {
//                 return console.error(err);
//             };
//             for (let file of files) {
//                 fs.copyFile(path.join(pathtofolderforread, folderforread, file), path.join(__dirname, 'project-dist', file), (err) => {
//                     if (err) {
//                         return console.error(err);
//                     }
//                     console.log('Files copies successfully!');
//                 });
//             }
//         })
// }
// copyFiles()

function Assets() {
    fs.readdir(path.join(__dirname, 'assets'),
        { withFileTypes: true },
        (err, folder) => {
            if (err) {
                return console.error(err);
            };
            folder.forEach((el) => {
                if (el.isDirectory) {
                    makeDir(path.join(__dirname, 'project-dist', 'assets'), el.name);
                    fs.readdir(
                        path.join(__dirname, 'assets', el.name),
                        (err, files) => {
                            if (err) {
                                return console.error(err);
                            };
                            for (let file of files) {
                                console.log(path.parse(file).name)
                                fs.copyFile(path.join(__dirname, 'assets', el.name, file), path.join(__dirname, 'project-dist', 'assets', el.name, file), (err) => {
                                    if (err) {
                                        return console.error(err);
                                    }
                                    console.log('Files copies successfully!');
                                });
                            }
                        })
                }
            })
        })
}
Assets()