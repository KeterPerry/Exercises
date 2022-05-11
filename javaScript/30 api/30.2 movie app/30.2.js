async function getD (inputVal) {
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c92c2bf2&t=${inputVal}`);
      const data = await response.json();
      console.log(data);
      enteringData(divs, data);
     
      return data
      
    }
    catch (error) {
        console.log(error)

    }
}
// getD("hero");


const container = document.querySelector(".container");

function createNewDiv(array) {
    
    for (let i = 0; i < array.length; i++){
    let newdiv=array[i];
    newdiv = document.createElement("div");
    const att = document.createAttribute("data");
    att.value = array[i];
    newdiv.setAttributeNode(att);
    // newdiv.add(array[i]);
    container.appendChild(newdiv);
    // console.log(typeOf(newdiv));
    }
}


const arr= ["Poster", "Title", "Genre", "Year", "Plot", "Director", "Actors","Ratings"]
console.log(arr[0]);

  createNewDiv(arr);


const search= document.querySelector("button")
const input= document.querySelector("input")
  const divs= [...document.querySelectorAll(".container div")];
  // console.log(divs[0]);
  // console.log(divs[0].getAttribute("data"));




function enteringData(array, data){
 
const arr2=[];
    
    for (let i = 0; i < array.length; i++){
      console.log(array[i]);
      let searchName=array[i].getAttribute("data");
      console.log(typeof searchName);
                if(i===0)
           { array[i].style.width ="300px";
            array[i].style.height ="300px";
             array[i].style.backgroundImage= `url('${data.Poster}')`;
             console.log(data[searchName]);}
           
       else if(i===array.length-1){
         
           for (let j = 0; j < data.Ratings.length; j++)
           {
            arr2.push(data.Ratings[j]);
            array[i].innerHTML+=`${arr2[j].Source} : ${arr2[j].Value} `;
           }
          }
      //  
      else{
       
       
        array[i].innerText = data[searchName];
          }

}
}

search.addEventListener("click", (event)=>{
  const input= document.querySelector("input")
  getD(input.value);

});

// enteringData(divs,data);






