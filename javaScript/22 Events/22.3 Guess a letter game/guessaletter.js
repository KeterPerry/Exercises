const body = document.querySelector("body");
body.style.height = "100vh";
body.style.backgroundColor = "white";

const h1 = document.createElement("h1");
h1.innerText = "Welcome To Guess My Letter";
body.appendChild(h1);

const div = document.createElement("div");
body.appendChild(div);

const input = document.createElement("button");
input.innerText = "?";
input.value = "dog";
input.style.width = "3 rem";
input.style.height = "3 rem";
input.style.margin = " 20px";
// input.style.border = "1px solid black";

div.appendChild(input);

const h4 = document.createElement("h4");
h4.innerText = "Please enter a valid letter";
div.appendChild(h4);

const h2 = document.createElement("h2");
h2.innerText = "keys Guessed";
body.appendChild(h2);

const inputReceived = document.createElement("input");
body.appendChild(inputReceived);



const value = input.value;
const arrVal = value.split("");

console.log(arrVal);

// const p = document.createElement("p");
// p.innerText = "Would you like to play again?";
// body.appendChild(p);


let count = 0;

inputReceived.addEventListener("keyup", function (e) {
  console.log(e.key);
  const userInput = e.key;
  let userInputstr = "";
  userInputstr += e.key;
 

  if (Number.isInteger(Number(userInput))) {
    alert("Please enter a valid character");
    inputReceived.value = " ";
  } else if (
    (96 <= userInput.charCodeAt(0) && userInput.charCodeAt(0) <= 122) ||
    (65 <= userInput.charCodeAt(0) && userInput.charCodeAt(0) <= 90)
  ) {
    if (inputReceived.innerText.split(" ").includes(userInput))
      alert("You can't type in a letter twice");

    if (arrVal.includes(userInput)) {
      input.innerText = userInput;
      count++;
      console.log(count);

      if (arrVal.length === count) 
      {h4.innerText = "Game Over!You Won! Would you like to play again?";
      inputReceived.value=" ";
      const confirm = document.createElement("button");
      confirm.innerText = "confirm";
      div.appendChild(confirm);

      confirm.addEventListener("click", function (e) {
        window.location.reload();
        console.log("hey")
      });}

      else 
      {h4.style.color = "green";
      h4.innerText = "right letter";}

    } 
    
    else {
      h4.innerText = "Wrong letter";
      h4.style.color = "red";
    }

    input.innerText = " ";
  }
});




