const food = ["Noodle", "Pasta", "Ice-cream", "Meat", 
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", 
"Hamburgers"];
const bla= ['bla', 'bla'];


flag=false;
let i,j;
function compareArr ( food, food1){
    for (i=0; i<food.length; i++)
    {

          for (j=0; j<food1.length; j++)
           
          {
             if (food[i]===food1[j])

                  {   flag=true;
                    console.log(food[i]);
                  }
    
          }

        }

    if (flag===false)
    {return false;}
}

console.log(compareArr(food, bla));



    
