// Create a function that received an array of integers as a 
// parameter. 
// Return a new array without any duplicates inside. You 
// indexOf as part of your solution.
// Example:



const arr= [3,4,4,3,4,4];
const newArr=[];

function removeDuplicates (arr){
    for (let i=0; i<arr.length; i++){
        index= arr.indexOf(arr[i]);
        console.log(index);
        if (newArr.includes(index)){
            arr.splice(i,1);
            i--;
        }
        else {newArr.push(index);
        console.log(index);}
    }
    return arr;
}

console.log(removeDuplicates(arr));



