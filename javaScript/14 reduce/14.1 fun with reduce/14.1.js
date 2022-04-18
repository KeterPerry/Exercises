
// const arr=[ 1, 5, 9, 8];

// const max = arr.reduce((max, curval)=> {
//     if (curval > max) return curval;
//     else
//     return max;
    
// });

// console.log(max);

////////////////////////////////////////////////////////////////////////
const arr1= [1,5,9,8,2,10];

function sumOfEven(arr){


    const even= arr.reduce((acc, cur)=>{
       if (cur%2===0)
       acc.push(cur);
       return acc;
      
    

    }, []);

    const sum= even.reduce((total,cur)=>total+cur);
    
     return sum;
    }
    
    console.log(sumOfEven(arr1));
///////////////////////////////////////////////////////////

// const arr2=[ 1, 5, 9, 8, 2, 10];
// let sum=0;

// function average(arr){

// const average= arr2.reduce((total, curval)=> {
//     return total+curval;

// });

//  return average/arr2.length;
// }

// console.log(average (arr2));
// /////////////////////////////////////////////////////


