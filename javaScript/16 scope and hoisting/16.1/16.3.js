function funcB() {
    let a = b = 0;
    a++;
    console.log(typeof a);
    return a;
   
   }
   funcB();
   
   console.log(typeof b);

//    typeof a  is  undefined error because logging is outside the function scope. 
//    to solve it , loggiing has to be inside the function.
//    b on the other hand is  global where the second log has an access to. therfore will print number.