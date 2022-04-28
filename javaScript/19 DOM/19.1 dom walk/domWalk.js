// Create a variable that holds the <li> element with the class “start-here”.
// Use traverse methods to complete these tasks:
// 1. Change the text from “title 2” to “main title”
// 2. Add another sub title with the text “sub title 4”
// 3. Delete the last <li> element from the list.
// 4. Change the <title> element text to “Master Of The Dom”.
// 5. Change the text of the <p> element ot something else of your

//0
const li = document.querySelector(".start-here");
//1
li.textContent= "main title";
//2
const ul = document.querySelector(".sub-title");
ul.innerHTML+= '<li>sub title 4</li>'

//3
const parent = myList.parentElement;
parent.lastElementChild.remove();

// const lastLi = document.querySelector(".sub-title li:last-child");
// ul.removeChild(lastLi);

// const title= document.querySelector("title");
// title.innerHTML='Master Of The Dom'


//5 
const body = parent.parentElement;
const head = body.previousElementSibling;
const title = head.lastElementChild;
title.textContent = 'Master Of The Dom';


//6
const p= document.querySelector("p")
p.innerHTML= 'Hello Everybody'







