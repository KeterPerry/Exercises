const body= document.querySelector('body');
body.style.height= "100vh";
body.style.backgroundColor= "lightblue";



const inputName= document.createElement('input');
inputName.placeholder="Name";
body.appendChild(inputName);

const inputAge= document.createElement('input');
inputAge.placeholder="Age";
body.appendChild(inputAge);

const inputEmail= document.createElement('input');
inputEmail.placeholder="Email";
body.appendChild(inputEmail);



const button= document.createElement('button');
button.innerText="submit";
body.appendChild(button);

const div= document.createElement('div');
div.style.marginTop= "2 rem";
div.style.display="flex";
div.style.flexDirection="column";

body.appendChild(div);


button.addEventListener("click", function(e) {
    const textArea= document.createElement('textarea');
    div.appendChild(textArea);
    const button1= document.createElement('button');
    button1.innerText="Confirmation";
    div.appendChild(button1);
    const button2= document.createElement('button');
    button2.innerText="Change information";
    div.appendChild(button2);

    button1.addEventListener("click",(event) => {
        alert("Congratulations! you have successfully sent this form");
    })
    button2.addEventListener("click",(event) => {
      textArea.value=" ";
      })

})




