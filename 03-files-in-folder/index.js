const fs = require('fs');
const path = require('path');

// Function to retrieve data for each object within the secret-folder
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
          const fileSize = stats.size;
          const fileExtension = path.extname(file).slice(1);
          console.log(`${file}-${fileExtension}-${fileSize} bytes`);
        }
      });
    });
  });
}

// Read the contents of the secret-folder
const folderPath = './03-files-in-folder/secret-folder';
retrieveData(folderPath);