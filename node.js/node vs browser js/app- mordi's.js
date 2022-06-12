//* NODE JS - run time environment for excuting JS

//? Usage - Back End Serviseces
//* API - aplication programing interface

//* NON Blocking asynchronous

// ! Browser
// window, document, fetch,

// console.log(Object.getOwnPropertyNames(global));

// global.myName = 'Beni';
// console.log(global);

// console.log(process.versions);
// console.log(process.argv);

// const assert = require('assert');
// assert(8 < 5);

// console.log(Buffer);
// const str = 'hola';
// const buffer = Buffer.from(str);
// console.log(str);
// console.log(buffer);

const fs = require('fs');
// fs.writeFile('./myNewFile.txt', 'Some text', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// *Simple way ↓
// ! But dangerous ↓
// fs.writeFileSync('./myNewFile.txt', 'Some text');

// fs.copyFile('myNewFile.txt', 'copyOfMyNewFile.txt', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.rename('copyOfMyNewFile.txt', 'renameCopyOfMyNewFile.txt', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// console.log(__dirname);
// console.log(fs.readdirSync(__dirname));
const files = fs.readdirSync(__dirname);
console.log(files.find((file) => file === 'app.js'));
