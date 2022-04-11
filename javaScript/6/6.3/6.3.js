

 let arr= ["boo", "doooo", "hoo","ro"];





 const lengthOfString= function ( arr){
    let lengthOfString=[];  

for( let i=0; i<arr.length; i++)
{
  
   lengthOfString.push(arr[i].length);

}
return lengthOfString;

}



// let lengthOfString1= lengthOfString (arr);
console.log(lengthOfString(arr));
