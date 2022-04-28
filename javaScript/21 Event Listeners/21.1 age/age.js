const body= document.querySelector('body');
body.style.height= "100vh";
body.style.backgroundColor= 'rgba(255,255,255,0.)';

const input= document.createElement('input');
input.type="text";
// input.value="user's age";
body.appendChild(input);


const button= document.createElement('button');
button.style.width="1 rem";
button.style.height="2 rem";
button.innerText=" submit";
body.appendChild(button);

button.addEventListener("click", (event) => {
    const age =input.value;
    if (age>=18){
     alert("You can drink a beer");
    }
    if (age<18){
     alert("You're too young");
    }
    
});




