
//*1
const people = ["Greg", "Mary", "Devon", "James"];

for (let i=0; i<people.length; i++ ){
    console.log( people[i]);
}
//*2
people.shift();     /* remove begining*/
console.log(people);
//*3
people.pop();
console.log(people);

//*4

people.unshift('Matt');     /* add begining*/
console.log(people);
//*5
people.push('Keter');
console.log(people);

//*6
for (let i=0; i<people.length; i++ ){
    console.log( people[i]);
    if (people[i]==='Mary')
    { 
        break;
    }
}

console.log (people.slice(2));;
people.indexOf('Mary');
people.indexOf('Foo');


const people = ["Greg", "Mary", "Devon", "James"];


people.splice(2, 1, "Elizabeth", "Artie");

people.push('Bob');

let withBob= people.concat('Bob');
      
