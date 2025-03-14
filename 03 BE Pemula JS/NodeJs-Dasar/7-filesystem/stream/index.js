const fs = require('fs');
const path = require('path');

const inputPath = path.resolve(__dirname, 'input.txt');
const outputPath = path.resolve(__dirname, 'output.txt');

const readableStream = fs.createReadStream(inputPath, {
    highWaterMark: 15,
    encoding: 'utf8',
});

const writeableStream = fs.createWriteStream(outputPath);

readableStream.on('data', (chunk) => {
    console.log(chunk);
    writeableStream.write(chunk + '\n');
} );

readableStream.on('end', () => {
    console.log(`Done reading file`);
    writeableStream.end();
})

readableStream.on('error', (error) => {
    console.log('Error saat membaca berkas', error.message);
})

writeableStream.on('error', (error) => {
    console.log('Error saat menulis berkas', error.message);
})