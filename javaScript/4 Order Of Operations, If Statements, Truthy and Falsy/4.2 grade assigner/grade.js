


function gradeAssigner (score)  {


    if (0<=score && score<= 64){
        return "F"
    }

    else if (65<=score && score<=69){
        return "D"
    }
    else if (70<=score && score<=79 ){
        return "C"
    }
    else if (80<=score && score<=89 ){
        return "B"
    }
    else if (90<=score && score<=100 ){
        return "A"
    }
    
    else{
        return "Error, Your number is out of 0-100 range, please type again"
    }
}

let grade= gradeAssigner(80);
console.log(grade);




