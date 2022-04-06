const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
console.log(day);



let today = new Date();
let dayOfMonth = today.getUTCDate();
console.log(dayOfMonth);

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const date = new Date()
let curMonth = month[date.getUTCMonth()];
console.log(curMonth);



const year = new Date();
let curYear = year.getUTCFullYear();
console.log(curYear);

function curDate( day, dayOfMonth, curMonth, curYear){
    return `Today is ${day} the ${dayOfMonth} of ${curMonth}, ${curYear}`
}

 let currentDate= curDate( day, dayOfMonth, curMonth, curYear);
 console.log(currentDate);

