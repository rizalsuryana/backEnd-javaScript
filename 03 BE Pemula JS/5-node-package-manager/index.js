// Exercise moment
const moment = require('moment');

const date = moment().format('MMM Do YYYY');
console.log('moment \t: ' + date);
console.log('-------------------------------');


// TODO: lodash
const _= require('lodash');

const myOddEvenArray = _.partition([1,2,3,4,5,6], (n) => n %2);

console.log(`lodash \t : ${JSON.stringify(myOddEvenArray)}`);
// menggunakan JSON.stringfy agar output sedikit rapih meskipun tidak serapih spt
console.log(myOddEvenArray);