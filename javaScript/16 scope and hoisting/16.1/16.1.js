function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
    return 2;
    }
   }
   funcA();

   a is hoisted but undefined . to solve it log has to be after/below var a
   foo is function decleration and is executed returnning 2

