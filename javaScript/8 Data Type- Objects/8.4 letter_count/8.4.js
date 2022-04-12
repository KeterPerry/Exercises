


const array = ["Hello", "Good Day", "Your Welcome", "hotdog", 
"hamburgers"];



console.log(array[1].length);
countLetter(array);

function countLetter(array){

    let obj= {};
    



          for(let i=0; i<array.length; i++)
           {  
                 array[i]= array[i].toLowerCase();

                 console.log(array[i]);
                 

             for (let j=0; j<array[i].length; j++)
             {

                if (array[i][j]!==' ')
                

                {  

                    if(obj[array[i][j]])

                    {
                    obj[array[i][j]]= obj[array[i][j]] + 1
                    }

                    else{
                        obj[array[i][j]]= 1;
                    }


                }
            }
    }

    
     console.log(obj); 

}
// array.join('').toLowerCase().split('')       // obj.array[i][j]= obj.array[i][j] + 1 || 1;