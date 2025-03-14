const fs = require('fs');

const fileReadCallBack = (error, data) => {
    if(error){
        console.log('Gagal membaca berkas');
        return;
    }

    console.log(data);
}

fs.readFile('notes.txt', 'UTF-8', fileReadCallBack);

// versi synchronous
const data = fs.readFileSync('todos.txt', 'UTF-8');
console.log(data);