function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    
    }

    Pokemon.prototype.callPokemon= function() {
        console.log(`I choose you ${this.name}`);
    }

    Pokemon.prototype.attack=function(attackNum) {
    
        // const{attackList, name} = this;  ////destructure
        console.log(`${this.name} ${this.attackList[attackNum]}`);
  

    }

    
    const Rani= new Pokemon("Rani", "Fire", ["Ember", "Bite", "FlameThrower"]);
    const Danny= new Pokemon( "Danny", "Electric", ["Tail Whip", "ThunderBolt", "Agility"]);
    const Ben= new Pokemon( "Ben" ,"Water", ["Water Gun", "Hydro Cannon", "Hyper Beam"]);
 

    

    Rani.callPokemon();
    Rani.attack(2);
    Danny.callPokemon();
    Danny.attack(2);
    Ben.callPokemon();
    Ben.attack(2);
  




    




   
      