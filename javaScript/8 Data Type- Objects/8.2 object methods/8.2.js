const mycountry={
    country: 'Israel',
    capital: ' Jerusalem',
    language: 'Hebrew',
    population : '9 million',
    neighbours: [ 'Lebanon', ' Egypt', 'Jordan'],

    desctibe() 
    { console.log( `${this.country} has ${this.population} people, their mother tongue is ${this.language}
    .Its neighbouring countries are ${ this.neighbours} and its capital city is ${this.capital} `);   },

  checkIslan(){
      mycountry.isIsland= '';

      this.neighbours.length===0?  this.island= 'true': this.false= 'true';  },


}

mycountry.desctibe();


