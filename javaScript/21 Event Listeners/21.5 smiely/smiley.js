const body = document.querySelector('body');
body.style.backgroundColor = "rgba(255,255,255)"
body.style.height = "100vh";

const h3 = document.createElement('h3');
h3.innerText = "How many smiles do you want to see?";
body.appendChild(h3);
const input = document.createElement('input');
input.value = "";
body.appendChild(input);
// const button= document.createElement('button');
// button.value="Submit"
// body.appendChild(button);

const button = document.createElement('button');
button.style.width = "1 rem";
button.style.height = "2 rem";
button.innerText = "submit";
body.appendChild(button);

const div = document.createElement('div');
body.appendChild(div);

button.addEventListener('click', (event) => {
    
    
    const val = input.value;
    const valInt = parseInt(val);

    if (!Number.isInteger(valInt)) {
        alert("Error- Please enter a number");
    }
    else {
           div.innerHTML = "";
          
        for (let i = 0; i < val; i++) {
            const img = document.createElement('img');
            img.src = "./smiley1.png"
            div.appendChild(img);
        }
          
        
    }




});







