const body= document.querySelector('body');
body.style.height="100vh";
body.style.backgroundColor="rgba(255,255,255)"

const h1= document.createElement('h1');
h1.innerText="Hello";
body.appendChild(h1);
const p= document.createElement('p');
p.innerText="some text"; 
p.style.fontSize="20px";
///can i do lorem?
body.appendChild(p);

const button1= document.createElement('button');
button1.style.height="3 rem";
button1.style.width="3 rem";
button1.innerText= "+"   ////maybe value?
body.appendChild(button1);
const button2= document.createElement('button');
button2.style.height="3 rem";
button2.style.width="3 rem";
button2.innerText= "-"   ////maybe value?
body.appendChild(button2);

button1.addEventListener("click",(event) => {
    
    p.style.fontSize="100px";
});

button2.addEventListener("click",(event) => {
    
    p.style.fontSize="6px";
});




