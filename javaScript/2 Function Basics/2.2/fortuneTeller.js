// (function(){
// 'use strict';

function tellFortune ( jobTitle, location, partnerName, numberOfChildren )
{
    return `You will be a ${jobTitle} in ${location} and married to 
    ${partnerName} with ${numberOfChildren} children`;
}


let fortune= tellFortune ( "programmer", "Tel-Aviv", "Sharon", "4" );

console.log(fortune);


// });