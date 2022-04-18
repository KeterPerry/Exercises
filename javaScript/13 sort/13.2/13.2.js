// const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
// const foods1 = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];



// foods.sort(); 
// console.log(foods);

// foods1.sort();
// foods1.reverse();
// console.log(foods1);
/////////////////////////////////////////////////////

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
  ];
const foodsWithUpperCase1 = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
  ];
  
//   const newArr=[];

//   for (let e of foodsWithUpperCase )
//   {
//      newArr.push(e.toLowerCase());
//   }

//   console.log(newArr);

foodsWithUpperCase.sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if( a == b) return 0;
    return a < b ? -1 : 1;
});

console.log(foodsWithUpperCase);

foodsWithUpperCase1.sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    if( a == b) return 0;
    return a > b ? -1 : 1;
});

console.log(foodsWithUpperCase1);


///////////////////////////////////////////////////////////

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];


words.sort((a,b)=> b.length - a.length);

console.log(words);