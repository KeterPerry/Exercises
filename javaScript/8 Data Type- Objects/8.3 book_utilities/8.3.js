const book1= {
    name: 'The Catcher in the Rye',
    author:  'J. D. Salinger',
    year: '1951',
    genre: 'fiction'
}
function getBook (book){
console.log(`The book ${book.name} was written by ${book.author} in the year ${book.year}`);

}

const book2= {
    name: '1984',
    author:  'George Orwell',
    year: '1949',
    genre: 'fiction'
}


const bookUtil=  {
   
    getFirstPublished(book1, book2){
     let book1modified= parseInt(book1)
     let book2modified= parseInt(book2)

     if (book1modified< book2modified)
         {
            return book1modified;
         }
    
     else if (book1modified> book2modified)
         {
        return book2modified;
         }

     else{
         return "Both were published the same year";}

     },
    


     setNewEdition(book, year){

        return book.latestEdition= 'year';

        

        
        

     },

     setLanguage(book, language){
      return book.language= 'language';

       
     },


     setTranslation( book, language, translator){

       return book.translation = {translator:, 
                          language:};  
    

     },

     setPublisher ( book, name, location){
        book.publisher= {name, 
            location};  
     }

     isSamePublisher (book1, book2){
          const ptr1 =book1.publisher;
          const ptr2 =book2.publisher;

          if (ptr1===ptr2){

            return " The two books are identical."
          }
          else{
            return " The two books are  not identical."
          }

     }



