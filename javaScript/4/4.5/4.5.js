function leapYear (year){
    if (year%4===0 &&  !(year%100===0) )
   console.log ("It is indeed a leap year");


   else {
   console.log ("This is not a leap year.");
   }

    // Help:
    // every year that is divisible by 4 is a leap year except for the ones that are 
    // also divisible by 100, unless it is divisible by 400. Example: 2012 is a leap 
    // year 2100 is not But 2400 is.
}

let year= leapYear(2012);