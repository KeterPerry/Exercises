const assert = require("assert");

// console.log(global);
// console.log(global.console);
// global.a2 = "hi";
// console.log(global);

console.log(global.process.versions);
console.log(global.process.release);
//curl -O https://node

// console.log(assert);
// assert(5 > 7);

// console.log(Buffer);
// The buffers module provides a way of handling streams of binary data.
//converting a string to binary data
var buf = Buffer.from("hello");
console.log(buf);

//client side js
//window, document, alert,blur, fetch

console.log(globalThis);

// answer:
// js has window, document (DOM) and fetch -js is a client side front end lanuage supported by the browser only
// node js has 'global' not window process not document and assert - node js is a runtime env for js to support backend properties. uses
// chrome v8 engine which behind the scenes implements c++ functionality
