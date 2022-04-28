
 carMarket.getAgencyByName= function(name){     ///checked
     const agencyName= this.sellers.find(e=> e.agencyName===name)
     return agencyName;
 }


////////////////////////////////////////////////////////////

 carMarket.getAgencyIdByName= function (name){    ///checked
     const agency= this.sellers.find(e=> e.agencyName===name)
     
     if (agency)
     return agency. agencyId;
 }


/////////////////////////////////////////////////////////////////////////


carMarket.getAllAgenciesName= function(){   ///checked
    const arr= this.sellers.map(e=> e.agencyName);
    return arr;
  
  }

//////////////////////////////////////////////////////////////////////////////////


carMarket.getAllCarsToBuy = function () {     ///checked
  const arr = [];
  for (let agency of this.sellers) {
    for (let car of agency.cars) {
      for (let model of car.models) {
        arr.push(model);
      }
    }
  }

  return arr;
};

/////////////////////////////////////////////////////////////////////

carMarket.getAllCarToBuyByAgencyId = function (agencyid) {     //checked
  ///func  isn't defined.why?
  const agency = this.sellers.find((e) => e.agencyId === agencyid);
  if (agency) return agency.cars;
};

console.log(carMarket.getAllCarToBuyByAgencyId("Plyq5M5AZ"));



///////////////////////////////////////////////////



carMarket.getAllBrandsToBuyByAgencyId= function (carMarket, agencyid){
    const agency= carMarket.sellers.find(e=>e.agencyId===agencyid)
    
    const arrBrand=[];
    
    if (agency){
   
  
      for( let brand of agency.cars){
       
          arrBrand.push(brand);
      }
    }
      return arrBrand;
  
  }
  
  console.log(carMarket.getAllBrandsToBuyByAgencyId(carMarket, 'Plyq5M5AZ'));
///////////////////////////////////////////////////////////////////////////////////////////////

//////customers
carMarket.getCustomerByName= function (name){     ///checked

    const customer = this.customers.find(e => e.name===name)
    return customer;
    }
    
    console.log(carMarket.getCustomerByName("Lilah Goulding"));
    
    /////////////////////////////////////////////////////////////////////
    //* getCustomerIdByName
    //? @param {name}
    //? @return {String} - customerId - The customer id
    
    carMarket.getCustomerById= function (id){  ///checked
    
    const customerId = this.customers.find((e) => e.id===id)
    return customerId;
    }
    
    console.log(carMarket.getCustomerById("FQvNsEwLZ"));



///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

carMarket.getAllCustomersNames= function (){
 
    const customers= this.customers.map((e)=> e.name)
    return customers;
  
  }
  
  console.log(carMarket.getAllCustomersNames());



//////////////////////////////////////////////////////


carMarket.getAllCustomerCars= function (id){
 
  const customer= this.customers.find((e)=> e.id===id)

  const carName= customer.cars.map((e)=>e.name)

  return carName;
   
}

console.log(carMarket.getAllCustomerCars("FQvNsEwLZ"));


//////////////////////////////////////////////////////////////////

carMarket.getCustomerCash= function (id){
 
    const customer= this.customers.find((e)=> e.id===id)
  
   
  
    return customer.cash;
     
  }
  
  console.log(carMarket.getCustomerCash("FQvNsEwLZ"));