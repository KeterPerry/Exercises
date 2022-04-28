
function Arr (arr){
this.arr = arr;
}
  

const arr= new Arr([1,2,3]);

function callback(e){
    return e>6;

}
function callback(total, arr[i]){
    sum += arr[0];
    return sum;

}

Arr.prototype.MyFilter = function (callback, thisArg)
{
    const arr=[];

    for (let e of this.arr){             
        if (callback(e))
        arr.push(e)
       
    } 

    return arr;   

}

//////////////////////////////////////////////////////////////////////////////

Arr.prototype.find = function (callback, thisArg)
{
    for (let i=0; i<this.arr.length; i++){
        if (callback(this.arr[i], i, this.arr))
         return this.arr[i]; 

}

////////////////////////////////////////////////////////////////////////////

Arr.prototype.reduce = function (callback, 0)
{
    let total=0;
    
   
    for (let i=0; i<this.arr.length; i++){
           total=this.arr[0];
        return callback(this.arr[i+1], total)
    

}









// function myFilter(e) {
//     return e === this.val;
//   }
  
//   var arr = [1, 1, 1, 2, 2];
  
//   console.log(arr.filter(myFilter, {val: 1}));
//   console.log(arr.filter(myFilter, {val: 2}));




callback{
    e 
}

function callback(e) {
    return e === this.val;
  }