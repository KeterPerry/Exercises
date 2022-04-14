const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },

        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200,
}


function getCandy(candyStore, id){ 
    
    const getcandy= candyStore.candies.find(e => e.id===id);

    return getcandy;

}

console.log(getCandy(candyStore, "as12f"));



     /////////////////////////////////////////

     
function getPrice(candyStore, id){ 
    
    const price= candyStore.candies.find(e => e.id===id);

    return price.price;

}

console.log(getPrice(candyStore, "as12f"));
   



//     //////////////////////////////////////////////////////
    function addCandy(candyStore, id, name, price){
        
            const obj= {
                name: name,
                id: id,
                price:price,
                amount: 1
            }
            
            candyStore.candies.push(obj);
            console.log(candyStore.candies);

        }



console.log(addCandy(candyStore, "a312f", 'Teaami', 3));





/////////////////////////////////////////////////
    const buy= function (candyStore, id){

    const price= candyStore.candies.find( function (e) {
        if (e.id===id)
        return e;
        
    })
     
    candyStore.cashRegister = price.price + candyStore.cashRegister;
    price.amount--;
  
    console.log(candyStore.cashRegister);
    console.log(price.amount--);
    

    } 
    

      console.log(buy(candyStore, 'as12f'));