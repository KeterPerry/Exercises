const body= document.querySelector('body');
body.style.height="100vh";
body.style.backgroundColor="rgba(255,255,255)"

const div= document.createElement('div');
// div.style.flex="flex";
div.style.flexdirection= "column";
div.style.justifyContent= "center";
div.style.alignItems= "center";

body.appendChild(div);

const lable= document.createElement('lable');
lable.textContent="why are you interested in this position?";
lable.style.display="block";
div.appendChild(lable);


const textarea= document.createElement('textarea');
// textarea.value="Please enter your answer here";
div.appendChild(textarea);
// textarea.style.cols="50";
// textarea.style.rows="50";

const button1= document.createElement('button');
button1.style.height="5 rem";
button1.style.width="5 rem";
button1.innerText= " Click Here!"
body.appendChild(button1);


button1.addEventListener("click",(event) =>{
    const val= textarea.value;
    if (val.length<100 ){
        textarea.value="Please enter your answer here";
    }

   });

