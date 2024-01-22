const fs = require('fs');
const path = require('path');

const folderPath = './03-files-in-folder/secret-folder';

function retrieveData(folderPath) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(folderPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error getting file stats:', err);
          return;
        }

        if (stats.isFile()) {
          const filename = path.parse(file).name;
          const fileSize = stats.size;
          const fileExtension = path.extname(file).slice(1);
          console.log(`${filename}-${fileExtension}-${fileSize} bytes`);
        }
      });
    });
  });
}
retrieveData(folderPath);