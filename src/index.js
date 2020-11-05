var fs = require('fs');
var path = require('path');

var fileName = '', size=0;

fs.readdir(searchpath, (err, files) => {
    if(err){
        console.log('Could not list the directory files'. err);
    }

    files.forEach(function(file, index){
        var fromPath = path.join(searchpath, file);
        var fileSize = getFileSizeInBytes(fromPath);

        fileName = file;
        size = fileSize;

        console.log('File name: ' + $filename + ' | File size: ' + $size);
    });
});

function getFileSizeInBytes(filename){
    var stats = fs.statSync(filename);
    var fileSizeInBytes = stats['size'];
    return fileSizeInBytes;
}