const string = "The more you know, the more you know that you don't know";
const arr =string.split("");
let counter=0;

const arr =string.split("");
let counter=0;

console.log(arr.length);

function getLastY(arr){

for (let i = arr.length-1;  arr.length>0 ; i--){
     counter++
     if (arr[i]==='y')
     return arr.length - counter;
}
}

console.log(getLastY(arr));
//////////////////////////////////////////////////////////////////////////////////////using insexof

const string = "The more you know, the more you know that you don't know";
const arr =string.split("");
const reverse= arr.reverse();
console.log(arr.length);
console.log(reverse);

function getLastY(arr){
 index= reverse.indexOf("y");
 console.log(index);
 return arr.length - (index+1);

}


console.log(getLastY(arr));
