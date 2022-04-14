
let myvar='hello';

function isString (string, func)    // const isString =(string, callback)=>
 {
    if  (typeof string === 'string')
          func(string);
}

function func (string) {    //const func=()=>
    console.log(string);
    }

isString (myvar, func);


///////////////////////////////////////


let myvar1='hello my child';

function firstWordUpperCase (string, func)
 {
    let arr= string.split(" ");

 

    arr[0]= arr[0].toUpperCase();

    let toStr= arr.join(' ');

    console.log(toStr);
    
    dash(toStr);

}


function dash (string) {

    let newArr= string.split(" ");
    console.log(newArr);

    let strDashed = newArr.join('-');
    console.log(strDashed);

    }

    firstWordUpperCase (myvar1, dash);

////////////////////////////////////////////////




function sumPlusNum (n, func)
{

    console.log(sum(3,4) + n);
}


const sum = function (x,y) {
    return x+y;
}

sumPlusNum(3, sum);