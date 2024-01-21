var fs = require('fs');

var stream = new fs.ReadStream("../HTML-builder/01-read-file/text.txt");

stream.on('readable', function () {
    var data = stream.read();
    if (data != null) console.log(data.toString());
})

stream.on('error', function (err) {
    if (err.code == 'ENOENT') {
        console.log("Файл не найден");
    } else {
        console.error(err);
    }
});
