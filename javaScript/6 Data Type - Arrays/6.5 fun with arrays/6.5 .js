


 
 const arr=  Array(100).fill({name:'same'});
console.log( arr);

const fieldArr= Array (100). fill({name:Ari});



let arr2= Array.from({length: 100}, (e, i) => i + 1);


//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10...]


/*Convert only values of an object into one array.*/


const obj= {val:1, val2: 2};
console.log (Object.values(obj));


/* Convert an array into one object*/
let array1= ['a','b','c'];
const obj;

console.log(Object.assign({obj}, ['a','b','c']);
const obj2={ ...array1};



Array.isArray(obj);
Array.isArray(array1);

/*Create a copy of an array that won’t effect the original
array if modified*/

const array1= ['a','b','c'];
const array2= [].concat (array1);

/*Create a copy of an array that will effect the original
array if modified*/

const array3= ['a','b','c'];
const array4= array3;






