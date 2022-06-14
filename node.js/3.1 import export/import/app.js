// const sum = require("./function.js"); //optional
// const { sum } = require("./functions.js");
// sum(3, 5);
// subtruct(6, 2);

//ES Module!!

import { sum, subtruct } from "./functions.js";
sum(3, 5);
subtruct(6, 2);

console.log(__dirname);
console.log(__filename);
