const fs = require('fs-extra');

fs.ensureDirSync('./folder1', () => {});
fs.ensureFileSync('./folder1/text.txt', 'This is a first file.', 'utf8', () => {});
fs.ensureDirSync('./folder2', () => {});
fs.moveSync('./folder1/text.txt', './folder2/text.txt');

fs.ensureDirSync('./folder3', () => {});
fs.copySync('./folder2/text.txt', './folder3/text.txt');

fs.removeSync('./folder2/text.txt');
fs.removeSync('./folder3/text.txt');
fs.removeSync('./folder1');
fs.removeSync('./folder2');
fs.removeSync('./folder3');
