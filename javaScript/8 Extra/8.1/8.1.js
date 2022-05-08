// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.
// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
// 3. Iterate over the Map object with the for..of loop.
// - log the name and id

const obj1={name: "Ben"}
const obj2={name: "Dan"}
const obj3={name: "Ran"}

const map1 = new Map();
map1.set(obj1, 3545674);    ///sets key(obj) and value(id)
map1.set(obj2, 3458234);
map1.set(obj3, 3562786);
console.log(map1);

for (const key of map1) {
    console.log(key);
    // console.log(map);
}



