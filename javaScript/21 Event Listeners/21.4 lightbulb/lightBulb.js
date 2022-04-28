const body= document.querySelector('body');
body.style.height="100vh";
body.style.backgroundColor="rgba(255,255,255)"


const div = document.createElement('div');
div.style.backgroundColor="rgba(255,255,255)"
body.appendChild(div);

const img= document.createElement('img');
img.src= "./OFFbulb.jpg";
div.appendChild(img);



img.addEventListener ("click", (event) =>{
  
    event.target.src= "./ONbulb.jpg";
    console.log(img.src);

   
})


const img1 = document.createElement('img1');
div.appendChild(img);

img1.addEventListener ("click", (event) =>{
  
    img.src="./OFFbulb.jpg";

})





 // else if (event.target==="ONbulb.jpg"){
    //     event.target= "OFFbulb.jpg";
    // }


