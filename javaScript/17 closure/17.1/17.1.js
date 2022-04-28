var b = 1;
function someFunction(number) {
 function otherFunction(input) {
 return b;
 }
 b = 5;
 return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

/////////////////////////////////////////////////
// var firstResult = otherFunction (returned from the outer func)
// var resault= otherFunction(2) returns 5; because b=5 in the outer function which returns
// is accessable for the inner function


//////////////////////////////////////////////////////////////////////////
var a = 1;
function b2() {
 a = 10;
 return;
 function a() { }
}
b2();
console.log(a);


////////////////////////////////////////////////////////

let i;
for (i = 0; i < 3; i++) {
 const log = () => {
 console.log(i);
 }
 setTimeout(log, 100);
}




