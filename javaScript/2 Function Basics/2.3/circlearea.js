
function circleArea (radius){
    let result= ((radius ** 2) * Math.PI);
    console.log(result);
    return result;
}
 
let radius= 4;
let result=circleArea (radius);
console.log(Math.round(result));

