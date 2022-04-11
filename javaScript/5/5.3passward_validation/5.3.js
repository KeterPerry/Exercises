function passward_validation( password){
    if (password.length >7){
        return 'strong';
    }
    else{
        return 'weak';
    }
}

function password_validation( password){

   return  password.length >7 ?  'strong' : 'weak';
    
}


function password_validation( password){
    let true=true;

      if( password.length >7 && true);
        return 'strong';
    }
    else {
        return 'weak';
    }
}

function password_validation( password){
password.length >7 && checkIfUpper (password)? ' very strong':  password.length ===7 ?  'strong': password.length <7? 'weak': null;

    
}


function checkIfUpper( password){

for ( let i= 0; i<= password.length; i++)
{
if (password[i].toUpperCase() === password[i]) {
    break;
}

}
return true;
}


function passward_validation( password){

    if (password.length >7 && checkIfUpper(password))
        return ' very strong';
        
    else if (password.length ===7)
            return 'strong';
    
       else{password.length <7)
        return 'weak';
    
}