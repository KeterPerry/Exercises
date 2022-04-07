/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.*/
       


const welcome= function() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const power= function(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

 const add= function (a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}


// * Please reformat the following function expressions to function declarations.


const hello = () => "Hello!";

function hello1 () {
    return "Hello"
};

const squareRoot = a => Math.sqrt(a);

function squareRoot1 (a) { 
    return  Math.sqrt(a);
}

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers1 (a, b) {
    return  Math.random() * (a - b) + b ;
};
