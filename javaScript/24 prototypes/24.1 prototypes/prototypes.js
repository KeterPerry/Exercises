function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;

  
}

Square.prototype.isSquare = function() {
  if (this.a===this.b && this.b===this.c && this.c===this.d)
    console.log ("true");

  else
  console.log ("false");
  }


const square1= new Square(3,5,7,8);
const square2= new Square(4,4,4,4);

console.log(square1);
square1.isSquare();
square2.isSquare();





