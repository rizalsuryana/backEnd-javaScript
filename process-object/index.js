// TODO 1 : Isi dengan nilai heapUsed dari instance process.memoryUsage.
// TODO 2 : Isi dengan nilai index ke-2 dari process.argv.
// TODO 3 : Isi dengan nilai NODE_ENV dari process.env.
// TODO 4 : Isi dengan nilai heapUsed dari instance process.memoryUsage.
// NODE_ENV=development node index.js Rizal Suryana

const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2]
const environment = process.env.NODE_ENV || 'development' //default development jika undefined

for (let i =0; i <=10000; i++) {

}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);