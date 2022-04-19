function funcC() {
    console.log("1");
   }

   funcC();

   function funcC() {
    console.log("2");
   }

   funcC();

   // 1. 2 because it linear it will disregard the first function leaving only the second one as an option
   //  the second function overrides the first one.
  
   // 2. 2 because its the only one in the execution phase


   function funcD1() {
    d = 1;
   }

   funcD1();
   console.log(d);
   function funcD2() {
    var e = 1;
   }
   funcD2();
   console.log(e);


   // 1. a global global variable
   // 2. e is undefined because var is function scopped.

////////////////////////////////////////////////////////////////////////
function funcE() {
   console.log("Value of f in local scope: ", f);
  }
  console.log("Value of f in global scope: ", f);
  var f = 1;
  funcE();

// IT WILL FIRST LOG GLOBAL WHICH IS UNDEFINED (VAR F IS HOISTED BUY IS UNDEFINED)
// THEN IT WILL DEFINE F (VAR F=1)AND WILL LOG 1 TO THE SCREEN. (LOCAL SCOPE)