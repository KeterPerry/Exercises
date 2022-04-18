
const numbers = [1, -5, 666, 2, 400, 11];

numbers.sort();

const ascSort= numbers.slice().sort((a, b)=> a-b);
const desSort= numbers.slice().sort((b, a)=> b-a);
