

let siblings = window.prompt("How many siblings do you have?");


if  (siblings==1) {
    console.log("1 sibling");
}
else if (siblings>1){
    console.log("More than one sibling");
} 
else{
    console.log("No siblings"); 
}

/* using (===)instead*/

if  (siblings===1) {
    console.log("1 sibling");
}

/*using typeof - the virable 'sibling' might be a string  such as "one" and not an INT. Therfore
we would use typeof and parseInt func */

console.log(typeof(siblings));
parseInt(siblings) 

// we should use === to make sure the varibles are of the same type.






