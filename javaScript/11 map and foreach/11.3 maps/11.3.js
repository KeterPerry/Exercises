
const data = [
    {
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    },
    {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    },
    {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    },
    {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    },
  ];




//  function name1 (arr) {

//  const names = arr.map((e)=>e.name);


//  return names;
// }



// console.log(name1(data));


///////////////////////////////////////////////
// function getdate (arr){

//  const birthday = arr.map(function(e) {
//         let year=e.birthday.split("").slice(-4).join("");
//         console.log(year);
           
//         if (year < 1990)
//         return year;
//   });

//   return birthday;
// }

// console.log(getdate(data));

/////////////////////////////////////////////////

function food (arr){
  const food={};

  for (let user of data){    ////////////food.meats is not iterable. why?
    for(let food in user.favoriteFoods){
      for (let e of food.meats){
        food[e]? food[e]+=1 : food[e]=1;
      }
      for (let el of food.fish){
        food[el]? food[el]+=1 : food[el]=1;
    }
  }
}
return food;
}

console.log(food(data));

