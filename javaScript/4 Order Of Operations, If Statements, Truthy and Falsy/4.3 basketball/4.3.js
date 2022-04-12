function avr(x,y,z) {
    return (x+y+z)/3;
}

let team1=" John's team"
let team2=" Mike's team"

let team1avr= avr(89, 120, 103);
let team2avr= avr(116, 94, 123);


function max ( avr1, avr2){
    if (avr1>avr2)
    {
      return avr1;
    }
    else if (avr2>avr1)
    {
      return avr2;
    }
    else 
    return "it's draw";
}

let maxavr= max ( team1avr, team2avr);

if (maxavr=== team1avr)
 console.log(`The winning team is ${team1} with avrage score of ${team1avr}`);
 else if (maxavr=== team2avr)
 console.log(`The winning team is ${team2} with avrage score of ${team2avr}`);


