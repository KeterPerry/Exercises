// 1. What is wrong with the code? explain in your own words
// 2. Fix the code so that invoking the whoIsStronger function 
// will print "I am stronger".
// note: you cannot change the 'hero' or the whoIsStronger 
// function.
// 1. getStrength is a func inside the obj hero and as such ,this refers to the that object
// that  does not apply to any other func trying to reach that this. Therefor, we have to use some sort of binding.

 const hero = {
   health: 5,
   power: 68,
   getStrength: function(){
     if (this.health <= 5){
       return this.power - 10;
     } else return this.power;
   }
 }
 function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){
      return "I am stronger";
    } else return "You are stronger";
  }


whoIsStronger(hero.getStrength);

console.log(whoIsStronger(hero.getStrength.bind(hero)));



