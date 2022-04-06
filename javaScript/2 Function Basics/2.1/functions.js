(function (){
'use strict';


function describeCountry (country, population, capital){
    return `${country} has ${population}  
    people and its capital city is ${capital}`

}
// let country= "Finland";
// let population= "6 million";
// let capital= "Helsinki"

let country1= describeCountry("Finland", "6 million", "Helsinki");
let country2= describeCountry("Israel", "9 million", "Jerusalem");
let country3= describeCountry("China", "1.4 billion", "Beiiging");


console.log(country1);
console.log(country2);
console.log(country3);



})();



