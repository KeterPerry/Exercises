const storm = { 
    superPower: "Mastering words",

    printSuperPower() {
     console.log("my superpower is " + this.superPower); 
   }
}


   storm.printSuperPower();

   ///////////////////////////////////////////////////
const storm = { 
    superPower: "Mastering words",


  
}

printSuperPower() {
   console.log("my superpower is " + this.superPower); 
 }

storm.printSuperPower= printSuperPower;   ////adds a property to the object
storm.printSuperPower();


