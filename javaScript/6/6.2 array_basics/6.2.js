
const people = ["Greg", "Mary", "Devon", "James"];

for (let i=0; i<people.length; i++ ){
    console.log( people[i]);
}
people.shift();     /* remove begining*/
console.log(people);

people.pop();
console.log(people);



people.unshift('Matt');     /* add begining*/
console.log(people);

people.push('Keter');
console.log(people);


for (let i=0; i<people.length; i++ ){
    console.log( people[i]);
    if (people[i]==='Mary')
    {
        break;
    }
}

people.slice(2);
people.indexOf('Mary');
people.indexOf('Foo');


const people = ["Greg", "Mary", "Devon", "James"];

people.splice(2, 1)
fruits.splice(2, 0, "Elizabeth", "Artie");

people.push('Bob');

let withBob= people;      ???? using join?
