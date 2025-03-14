const fs = require('fs')

const writeableStream = fs.createWriteStream('writeableStream/output.txt');

writeableStream.write('This is the first line texts! \n');
writeableStream.write('This is the second line texts ! \n');
writeableStream.end('End of writeable stream');
console.log('done')