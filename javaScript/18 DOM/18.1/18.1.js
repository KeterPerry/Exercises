const h1= document.querySelector("h1");
const p= document.querySelector("p");
const a= document.querySelector("a");
const img= document.querySelector("img");
const div= document.querySelectorAll("div");
console.log(h1);
console.log(p);
console.log(a);
console.log(img);
console.log(div);
//////////////////////////////////////////////////////


const variable= document.getElementsByTagName("div");
console.log(variable);



/////////////////////////////////////////////////////////////////////////////////
const inputs = [...document.querySelectorAll("input")];
console.log(inputs);
inputs.forEach((e)=>{
    console.log(e);
})

Array.from(inputs).forEach((e) => {
    console.log(e);
  });