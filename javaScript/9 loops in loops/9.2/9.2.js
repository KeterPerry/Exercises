

 let arr= ["boo", "doooo", "hoo","ro"];

 let newArr= [];

 let i=0; 



 const lengthOfString= function (arr) {
   

while (i < arr.length)

      {
    newArr.push(arr[i].length);
    i++;
      }

      return newArr; 

}


console.log(lengthOfString(arr));


// it doesn't metter, i would use both interchangably