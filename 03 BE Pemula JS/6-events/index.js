// TODO 1 : Buat atau impor variabel EventEmitter dari core module events.
const { EventEmitter } = require('events');

// TODO 2 : Buat variabel myEmitter yang merupakan instance dari EventEmitter.
const myEventEmitter = new EventEmitter();

const birthdayWishes = ({name}) => {
    console.log(`Happy Birthday ${name}`);
}


// TODO 3 : Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.
myEventEmitter.on('birthday', birthdayWishes);


// TODO 4 : Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.
myEventEmitter.emit('birthday', {name: 'Rizal'});

