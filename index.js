const fs = require('fs-extra');

fs.ensureDir('./folder1', () => {
    fs.writeFileSync('./folder1/text.txt', 'This is a first file.', 'utf8', (error) => {
        error ? console.log(error) : console.log('The file has been created');
    });

    fs.ensureDirSync('./folder2', () => {});

    fs.moveSync('./folder1/text.txt', './folder2/text.txt'), {
        overwrite: true
    };
});


fs.mkdir('./folder3', () => {
    fs.copySync('./folder2/text.txt', './folder3/text.txt');
    fs.removeSync('./folder2/text.txt');
    fs.removeSync('./folder3/text.txt');
    fs.removeSync('./folder1');
    fs.removeSync('./folder2');
    fs.removeSync('./folder3');
});
