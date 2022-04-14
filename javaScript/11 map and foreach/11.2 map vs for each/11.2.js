



function doubleValues(arr){

const doubleValues = arr.map(function(n){
    return  n;
});


/////////////////////////////////////////////
function onlyEvenVal (arr){

const onlyEvenVal = arr.map(function(n) {
     if (n%2===0){
        return n
     }
});
}

/////////////////////////////////////////////////




function showFirstAndLast (arr){
    
    const showFirstAndLast = arr.map(function(e, i ) {
        if ( (i===0 || i===arr.length-1 ) && typeOf e==='string')
        return e;
            
    });
}


//////////////////////////////////////////////
function vowelCount (str){

        const arr =str.split('');
        const obj= {}; 

        arr.forEach(function(e,i,arr) {
         
        e = e.toLowerCase();

        if (e=='a' || e=='e' || e=='i' || e=='o' || e=='u')

                obj[e] = obj[e]+1 || 1;
        });

        return obj;
}

////////////////////////////////////////////
function capitalize =  (str){

    const arr = str.split(' ');

    const capitalize = str.map(function(e) {
        return e.toUpperCase();
    });

         let newstr = capitalize.join(' ');
         return newstr;

    }
/////////////////////////////////////////

    function shiftLetters (str){

        let arr =str.split('');

        const shiftLetter = arr.map(function(e){
            if (e ==='a')
            shiftLetter.push('z');
    
            elseif (e ==='A')
            shiftLetter.push('Z'); 
    
            else {
            String.charCodeAT(e)-1;
        
    });

    return shiftLetter.join('');
}

/////////////////////////////////////

// exercise's instruction isn't clear

// function swapCase (str){
    
//     let arr =str.split(' ');
//     const capitalize = arr.map(function(e){
//         return e.toUpperCase();


//     }
