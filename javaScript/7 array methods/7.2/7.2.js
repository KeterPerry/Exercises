const string = "The more you know, the more you know that you don't know";


let arr =string.split("");

console.log(arr);

const index = [];
const element = 'y';
let ioe = arr.indexOf(element);
while (ioe != -1) {
  index.push(ioe);
  ioe= arr.indexOf(element, ioe + 1);
}
console.log(index);
// [0, 2, 4]
